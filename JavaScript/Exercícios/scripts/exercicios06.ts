import {
    verificarInputVazio,
    verificarNumeroInvalido
} from './utils.js';

// Exercício 51
try {
    const form51 = document.querySelector('form#ex51-form'); // const form51: Element | null
    const resultadoDiv51 = document.querySelector('div#resultado51'); // const resultadoDiv51: Element | null

    if (!(form51 instanceof HTMLFormElement)) {
        throw new Error('Form inválido!');
    }
    if (!(resultadoDiv51 instanceof HTMLDivElement)) {
        throw new Error('Div inválida!');
    }

    const inputPrimeiroTermo51 = form51.elements.namedItem('ex51-inicio');
    const inputRazao51 = form51.elements.namedItem('ex51-razao');

    if (!(inputPrimeiroTermo51 instanceof HTMLInputElement)) {
        throw new Error('Input 1 inválido!');
    }
    if (!(inputRazao51 instanceof HTMLInputElement)) {
        throw new Error('Input 2 inválido!');
    }

    form51.addEventListener('submit', function(e: SubmitEvent) {
        e.preventDefault();

        if (verificarInputVazio([inputPrimeiroTermo51, inputRazao51], resultadoDiv51)) return;

        const primeiroTermo51 = Number(inputPrimeiroTermo51.value);
        const razao51 = Number(inputRazao51.value);

        if (verificarNumeroInvalido([primeiroTermo51, razao51], resultadoDiv51)) return;

        const pa51: number[] = [];

        for (let i = 0; i < 10; i++) {
            const soma = primeiroTermo51 + razao51 * i;
            pa51.push(soma);
        }

        resultadoDiv51.textContent = `Os 10 primeiros termos da Progressão Aritmética cujo início é ${primeiroTermo51} e razão é ${razao51} são: ${pa51.join(', ')}.`;

        form51.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 52
// Exercício 53
// Exercício 54
// Exercício 55
// Exercício 56
// Exercício 57
// Exercício 58
// Exercício 59
// Exercício 60
