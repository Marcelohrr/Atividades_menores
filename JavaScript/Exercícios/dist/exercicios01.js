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

// Exercício 4
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

        const linhas4 = [
            `O tipo primitivo do input é ${typeof texto4}.`,
            `Só tem espaços? ${espacos4}.`,
            `É um número? ${numero4}.`,
            `É alfabético? ${alfabetico4.test(texto4)}.`,
            `É alfanumérico? ${alfanumerico4.test(texto4)}.`,
            `Está em maiúsculas? ${maiusculo4}.`,
            `Está em minúsculas? ${minusculo4}.`,
            `Está capitalizado? ${capitalizado4}.`
        ];

        resultadoDiv4.textContent = linhas4.join('\n');
    }

    inputTexto4.value = '';
})

// Exercício 5
const form5 = document.querySelector('form#ex5-form');
const inputNumero5 = form5.elements['ex5-numero'];
const resultadoDiv5 = document.querySelector('div#resultado5');

form5.addEventListener('submit', function(event) {
    event.preventDefault();

    const numero5 = Number(inputNumero5.value);

    if (isNaN(numero5)) {
        resultadoDiv5.textContent = 'Insira um número válido!';
    } else {
        const linhas5 = [
            `O número inteiro inserido é: ${numero5}.`,
            `O seu sucessor é: ${numero5 + 1}.`,
            `O seu antecessor é: ${numero5 - 1}.`
        ];

        resultadoDiv5.textContent = linhas5.join('\n');
    }

    inputNumero5.value = '';
})

// Exercício 6
const form6 = document.querySelector('form#ex6-form');
const resultadoDiv6 = document.querySelector('div#resultado6');

if (!form6 || !resultadoDiv6) {
    throw new Error('Elementos do exercício 6 não encontrados no DOM.');
}

const inputNumero6 = form6.elements['ex6-numero'];

form6.addEventListener('submit', function(event) {
    event.preventDefault();

    if (inputNumero6.value === '') { // Verifica input vazio
        resultadoDiv6.textContent = 'Insira um valor!';
        return;
    }

    const numero6 = Number(inputNumero6.value);

    if (Number.isNaN(numero6)) { // Verifica se o valor convertido resultou em NaN — didaticamente, equivale a: typeof numero6 === 'number' && numero6 !== numero6 (porque NaN !== NaN)
        resultadoDiv6.textContent = 'Insira um número válido!';
        return;
    }

    const linhas6 = [
        `O número inserido é: ${numero6}.`,
        `O seu dobro é: ${numero6 * 2}.`,
        `O seu triplo é: ${numero6 * 3}.`,
        `A sua raiz quadrada é: ${numero6 >= 0 ? Math.sqrt(numero6) : 'não existe no conjunto dos reais'}.`
    ]

    resultadoDiv6.textContent = linhas6.join('\n');

    inputNumero6.value = '';
})

// Exercício 7
const form7 = document.querySelector('form#ex7-form');
const resultadoDiv7 = document.querySelector('div#resultado7');

if (!form7 || !resultadoDiv7) {
    throw new Error('Elementos do exercício 7 não encontrados no DOM.');
}

const inputNota7_1 = form7.elements['ex7-nota1'];
const inputNota7_2 = form7.elements['ex7-nota2'];

form7.addEventListener('submit', function(event) {
    event.preventDefault();

    if (inputNota7_1.value === '' || inputNota7_2.value === '') {
        resultadoDiv7.textContent = 'Insira as notas!';
        return;
    }

    const nota7_1 = Number(inputNota7_1.value);
    const nota7_2 = Number(inputNota7_2.value);

    if (Number.isNaN(nota7_1) || Number.isNaN(nota7_2)) {
        resultadoDiv7.textContent = 'Insira valores válidos!';
        return;
    }

    const linhas7 = [
        `1ª nota = ${nota7_1}`,
        `2ª nota = ${nota7_2}`,
        `Média = ${((nota7_1 + nota7_2) / 2).toFixed(2)}`
    ];

    resultadoDiv7.textContent = linhas7.join('\n');

    inputNota7_1.value = '';
    inputNota7_2.value = '';
})

// Exercício 8
const form8 = document.querySelector('form#ex8-form');
const resultadoDiv8 = document.querySelector('div#resultado8');

if (!form8 || !resultadoDiv8) {
    throw new Error('Elementos do exercício 8 não encontrados no DOM.');
}

const inputValor8 = form8.elements['ex8-valor'];

form8.addEventListener('submit', function(event) {
    event.preventDefault();

    if (inputValor8.value === '') {
        resultadoDiv8.textContent = 'Insira um valor!';
        return;
    }

    const valor8 = Number(inputValor8.value);

    if (Number.isNaN(valor8)) {
        resultadoDiv8.textContent = 'Insira um valor válido!';
        return;
    }

    const linhas8 = [
        `Valor inserido (${valor8.toLocaleString('pt-BR')} metros) corresponde a:`,
        `${(valor8 / 1000).toLocaleString('pt-BR')} quilômetros.`,
        `${(valor8 / 100).toLocaleString('pt-BR')} hectômetros.`,
        `${(valor8 / 10).toLocaleString('pt-BR')} decâmetros.`,
        `${(valor8 * 10).toLocaleString('pt-BR')} decímetros.`,
        `${(valor8 * 100).toLocaleString('pt-BR')} centímetros.`,
        `${(valor8 * 1000).toLocaleString('pt-BR')} milímetros.`
    ];

    resultadoDiv8.textContent = linhas8.join('\n');

    inputValor8.value = '';
})

// Exercício 9
const form9 = document.querySelector('form#ex9-form');
const resultadoDiv9 = document.querySelector('div#resultado9');

if (!form9 || !resultadoDiv9) {
    throw new Error('Elementos do exercício 9 não encontrados no DOM.');
}

const select9 = form9.elements['ex9-tabuada'];

const total9 = 10; // Define o total de opções no select

for (let contador9 = 1; contador9 <= total9; contador9++) { // Cria os options no select
    const opcao9 = document.createElement('option');
    opcao9.value = contador9;
    opcao9.textContent = contador9;
    select9.appendChild(opcao9);
}

form9.addEventListener('submit', function(event) {
    event.preventDefault();

    if (select9.value === '') {
        resultadoDiv9.textContent = 'Escolha um valor!';
        return;
    }

    const tabela9 = document.createElement('table');
    const titulo9 = document.createElement('caption');
    const cabecalho9 = document.createElement('thead');
    const linhaCabecalho9 = document.createElement('tr');
    const celulaCabecalhoO9 = document.createElement('th');
    const celulaCabecalhoR9 = document.createElement('th');
    const corpo9 = document.createElement('tbody');

    const numero9 = Number(select9.value);

    titulo9.textContent = `Tabuada de ${numero9}`;
    tabela9.appendChild(titulo9);

    celulaCabecalhoO9.textContent = 'Operação';
    linhaCabecalho9.appendChild(celulaCabecalhoO9);

    celulaCabecalhoR9.textContent = 'Resultado';
    linhaCabecalho9.appendChild(celulaCabecalhoR9);

    cabecalho9.appendChild(linhaCabecalho9);
    tabela9.appendChild(cabecalho9);

    for (let i9 = 1; i9 <= 10; i9++) {
        const linhaCorpo9 = document.createElement('tr');

        const celulaCorpoO9 = document.createElement('td');
        celulaCorpoO9.textContent = `${select9.value} x ${i9}`;
        linhaCorpo9.appendChild(celulaCorpoO9);

        const conta9 = numero9 * i9;
        const celulaCorpoR9 = document.createElement('td');
        celulaCorpoR9.textContent = conta9;
        linhaCorpo9.appendChild(celulaCorpoR9);

        corpo9.appendChild(linhaCorpo9);
    }

    tabela9.appendChild(corpo9);

    resultadoDiv9.innerHTML = '';
    resultadoDiv9.appendChild(tabela9);
})

// Exercício 10
const form10 = document.querySelector('form#ex10-form');
const resultadoDiv10 = document.querySelector('div#resultado10');

if (!form10 || !resultadoDiv10) {
    throw new Error('Elementos do exercício 10 não encontrados no DOM.');
}

const inputValor10 = form10.elements['ex10-valor'];

form10.addEventListener('submit', function(event) {
    event.preventDefault();

    if (inputValor10.value === '') {
        resultadoDiv10.textContent = 'Insira um valor!';
        return;
    }

    const valor10 = Number(inputValor10.value.replace(',', '.'));

    if (Number.isNaN(valor10)) {
        resultadoDiv10.textContent = 'Insira um valor válido!';
        return;
    }

    const real10 = valor10.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const dolar10 = (valor10 / 5.26).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    resultadoDiv10.textContent = `${real10} = ${dolar10}.`;

    inputValor10.value = '';
})