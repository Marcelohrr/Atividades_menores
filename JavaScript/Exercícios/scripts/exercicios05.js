const real = {
    style: 'currency',
    currency: 'BRL'
}

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

    const categorias43 = {
        18.5: 'Abaixo do peso',
        25: 'Peso normal',
        30: 'Sobrepeso',
        35: 'Obesidade grau I',
        40: 'Obesidade grau II',
        Infinity: 'Obesidade grau III (mórbida)'
    };

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

        for (const [chave, status] of Object.entries(categorias43)) {
            if (imc43 <= Number(chave)) {
                linhas43.push(`Status: ${status}.`);
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


// Exercício 45


// Exercício 46


// Exercício 47


// Exercício 48


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
