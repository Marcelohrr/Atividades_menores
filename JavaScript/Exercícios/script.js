// Exercício 1
const form1 = document.querySelector('form#ex1-form');
const inputTexto1 = document.querySelector('input#ex1-id-texto');
const resultadoDiv1 = document.querySelector('div#resultado1')

form1.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede recarregamento da página
    
    const texto1 = inputTexto1.value;

    if (!texto1) {
        resultadoDiv1.textContent = `Você não escreveu nada!`;
    } else {
        resultadoDiv1.textContent = `Você escreveu: “${texto1}”!`;
    }

    inputTexto1.value = '';
})

// Exercício 2
const form2 = document.querySelector('form#ex2-form');
const inputNome2 = form2.elements['ex2-nome'];
const resultadoDiv2 = document.querySelector('div#resultado2');

form2.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome2 = inputNome2.value.trim();

    if (!nome2) {
        resultadoDiv2.textContent = 'Digite um nome!';
    } else {
        const nomeFormatado2 = nome2[0].toUpperCase() + nome2.slice(1);
        resultadoDiv2.textContent = `Boas-vindas, ${nomeFormatado2}!`;
    }
    
    inputNome2.value = '';
})

// Exercício 3
const form3 = document.querySelector('form#ex3-form');
const inputNumero3_1 = form3.elements['ex3-numero1'];
const inputNumero3_2 = form3.elements['ex3-numero2'];
const resultadoDiv3 = document.querySelector('div#resultado3');

form3.addEventListener('submit', function(event) {
    event.preventDefault();

    const numero3_1 = Number(inputNumero3_1.value);
    const numero3_2 = Number(inputNumero3_2.value);

    if (isNaN(numero3_1) || isNaN(numero3_2)) {
        resultadoDiv3.textContent = 'Insira dois números válidos!';
    } else {
        const soma3 = numero3_1 + numero3_2;
        resultadoDiv3.textContent = `A soma de ${numero3_1} e ${numero3_2} é igual a ${soma3}!`;
    }

    inputNumero3_1.value = '';
    inputNumero3_2.value = '';
})

//Exercício 4
const form4 = document.querySelector('form#ex4-form');
const inputTexto4 = document.querySelector('input#ex4-id-texto');
const resultadoDiv4 = document.querySelector('div#resultado4')

form4.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const texto4 = inputTexto4.value;

    if (!texto4) {
        resultadoDiv4.textContent = `Você não escreveu nada!`;
    } else {
        const espacos4 = texto4.trim() === '';
        const numero4 = !isNaN(texto4) && texto4.trim() !== '';
        const alfabetico4 = /^[a-zA-Z]+$/;
        const alfanumerico4 = /^[a-zA-Z0-9]+$/;
        const maiusculo4 = texto4 === texto4.toUpperCase();
        const minusculo4 = texto4 === texto4.toLowerCase();
        const capitalizado4 = texto4[0] === texto4[0].toUpperCase() && texto4.slice(1) === texto4.slice(1).toLowerCase();

        resultadoDiv4.textContent = `O tipo primitivo desse input é ${typeof texto4}. Só tem espaços? ${espacos4}. É um número? ${numero4}. É alfabético? ${alfabetico4.test(texto4)}. É alfanumérico? ${alfanumerico4.test(texto4)}. Está em maiúsculas? ${maiusculo4}. Está em minúsculas? ${minusculo4}. Está capitalizado? ${capitalizado4}.`
    }

    inputTexto4.value = '';
})