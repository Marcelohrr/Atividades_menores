const real = {
    style: 'currency',
    currency: 'BRL'
};

function verificarDOM(elementoArray, exercicio) {
    elementoArray.forEach(e => {
        if (!e) {
            throw new Error(`Elemento do exercício ${exercicio} não encontrado no DOM.`);
        }
    })
}

function verificarInput(inputArray, div) {
    if (inputArray.some(input => input.value.trim() === '')) {
        div.textContent = inputArray.length === 1 ? 'Insira um valor!' : 'Insira os valores!';
        return true;
    }
    return false;
}

function verificarNumero(numeroArray, div) {
    if (numeroArray.some(numero => Number.isNaN(numero))) {
        div.textContent = numeroArray.length === 1 ? 'Insira um valor válido!' : 'Insira valores válidos!';
        return true;
    }
    return false;
}

// Exercício 41
try {
    const form41 = document.querySelector('form#ex41-form');
    const resultadoDiv41 = document.querySelector('div#resultado41');

    verificarDOM([form41, resultadoDiv41], 41);

    const inputNascimento41 = form41.elements['ex41-nascimento'];
    const inputAniversario41 = form41.elements['ex41-aniversario'];

    const anoAtual = new Date().getFullYear();
    inputNascimento41.min = anoAtual - 150;
    inputNascimento41.max = anoAtual;

    const categorias41 = {
        mirim: 9,
        infantil: 14,
        junior: 19,
        senior: 25
        // master: Infinity
    };

    form41.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputNascimento41], resultadoDiv41)) return;

        if (inputAniversario41.value === '') {
            resultadoDiv41.textContent = 'Selecione uma opção!';
            return;
        }

        const nascimento41 = Number(inputNascimento41.value);
        const aniversario41 = inputAniversario41.value;

        if (verificarNumero([nascimento41], resultadoDiv41)) return;

        const idade41 = anoAtual - nascimento41 - (aniversario41 === 's' ? 0 : 1);

        if (idade41 <= categorias41.mirim) {
            resultadoDiv41.textContent = 'A categoria do atleta é: MIRIM!';
        } else if (idade41 <= categorias41.infantil) {
            resultadoDiv41.textContent = 'A categoria do atleta é: INFANTIL!';
        } else if (idade41 <= categorias41.junior) {
            resultadoDiv41.textContent = 'A categoria do atleta é: JÚNIOR!';
        } else if (idade41 <= categorias41.senior) {
            resultadoDiv41.textContent = 'A categoria do atleta é: SÊNIOR!';
        } else {
            resultadoDiv41.textContent = 'A categoria do atleta é: MASTER!';
        }

        form41.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 42
try {
    const form42 = document.querySelector('form#ex42-form');
    const resultadoDiv42 = document.querySelector('div#resultado42');

    verificarDOM([form42, resultadoDiv42], 42);

    const inputComprimento42 = form42.elements['ex42-comprimento'];
    const botaoRegistrar42 = form42.elements['ex42-botao-registrar'];

    const comprimentosArray42 = [];

    function registrarNumero42() {
        if (verificarInput([inputComprimento42], resultadoDiv42)) return;

        const comprimento42 = Number(inputComprimento42.value);

        if (verificarNumero([comprimento42], resultadoDiv42)) return;

        if (comprimentosArray42.length === 3) {
            resultadoDiv42.textContent = 'Já foram registrados 3 comprimentos!';
            return;
        }

        comprimentosArray42.push(comprimento42);
        resultadoDiv42.textContent = `Comprimento ${comprimento42} registrado (${comprimentosArray42.length}/3)!`;

        inputComprimento42.value = '';
        inputComprimento42.focus();
    }

    botaoRegistrar42.addEventListener('click', registrarNumero42);

    form42.addEventListener('submit', function(e) {
        e.preventDefault();

        if (inputComprimento42.value !== '' && comprimentosArray42.length < 3) {
            registrarNumero42();
            return;
        }

        if (comprimentosArray42.length !== 3) {
            resultadoDiv42.textContent = 'Insira 3 comprimentos!';
            return;
        } else {
            const [a, b, c] = comprimentosArray42;

            const triangulo42 =
                a < b + c &&
                b < a + c &&
                c < a + b;

            const lados42 = comprimentosArray42.join(', ');

            if (triangulo42) {
                if (a === b && b === c) {
                    resultadoDiv42.textContent = `Com os comprimentos ${lados42} é possível formar um triângulo (equilátero)!`;
                } else if (a === b || a === c || b === c) {
                    resultadoDiv42.textContent = `Com os comprimentos ${lados42} é possível formar um triângulo (isósceles)!`;
                } else {
                    resultadoDiv42.textContent = `Com os comprimentos ${lados42} é possível formar um triângulo (escaleno)!`;
                }
            } else {
                resultadoDiv42.textContent = `Com os comprimentos ${lados42} não é possível formar um triângulo!`;
            }
        }

        comprimentosArray42.length = 0;

        form42.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 43
try {
    const form43 = document.querySelector('form#ex43-form');
    const resultadoDiv43 = document.querySelector('div#resultado43');

    verificarDOM([form43, resultadoDiv43], 43);

    const inputPeso43 = form43.elements['ex43-peso'];
    const inputAltura43 = form43.elements['ex43-altura'];

    const categorias43 = [
        { limite: 18.5, status: 'Abaixo do peso' },
        { limite: 25, status: 'Peso normal' },
        { limite: 30, status: 'Sobrepeso' },
        { limite: 35, status: 'Obesidade grau I' },
        { limite: 40, status: 'Obesidade grau II' },
        { limite: Infinity, status: 'Obesidade grau III (mórbida)' }
    ];

    form43.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputPeso43, inputAltura43], resultadoDiv43)) return;

        const peso43 = Number(inputPeso43.value);
        const altura43 = Number(inputAltura43.value);

        if (verificarNumero([peso43, altura43], resultadoDiv43)) return;

        const linhas43 = [
            `Peso: ${peso43} kg.`,
            `Altura: ${altura43} m.`
        ];

        const imc43 = peso43 / altura43 ** 2;
        linhas43.push(`IMC: ${imc43.toFixed(1)}.`);

        for (const categoria43 of categorias43) {
            if (imc43 <= categoria43.limite) {
                linhas43.push(`Status: ${categoria43.status}.`);
                break;
            }
        }

        resultadoDiv43.textContent = linhas43.join('\n');

        form43.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 44
try {
    const form44 = document.querySelector('form#ex44-form');
    const resultadoDiv44 = document.querySelector('div#resultado44');

    verificarDOM([form44, resultadoDiv44], 44);

    const inputValor44 = form44.elements['ex44-valor'];

    const ajusteDinheiroCheque44 = 0.9;
    const ajusteCartao44_1 = 0.95;
    const ajusteCartao44_2 = 1;
    const ajusteCartao44_3 = 1.2;

    form44.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputValor44], resultadoDiv44)) return;

        const valor44 = Number(inputValor44.value);

        if (verificarNumero([valor44], resultadoDiv44)) return;

        // Criação do form com select para as opções de pagamento
        const formPagamento44 = document.createElement('form');
        formPagamento44.method = 'get';

        const labelPagamento44 = document.createElement('label');
        labelPagamento44.htmlFor = 'ex44-id-pagamento';
        labelPagamento44.textContent = 'Defina a forma de pagamento:';

        const selectPagamento44 = document.createElement('select');
        selectPagamento44.name = 'ex44-pagamento';
        selectPagamento44.id = 'ex44-id-pagamento';

        const optionPagamento44 = document.createElement('option');
        optionPagamento44.value = '';
        optionPagamento44.disabled = true;
        optionPagamento44.selected = true;
        optionPagamento44.textContent = 'Selecione uma opção!';
        selectPagamento44.appendChild(optionPagamento44);

        const groupPagamentoDC44 = document.createElement('optgroup');
        groupPagamentoDC44.label = 'Dinheiro ou Cheque';
        const groupPagamentoCartao44 = document.createElement('optgroup');
        groupPagamentoCartao44.label = 'Cartão';

        const optionDinheiroCheque44 = document.createElement('option');
        optionDinheiroCheque44.value = 'DC';
        optionDinheiroCheque44.textContent = `${(valor44 * ajusteDinheiroCheque44).toLocaleString('pt-BR', real)} — à vista (10% de desconto!)`;
        groupPagamentoDC44.appendChild(optionDinheiroCheque44);

        const optionCartao44_1 = document.createElement('option');
        optionCartao44_1.value = 'C1';
        optionCartao44_1.textContent = `${(valor44 * ajusteCartao44_1).toLocaleString('pt-BR', real)} — à vista (5% de desconto!)`;
        groupPagamentoCartao44.appendChild(optionCartao44_1);

        const optionCartao44_2 = document.createElement('option');
        optionCartao44_2.value = 'C2';
        optionCartao44_2.textContent = `${(valor44 * ajusteCartao44_2).toLocaleString('pt-BR', real)} — 2x`;
        groupPagamentoCartao44.appendChild(optionCartao44_2);

        const optionCartao44_3 = document.createElement('option');
        optionCartao44_3.value = 'C3';
        optionCartao44_3.textContent = `${(valor44 * ajusteCartao44_3).toLocaleString('pt-BR', real)} — 3x ou mais (20% de juros!)`;
        groupPagamentoCartao44.appendChild(optionCartao44_3);

        selectPagamento44.appendChild(groupPagamentoDC44);
        selectPagamento44.appendChild(groupPagamentoCartao44);

        const botaoPagamento44 = document.createElement('button');
        botaoPagamento44.type = 'submit';
        botaoPagamento44.textContent = 'Esse botão não faz nada!';
        botaoPagamento44.disabled = true;

        formPagamento44.appendChild(labelPagamento44);
        formPagamento44.appendChild(selectPagamento44);
        formPagamento44.appendChild(botaoPagamento44);

        resultadoDiv44.innerHTML = '';
        resultadoDiv44.appendChild(formPagamento44);
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 45
try {
    const form45 = document.querySelector('form#ex45-form');
    const resultadoDiv45 = document.querySelector('div#resultado45');

    verificarDOM([form45, resultadoDiv45], 45);

    const select45 = form45.elements['ex45-jogada'];

    const vence45 = {
        pedra: ['tesoura'],
        papel: ['pedra'],
        tesoura: ['papel'],
        'bomba nuclear': ['pedra', 'papel', 'tesoura']
    };

    const opcoes45 = Object.keys(vence45);

    opcoes45.forEach(o => {
        const opcao45 = document.createElement('option');
        opcao45.value = o;
        opcao45.textContent = o.charAt(0).toUpperCase() + o.slice(1);
        select45.appendChild(opcao45);
    })

    form45.addEventListener('submit', function(e) {
        e.preventDefault();

        const jogadaPlayer45 = select45.value;

        const jogadaComputador45 = opcoes45[Math.floor(Math.random() * opcoes45.length)];

        const linhas45 = [
            `Você jogou: ${jogadaPlayer45}.`,
            `O computador jogou: ${jogadaComputador45}.`
        ]

        if (jogadaPlayer45 === jogadaComputador45) {
            linhas45.push(`Empate!`);
        } else if (vence45[jogadaPlayer45].includes(jogadaComputador45)) {
            linhas45.push(`Vitória!`);
        } else {
            linhas45.push(`Derrota!`);
        }

        resultadoDiv45.textContent = linhas45.join('\n');

        form45.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 46
try {
    const botao46 = document.querySelector('button#ex46-contagem');
    const resultadoDiv46 = document.querySelector('div#resultado46');

    verificarDOM([botao46, resultadoDiv46], 46);

    botao46.addEventListener('click', () => {
        let contagem46 = 10;

        resultadoDiv46.textContent = contagem46;
        
        const intervalo = setInterval(() => { // setInterval() = função para executar repetidamente um bloco de código em intervalos fixos de tempo
            contagem46--;

            resultadoDiv46.textContent = contagem46;

            if (contagem46 === 0) {
                clearInterval(intervalo); // Interrompe loop de contagem

                resultadoDiv46.textContent = '🎆🎇💥✨🎉🎊 Bum! 🎊🎉✨💥🎇🎆';
            }
        }, 1000) // 1000 ms = 1 s
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 47
try {
    const form47 = document.querySelector('form#ex47-form');
    const resultadoDiv47 = document.querySelector('div#resultado47');

    verificarDOM([form47, resultadoDiv47], 47);

    const inputValor1 = form47.elements['ex47-valor1'];
    const inputValor2 = form47.elements['ex47-valor2'];

    form47.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputValor1, inputValor2], resultadoDiv47)) return;

        const valor1 = Number(inputValor1.value);
        const valor2 = Number(inputValor2.value);

        if (verificarNumero([valor1, valor2], resultadoDiv47)) return;

        const pares47 = [];

        const menor47 = Math.min(valor1, valor2);
        const maior47 = Math.max(valor1, valor2);

        for (let contagem = menor47 + 1; contagem < maior47; contagem++) {
            if (contagem % 2 === 0) {
                pares47.push(contagem);
            }
        }

        if (pares47.length === 0) {
            resultadoDiv47.textContent = `Entre os números ${valor1} e ${valor2}, não há números pares!`;
        } else {
            resultadoDiv47.textContent = `Entre os números ${valor1} e ${valor2}, os números pares são: ${pares47.join(', ')}.`;
        }

        form47.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 48
try {
    const botao48 = document.querySelector('button#ex48-calcular');
    const resultadoDiv48 = document.querySelector('div#resultado48');

    verificarDOM([botao48, resultadoDiv48], 48);

    const inicio48 = 1;
    const fim48 = 500;
    let soma48 = 0;

    botao48.addEventListener('click', () => {
        for (let contador = inicio48; contador <= fim48; contador++) {
            if (contador % 2 !== 0 && contador % 3 === 0) {
                soma48 += contador;
            }
        }

        resultadoDiv48.textContent = `A soma entre todos os números ímpares múltiplos de 3 no intervalo de ${inicio48} até ${fim48} é: ${soma48}.`;
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 49
try {
    const form49 = document.querySelector('form#ex49-form');
    const resultadoDiv49 = document.querySelector('div#resultado49');

    verificarDOM([form49, resultadoDiv49], 49);

    const tabela49 = document.createElement('table');

    const titulo49 = document.createElement('caption');
    tabela49.appendChild(titulo49);

    const cabecalho49 = document.createElement('thead');
    const linhaCabecalho49 = document.createElement('tr');
    const celulaCabecalhoO49 = document.createElement('th');
    const celulaCabecalhoR49 = document.createElement('th');
    celulaCabecalhoO49.textContent = 'Operação';
    linhaCabecalho49.appendChild(celulaCabecalhoO49);
    celulaCabecalhoR49.textContent = 'Resultado';
    linhaCabecalho49.appendChild(celulaCabecalhoR49);
    cabecalho49.appendChild(linhaCabecalho49);
    tabela49.appendChild(cabecalho49);

    const corpo49 = document.createElement('tbody');
    tabela49.appendChild(corpo49);

    const inputNumero49 = form49.elements['ex49-numero'];

    form49.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputNumero49], resultadoDiv49)) return;

        const numero49 = Number(inputNumero49.value);

        if (verificarNumero([numero49], resultadoDiv49)) return;

        titulo49.textContent = `Tabuada de ${numero49}`;

        corpo49.replaceChildren(); // Limpa o elemento

        for (let i49 = 1; i49 <= 10; i49++) {
            const linhaCorpo49 = document.createElement('tr');

            const celulaCorpoO49 = document.createElement('td');
            celulaCorpoO49.textContent = `${numero49} x ${i49}`;
            linhaCorpo49.appendChild(celulaCorpoO49);

            const celulaCorpoR49 = document.createElement('td');
            celulaCorpoR49.textContent = numero49 * i49;
            linhaCorpo49.appendChild(celulaCorpoR49);

            corpo49.appendChild(linhaCorpo49);
        }

        if (!resultadoDiv49.contains(tabela49)) {
            resultadoDiv49.appendChild(tabela49);
        }

        form49.reset();
    })
} catch (erro) {
    console.error(erro)
}

// Exercício 50
try {
    const form50 = document.querySelector('form#ex50-form');
    const resultadoDiv50 = document.querySelector('div#resultado50');

    verificarDOM([form50, resultadoDiv50], 50);

    const inputNumero50 = form50.elements['ex50-numero'];
    const botaoRegistrar50 = form50.elements['ex50-botao-registrar'];

    const paresArray50 = [];

    function registrarNumero50() {
        if (verificarInput([inputNumero50], resultadoDiv50)) return;

        const numero50 = Number(inputNumero50.value);

        if (verificarNumero([numero50], resultadoDiv50)) return;

        if (numero50 % 2 === 0) {
            paresArray50.push(numero50);
            resultadoDiv50.textContent = `Número ${numero50} registrado!`;
        } else {
            resultadoDiv50.textContent = `Número ${numero50} NÃO registrado!`;
        }

        inputNumero50.value = '';
        inputNumero50.focus();
    }

    botaoRegistrar50.addEventListener('click', registrarNumero50);

    form50.addEventListener('submit', function(e) {
        e.preventDefault();

        if (inputNumero50.value !== '') {
            registrarNumero50();
            return;
        }

        if (paresArray50.length === 0) {
            resultadoDiv50.textContent = `Nenhum número par foi inserido!`;
            return;
        }

        const soma50 = paresArray50.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); // array.reduce(callback, valorInicialDoAcumulador) reduz um array a um único valor, aplicando uma função a cada elemento do array

        resultadoDiv50.textContent = `A soma dos números ${paresArray50.join(', ')} é igual a ${soma50}!`

        form50.reset();
    })
} catch (erro) {
    console.error(erro)
}