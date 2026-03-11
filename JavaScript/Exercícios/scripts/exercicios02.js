const real = {
    style: 'currency',
    currency: 'BRL'
}

function verificarDOM(form, div, exercicio) {
    if (!form || !div) {
        throw new Error(`Elementos do exercício ${exercicio} não encontrados no DOM.`);
    }
}

function verificarInput(inputArray, div) {
    if (inputArray.some(input => input.value.trim() === '')) { // .some() é um método de array que retorna true se pelo menos um elemento do array satisfizer a condição passada na função.
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

// Exercício 11
const form11 = document.querySelector('form#ex11-form');
const resultadoDiv11 = document.querySelector('div#resultado11');

verificarDOM(form11, resultadoDiv11, 11);

const inputLargura11 = form11.elements['ex11-largura'];
const inputAltura11 = form11.elements['ex11-altura'];

form11.addEventListener('submit', function(event) {
    event.preventDefault();

    if (verificarInput([inputLargura11, inputAltura11], resultadoDiv11)) {
        return;
    }

    const largura11 = Number(inputLargura11.value);
    const altura11 = Number(inputAltura11.value);
    
    if (verificarNumero([largura11, altura11], resultadoDiv11)) {
        return;
    }

    const area11 = largura11 * altura11;
    const tinta11 = Math.ceil(area11 / 2);

    resultadoDiv11.textContent = `A área de ${area11.toFixed(2)}m² (${largura11.toFixed(2)}m x ${altura11.toFixed(2)}m) requer ${tinta11} ${tinta11 > 1 ? 'litros' : 'litro'} de tinta!`

    form11.reset();
})

// Exercício 12
const form12 = document.querySelector('form#ex12-form');
const resultadoDiv12 = document.querySelector('div#resultado12');

verificarDOM(form12, resultadoDiv12, 12);

const inputPreco12 = form12.elements['ex12-preco'];

form12.addEventListener('submit', function(event) {
    event.preventDefault();

    if (verificarInput([inputPreco12], resultadoDiv12)) {
        return;
    }

    const preco12 = Number(inputPreco12.value.replace(',', '.'));

    if (verificarNumero([preco12], resultadoDiv12)) {
        return;
    }

    const precoFormatado12 = preco12.toLocaleString('pt-BR', real)

    const desconto12 = 0.05;

    const precoFinal12 = (preco12 * (1 - desconto12)).toLocaleString('pt-BR', real)

    const linhas12 = [
        `Valor original = ${precoFormatado12}.`,
        `Desconto = ${desconto12 * 100}%.`,
        `Preço final = ${precoFinal12}.`
    ];

    resultadoDiv12.textContent = linhas12.join('\n')

    form12.reset();
})

// Exercício 13
const form13 = document.querySelector('form#ex13-form');
const resultadoDiv13 = document.querySelector('div#resultado13');

verificarDOM(form13, resultadoDiv13, 13);

const inputSalario13 = form13.elements['ex13-salario'];

form13.addEventListener('submit', function(event) {
    event.preventDefault();

    if (verificarInput([inputSalario13], resultadoDiv13)) {
        return;
    }

    const salario13 = Number(inputSalario13.value.replace(',', '.'));

    if (verificarNumero([salario13], resultadoDiv13)) {
        return;
    }

    const salarioFormatado13 = salario13.toLocaleString('pt-BR', real)

    const aumento13 = 0.15;

    const salarioFinal13 = (salario13 * (1 + aumento13)).toLocaleString('pt-BR', real);

    const linhas13 = [
        `Salário original = ${salarioFormatado13}.`,
        `Aumento = ${aumento13 * 100}%.`,
        `Salário final = ${salarioFinal13}.`
    ];

    resultadoDiv13.textContent = linhas13.join('\n');

    form13.reset();
})

// Exercício 14
const form14 = document.querySelector('form#ex14-form');
const resultadoDiv14 = document.querySelector('div#resultado14');

verificarDOM(form14, resultadoDiv14, 14);

const inputGraus14 = form14.elements['ex14-graus'];

form14.addEventListener('submit', function(event) {
    event.preventDefault();

    if (verificarInput([inputGraus14], resultadoDiv14)) {
        return;
    }

    const grausCelsius14 = Number(inputGraus14.value.replace(',', '.'));

    if (verificarNumero([grausCelsius14], resultadoDiv14)) {
        return;
    }

    const grausFahrenheit14 = grausCelsius14 * 9 / 5 + 32;

    resultadoDiv14.textContent = `${grausCelsius14.toFixed(1)}°C = ${grausFahrenheit14.toFixed(1)}°F.`;

    form14.reset();
})

// Exercício 15
const form15 = document.querySelector('form#ex15-form');
const resultadoDiv15 = document.querySelector('div#resultado15');

verificarDOM(form15, resultadoDiv15, 15);

const inputKm15 = form15.elements['ex15-km'];
const inputDiaAluguel15 = form15.elements['ex15-dia-aluguel'];
const inputDiaDevolucao15 = form15.elements['ex15-dia-devolucao'];

form15.addEventListener('submit', function(event) {
    event.preventDefault();

    if (verificarInput([inputKm15, inputDiaAluguel15, inputDiaDevolucao15], resultadoDiv15)) {
        return;
    }

    const km15 = Number(inputKm15.value.replace(',', '.'));
    const diaAluguel15 = new Date(inputDiaAluguel15.value);
    const diaDevolucao15 = new Date(inputDiaDevolucao15.value);

    if (verificarNumero([km15], resultadoDiv15)) {
        return;
    }

    if (isNaN(diaAluguel15.getTime()) || isNaN(diaDevolucao15.getTime())) {
        resultadoDiv15.textContent = 'Insira datas válidas!';
        return;
    }

    if (diaAluguel15 > diaDevolucao15) {
        resultadoDiv15.textContent = 'A data de aluguel deve anteceder a data de devolução!';
        return;
    }

    const dias15 = Math.ceil((diaDevolucao15 - diaAluguel15) / (1000 * 60 * 60 * 24)) + 1; // A diferença entre as datas dá um resultado em milissegundos (por isso, necessário converter em dias). + 1 para contar o último dia.

    const precoDiario15 = 60;
    const precoKm15 = 0.15;

    const precoTotal15 = precoDiario15 * dias15 + precoKm15 * km15;

    resultadoDiv15.textContent = `Preço total para ${km15} quilômetros e ${dias15} dias: ${precoTotal15.toLocaleString('pt-BR', real)}.`

    form15.reset();
})

// Exercício 16
const form16 = document.querySelector('form#ex16-form');
const resultadoDiv16 = document.querySelector('div#resultado16');

verificarDOM(form16, resultadoDiv16, 16);

const inputNumero16 = form16.elements['ex16-numero'];

form16.addEventListener('submit', function(event) {
    event.preventDefault();

    if (verificarInput([inputNumero16], resultadoDiv16)) {
        return;
    }

    const numero16 = Number(inputNumero16.value.replace(',', '.'));

    if (verificarNumero([numero16], resultadoDiv16)) {
        return;
    }

    resultadoDiv16.textContent = `A parte inteira de ${numero16} é ${Math.trunc(numero16)}.`;

    form16.reset();
})

// Exercício 17
const form17 = document.querySelector('form#ex17-form');
const resultadoDiv17 = document.querySelector('div#resultado17');

verificarDOM(form17, resultadoDiv17, 17);

const inputOposto17 = form17.elements['ex17-oposto'];
const inputAdjacente17 = form17.elements['ex17-adjacente'];

form17.addEventListener('submit', function(event) {
    event.preventDefault();

    if (verificarInput([inputOposto17, inputAdjacente17], resultadoDiv17)) {
        return;
    }

    const oposto17 = Number(inputOposto17.value.replace(',', '.'));
    const adjacente17 = Number(inputAdjacente17.value.replace(',', '.'));

    if (verificarNumero([oposto17, adjacente17], resultadoDiv17)) {
        return;
    }

    const hipotenusa17 = Math.sqrt(oposto17 ** 2 + adjacente17 ** 2);

    resultadoDiv17.textContent = `A hipotenusa de um triângulo retângulo com catetos de ${oposto17} e ${adjacente17} é igual a ${hipotenusa17}.`;

    form17.reset();
})

// Exercício 18
const form18 = document.querySelector('form#ex18-form');
const resultadoDiv18 = document.querySelector('div#resultado18');

verificarDOM(form18, resultadoDiv18, 18);

const inputAngulo18 = form18.elements['ex18-angulo'];

form18.addEventListener('submit', function(event) {
    event.preventDefault();

    if (verificarInput([inputAngulo18], resultadoDiv18)) {
        return;
    }

    const angulo18 = Number(inputAngulo18.value.replace(',', '.'));

    if (verificarNumero([angulo18], resultadoDiv18)) {
        return;
    }

    const radianos18 = angulo18 * Math.PI / 180;

    const linhas18 = [
        `O ângulo de ${angulo18}° (≈ ${radianos18.toFixed(5)} radianos) possui:`,
        `Seno ≈ ${Math.sin(radianos18).toFixed(5)}`,
        `Cosseno ≈ ${Math.cos(radianos18).toFixed(5)}`,
        `Tangente ≈ ${Math.tan(radianos18).toFixed(5)}.`
    ];

    resultadoDiv18.textContent = linhas18.join('\n');

    form18.reset();
})

// Exercício 19
const form19 = document.querySelector('form#ex19-form');
const resultadoDiv19 = document.querySelector('div#resultado19');

verificarDOM(form19, resultadoDiv19, 19);

const inputs19 = [
    form19.elements['ex19-aluno1'],
    form19.elements['ex19-aluno2'],
    form19.elements['ex19-aluno3'],
    form19.elements['ex19-aluno4']
];

form19.addEventListener('submit', function(event) {
    event.preventDefault();

    if (verificarInput(inputs19, resultadoDiv19)) {
        return;
    }

    const alunoEscolhido19 = inputs19[Math.floor(Math.random() * inputs19.length)].value.trim();

    resultadoDiv19.textContent = `O aluno escolhido é: ${alunoEscolhido19}!`

    form19.reset();
})

// Exercício 20
const form20 = document.querySelector('form#ex20-form');
const resultadoDiv20 = document.querySelector('div#resultado20');

verificarDOM(form20, resultadoDiv20, 20);

const inputs20 = [
    form20.elements['ex20-aluno1'],
    form20.elements['ex20-aluno2'],
    form20.elements['ex20-aluno3'],
    form20.elements['ex20-aluno4']
];

form20.addEventListener('submit', function(event) {
    event.preventDefault();

    if (verificarInput(inputs20, resultadoDiv20)) {
        return;
    }

    const inputsTemporarios20 = [...inputs20];
    const alunosEscolhidos20 = ['A ordem dos alunos é:'];

    for (let contador20 = inputsTemporarios20.length; contador20 > 0; contador20--) {
        const sorteio20 = Math.floor(Math.random() * contador20);
        alunosEscolhidos20.push(inputsTemporarios20[sorteio20].value.trim());
        inputsTemporarios20.splice(sorteio20, 1);
    }

    resultadoDiv20.textContent = alunosEscolhidos20.join('\n');

    form20.reset();
})