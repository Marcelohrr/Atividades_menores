import {
    // type Genero,
    // anoAtual,
    verificarInputVazio,
    verificarNumeroInvalido,
    // gerarNumeroAleatorio
} from './utils.js';

// Exercício 61
try {
    const form61 = document.querySelector('form#ex61-form');
    const resultadoDiv61 = document.querySelector('div#resultado61');

    if (!(form61 instanceof HTMLFormElement)) {
        throw new Error('form61 inválido!');
    }
    if (!(resultadoDiv61 instanceof HTMLDivElement)) {
        throw new Error('div61 inválida!');
    }

    const inputPrimeiroTermo61 = form61.elements.namedItem('ex61-inicio');
    const inputRazao61 = form61.elements.namedItem('ex61-razao');

    if (!(inputPrimeiroTermo61 instanceof HTMLInputElement)) {
        throw new Error('input61 1 inválido!');
    }
    if (!(inputRazao61 instanceof HTMLInputElement)) {
        throw new Error('input61 2 inválido!');
    }

    form61.addEventListener('submit', e => {
        e.preventDefault();

        if (verificarInputVazio([inputPrimeiroTermo61, inputRazao61], resultadoDiv61)) return;

        const primeiroTermo61 = Number(inputPrimeiroTermo61.value);
        const razao61 = Number(inputRazao61.value);

        if (verificarNumeroInvalido([primeiroTermo61, razao61], resultadoDiv61)) return;

        const pa61 = [primeiroTermo61];

        let contador61 = 1;
        let soma61 = primeiroTermo61;

        while (contador61 < 10) {
            const progressao61 = primeiroTermo61 + razao61 * contador61;

            pa61.push(progressao61);

            soma61 += progressao61;

            contador61++;
        }

        resultadoDiv61.textContent = `Os 10 primeiros termos da Progressão Aritmética cujo início é ${primeiroTermo61} e razão é ${razao61} são: ${pa61.join(', ')}.\nA soma de todos os termos é igual a ${soma61}.`;

        form61.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 62
try {
    const form62 = document.querySelector('form#ex62-form');
    const resultadoDiv62 = document.querySelector('div#resultado62');

    if (!(form62 instanceof HTMLFormElement)) {
        throw new Error('form62 inválido!');
    }
    if (!(resultadoDiv62 instanceof HTMLDivElement)) {
        throw new Error('div62 inválida!');
    }

    const inputPrimeiroTermo62 = form62.elements.namedItem('ex62-inicio');
    const inputRazao62 = form62.elements.namedItem('ex62-razao');

    if (!(inputPrimeiroTermo62 instanceof HTMLInputElement)) {
        throw new Error('input62 1 inválido!');
    }
    if (!(inputRazao62 instanceof HTMLInputElement)) {
        throw new Error('input62 2 inválido!');
    }

    let pa62: number[] = [];

    form62.addEventListener('submit', e => {
        e.preventDefault();

        resultadoDiv62.innerHTML = '';

        if (verificarInputVazio([inputPrimeiroTermo62, inputRazao62], resultadoDiv62)) return;

        const primeiroTermo62 = Number(inputPrimeiroTermo62.value);
        const razao62 = Number(inputRazao62.value);

        if (verificarNumeroInvalido([primeiroTermo62, razao62], resultadoDiv62)) return;

        pa62 = [primeiroTermo62];

        let contador62 = 1;
        let soma62 = primeiroTermo62;

        while (contador62 < 10) {
            const progressao62 = primeiroTermo62 + razao62 * contador62;

            pa62.push(progressao62);

            soma62 += progressao62;

            contador62++;
        }

        resultadoDiv62.textContent = `Os 10 primeiros termos da Progressão Aritmética cujo início é ${primeiroTermo62} e razão é ${razao62} são: ${pa62.join(', ')}.\nA soma de todos os termos é igual a ${soma62}.`;

        const div62 = document.createElement('div');

        const label62 = document.createElement('label');
        label62.htmlFor = 'ex62-id-mais';
        label62.textContent = 'Para mostrar mais termos da sequência, digite a quantidade desejada e pressione o botão:';

        const input62 = document.createElement('input');
        input62.type = 'number';
        input62.id = 'ex62-id-mais';
        input62.step = '1';
        input62.min = '0';

        const button62 = document.createElement('button');
        button62.type = 'button';
        button62.id = 'ex62-id-button-mais';
        button62.textContent = 'Mostrar mais';

        const resultadoDivInterna62 = document.createElement('div');

        button62.addEventListener('click', () => {
            if (verificarInputVazio([input62], div62)) return;

            const quantidadeTermos62 = Number(input62.value);

            if (verificarNumeroInvalido([quantidadeTermos62], div62)) return;

            if (quantidadeTermos62 === 0) {
                div62.remove();

                resultadoDiv62.textContent = ':)';

                return;
            }

            const novosTermos62: number[] = [];

            const limite62 = contador62 + quantidadeTermos62;

            while (contador62 < limite62) {
                const progressao62 = primeiroTermo62 + razao62 * contador62;

                novosTermos62.push(progressao62);

                soma62 += progressao62;

                contador62++;
            }

            resultadoDivInterna62.textContent = `${quantidadeTermos62 === 1 ? 'O próximo termo da Progressão Aritmética inserida é:' : `Os ${quantidadeTermos62} próximos termos da Progressão Aritmética inserida são:`} ${novosTermos62.join(', ')}.\nA soma de todos os termos até então é igual a ${soma62}.`;
            div62.appendChild(resultadoDivInterna62);

            input62.value = '';
            input62.focus();
        });

        div62.appendChild(label62);
        div62.appendChild(input62);
        div62.appendChild(button62);
        resultadoDiv62.appendChild(div62);

        form62.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 63
// Exercício 64
// Exercício 65
// Exercício 66
// Exercício 67
// Exercício 68
// Exercício 69
// Exercício 70
