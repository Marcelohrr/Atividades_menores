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

// Exercício 31
try {
    const form31 = document.querySelector('form#ex31-form');
    const resultadoDiv31 = document.querySelector('div#resultado31');

    verificarDOM([form31, resultadoDiv31], 31);

    const inputDistancia31 = form31.elements['ex31-distancia'];

    form31.addEventListener('submit', function(evento) {
        evento.preventDefault();

        if (verificarInput([inputDistancia31], resultadoDiv31)) return;

        const distancia31 = Number(inputDistancia31.value);

        if (verificarNumero([distancia31], resultadoDiv31)) return;

        if (distancia31 < 0) {
            resultadoDiv31.textContent = 'A distância não pode ser negativa.';
            return;
        }

        const precoCurto31 = 0.5;
        const limitePrecos31 = 200;
        const precoLongo31 = 0.45;

        const precoFinal31 = Math.floor((distancia31 <= limitePrecos31 ? (distancia31 * precoCurto31) : (distancia31 * precoLongo31))).toLocaleString('pt-BR', real);

        const linhas31 = [
            `Distância inserida: ${distancia31} km.`,
            `O preço é ${precoFinal31}.`
        ];

        resultadoDiv31.textContent = linhas31.join('\n');

        form31.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 32
try {
    const form32 = document.querySelector('form#ex32-form');
    const resultadoDiv32 = document.querySelector('div#resultado32');

    verificarDOM([form32, resultadoDiv32], 32);

    const inputAno32 = form32.elements['ex32-ano'];

    form32.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputAno32], resultadoDiv32)) return;

        const ano32 = Number(inputAno32.value);

        if (verificarNumero([ano32], resultadoDiv32)) return;

        const bissexto32 = (ano32 % 4 === 0 && ano32 % 100 !== 0) || (ano32 % 400 === 0);

        resultadoDiv32.textContent = `O ano ${ano32} ${bissexto32 ? 'é bissexto' : 'não é bissexto'}!`;

        form32.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 33
try {
    const form33 = document.querySelector('form#ex33-form');
    const resultadoDiv33 = document.querySelector('div#resultado33');

    verificarDOM([form33, resultadoDiv33], 33);

    const inputNumero33 = form33.elements['ex33-numero'];
    const botaoRegistrar33 = form33.elements['ex33-botao-registrar'];

    const numerosArray33 = [];

    function registrarNumero33() {
        if (verificarInput([inputNumero33], resultadoDiv33)) return;

        const numero33 = Number(inputNumero33.value);

        if (verificarNumero([numero33], resultadoDiv33)) return;

        numerosArray33.push(numero33);
        resultadoDiv33.textContent = `Número ${numero33} registrado!`;

        inputNumero33.value = '';
        inputNumero33.focus();
    }

    botaoRegistrar33.addEventListener('click', registrarNumero33);

    form33.addEventListener('submit', function(e) {
        e.preventDefault();

        if (inputNumero33.value !== '') {
            registrarNumero33();
        }

        if (numerosArray33.length < 3) {
            resultadoDiv33.textContent = 'Insira pelo menos 3 números!';
            return;
        } else {
            let menor33 = numerosArray33[0];
            let maior33 = numerosArray33[0];

            for (let i = 1; i < numerosArray33.length; i++) {
                if (numerosArray33[i] < menor33) {
                    menor33 = numerosArray33[i];
                }

                if (numerosArray33[i] > maior33) {
                    maior33 = numerosArray33[i];
                }
            }

            const linhas33 = [
                `Lista de números registrada: ${numerosArray33.join(', ')}.`,
                `Maior número: ${maior33}.`,
                `Menor número: ${menor33}.`
            ];

            resultadoDiv33.textContent = linhas33.join('\n');
        }

        numerosArray33.length = 0;

        form33.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 34
try {
    const form34 = document.querySelector('form#ex34-form');
    const resultadoDiv34 = document.querySelector('div#resultado34');

    verificarDOM([form34, resultadoDiv34], 34);

    const inputSalario34 = form34.elements['ex34-salario'];

    form34.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputSalario34], resultadoDiv34)) return;

        const salario34 = Number(inputSalario34.value);

        if (verificarNumero([salario34], resultadoDiv34)) return;

        const aumentoMenor34 = 0.1;
        const aumentoMaior34 = 0.15;
        const limiteAumento34 = 1250;
        let aumento34;

        if (salario34 > limiteAumento34) {
            aumento34 = salario34 * aumentoMenor34;
        } else {
            aumento34 = salario34 * aumentoMaior34;
        }

        resultadoDiv34.textContent = `O aumento para o salário de ${salario34.toLocaleString('pt-BR', real)} é de ${(aumento34).toLocaleString('pt-BR', real)}.`;

        form34.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 35
try {
    const form35 = document.querySelector('form#ex35-form');
    const resultadoDiv35 = document.querySelector('div#resultado35');

    verificarDOM([form35, resultadoDiv35], 35);

    const inputComprimento35 = form35.elements['ex35-comprimento'];
    const botaoRegistrar35 = form35.elements['ex35-botao-registrar'];

    const comprimentosArray35 = [];

    function registrarNumero35() {
        if (verificarInput([inputComprimento35], resultadoDiv35)) return;

        const comprimento35 = Number(inputComprimento35.value);

        if (verificarNumero([comprimento35], resultadoDiv35)) return;

        if (comprimentosArray35.length === 3) {
            resultadoDiv35.textContent = 'Já foram registrados 3 comprimentos!';
            return;
        }

        comprimentosArray35.push(comprimento35);
        resultadoDiv35.textContent = `Comprimento ${comprimento35} registrado (${comprimentosArray35.length}/3)!`;

        inputComprimento35.value = '';
        inputComprimento35.focus();
    }

    botaoRegistrar35.addEventListener('click', registrarNumero35);

    form35.addEventListener('submit', function(e) {
        e.preventDefault();

        if (inputComprimento35.value !== '' && comprimentosArray35.length < 3) {
            registrarNumero35();
            return;
        }

        if (comprimentosArray35.length !== 3) {
            resultadoDiv35.textContent = 'Insira 3 comprimentos!';
            return;
        } else {
            const [a, b, c] = comprimentosArray35;

            const triangulo35 =
                a < b + c &&
                b < a + c &&
                c < a + b;

            const linhas35 = [
                `Com os comprimentos ${comprimentosArray35.join(', ')}:`,
                `${triangulo35 ? 'é' : 'não é'} possível formar um triângulo`
            ];

            resultadoDiv35.textContent = linhas35.join('\n');
        }

        comprimentosArray35.length = 0;

        form35.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 36
try {
    const form36 = document.querySelector('form#ex36-form');
    const resultadoDiv36 = document.querySelector('div#resultado36');

    verificarDOM([form36, resultadoDiv36], 36);

    const inputValor36 = form36.elements['ex36-valor'];
    const inputSalario36 = form36.elements['ex36-salario'];
    const inputAnos36 = form36.elements['ex36-anos'];

    form36.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputValor36, inputSalario36, inputAnos36], resultadoDiv36)) return;

        const valor36 = Number(inputValor36.value);
        const salario36 = Number(inputSalario36.value);
        const anos36 = Number(inputAnos36.value);

        if (verificarNumero([valor36, salario36, anos36], resultadoDiv36)) return;

        const limite36 = 0.3;

        const prestacoesMensais36 = valor36 / (12 * anos36);

        const emprestimoAprovado = prestacoesMensais36 <= salario36 * limite36;

        const linhas36 = [
            `Valor da casa: ${valor36.toLocaleString('pt-BR', real)}.`,
            `Salário do comprador: ${salario36.toLocaleString('pt-BR', real)}.`,
            `Anos a pagar: ${anos36} (prestações de ${prestacoesMensais36.toLocaleString('pt-BR', real)} mensais).`,
            emprestimoAprovado ? 'O empréstimo está aprovado!' : `O empréstimo está negado, pois o valor das prestações excede o limite de ${limite36 * 100}% do salário.`
        ];

        resultadoDiv36.textContent = linhas36.join('\n');

        form36.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 37
try {
    const form37 = document.querySelector('form#ex37-form');
    const resultadoDiv37 = document.querySelector('div#resultado37');

    verificarDOM([form37, resultadoDiv37], 37);

    const inputNumero37 = form37.elements['ex37-numero'];
    const inputBase37 = form37.elements['ex37-base'];

    form37.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputNumero37], resultadoDiv37)) return;

        const numero37 = Number(inputNumero37.value);
        const base37 = inputBase37.value;

        if (verificarNumero([numero37], resultadoDiv37)) return;

        let numeroConvertido37;

        switch (base37) {
            case 'b':
                numeroConvertido37 = numero37.toString(2);
                resultadoDiv37.textContent = `O número ${numero37} convertido para binário é igual a: ${numeroConvertido37}.`
                break;

            case 'o':
                numeroConvertido37 = numero37.toString(8);
                resultadoDiv37.textContent = `O número ${numero37} convertido para octal é igual a: ${numeroConvertido37}.`
                break;

            case 'h':
                numeroConvertido37 = numero37.toString(16).toUpperCase();
                resultadoDiv37.textContent = `O número ${numero37} convertido para hexadecimal é igual a: ${numeroConvertido37}.`
                break;

            default:
                resultadoDiv37.textContent = 'Insira uma base válida!';
                return;
        }

        inputNumero37.value = '';
        inputNumero37.focus();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 38
try {
    const form38 = document.querySelector('form#ex38-form');
    const resultadoDiv38 = document.querySelector('div#resultado38');

    verificarDOM([form38, resultadoDiv38], 38);

    const inputNumero38_1 = form38.elements['ex38-n1'];
    const inputNumero38_2 = form38.elements['ex38-n2'];

    form38.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputNumero38_1, inputNumero38_2], resultadoDiv38)) return;

        const numero38_1 = Number(inputNumero38_1.value);
        const numero38_2 = Number(inputNumero38_2.value);

        if (verificarNumero([numero38_1, numero38_2], resultadoDiv38)) return;

        const linhas38 = [
            `Valores inseridos: ${numero38_1} e ${numero38_2}.`
        ];

        if (numero38_1 > numero38_2) {
            linhas38.push('O primeiro valor é maior que o segundo!');
        } else if (numero38_2 > numero38_1) {
            linhas38.push('O segundo valor é maior que o primeiro!');
        } else {
            linhas38.push('Os dois valores são iguais!')
        }

        resultadoDiv38.textContent = linhas38.join('\n');

        form38.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 39
try {
    const form39 = document.querySelector('form#ex39-form');
    const resultadoDiv39 = document.querySelector('div#resultado39');

    verificarDOM([form39, resultadoDiv39], 39);

    const inputNascimento39 = form39.elements['ex39-nascimento'];

    const anoAtual = new Date().getFullYear();
    inputNascimento39.min = anoAtual - 150;
    inputNascimento39.max = anoAtual;

    form39.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputNascimento39], resultadoDiv39)) return;

        const nascimento39 = Number(inputNascimento39.value);

        if (verificarNumero([nascimento39], resultadoDiv39)) return;

        const idade39 = anoAtual - nascimento39;
        const alistamento39 = 18;

        if (idade39 < alistamento39) {
            resultadoDiv39.textContent = `Falta(m) ${alistamento39 - idade39} ano(s) para o alistamento militar!`;
        } else if (idade39 === alistamento39) {
            resultadoDiv39.textContent = `É ano do alistamento militar! Se aliste entre 01/janeiro e 30/junho!`;
        } else {
            resultadoDiv39.textContent = `Passou/passaram ${idade39 - alistamento39} ano(s) do alistamento militar!`;
        }

        form39.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 40
try {
    const form40 = document.querySelector('form#ex40-form');
    const resultadoDiv40 = document.querySelector('div#resultado40');

    verificarDOM([form40, resultadoDiv40], 40);

    const inputNota40_1 = form40.elements['ex40-n1'];
    const inputNota40_2 = form40.elements['ex40-n2'];

    form40.addEventListener('submit', function(e) {
        e.preventDefault();

        if (verificarInput([inputNota40_1, inputNota40_2], resultadoDiv40)) return;

        const nota40_1 = Number(inputNota40_1.value);
        const nota40_2 = Number(inputNota40_2.value);

        if (verificarNumero([nota40_1, nota40_2], resultadoDiv40)) return;

        const media40 = (nota40_1 + nota40_2) / 2;

        const linhas40 = [
            `Notas inseridas: ${nota40_1} e ${nota40_2}.`,
            `Média: ${media40.toFixed(1)}.`
        ];

        if (media40 < 5) {
            linhas40.push('Situação: reprovada(o)!');
        } else if (media40 < 7) {
            linhas40.push('Situação: recuperação!');
        } else {
            linhas40.push('Situação: aprovada(o)!');
        }

        resultadoDiv40.textContent = linhas40.join('\n');

        form40.reset();
    })
} catch (erro) {
    console.error(erro);
}