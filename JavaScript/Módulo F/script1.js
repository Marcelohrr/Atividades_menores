// Exercícios do Módulo F
// 1. Array
let vetor = [5, 4, 2, 3];
console.log(`O primeiro vetor é: ${vetor}.`);

vetor[0] = 1;
console.log(`O segundo vetor é: ${vetor}.`);

vetor.push(5);
console.log(`O terceiro vetor é: ${vetor}.`);

vetor.sort();
console.log(`O quarto vetor é: ${vetor}.`);

console.log(`O comprimento do vetor é de ${vetor.length}.`); // .length é um atributo de arrays, não um método

console.log(`O valor 2 está na posição ${vetor.indexOf(2)}.`);
console.log(`O valor 2 está na posição ${vetor.indexOf(100)}.`); // Se não encontrar o valor, o método retorna -1

for (let index in vetor) {
    console.log(`O valor na ${index} posição é ${vetor[index]}.`);
}
/*
Equivale a:
for (let index = 0; index < vetor.length; index++) {
    console.log(`O valor na ${index} posição é ${vetor[index]}.`);
}
*/

// 2. Função
// 2.1 Função com parâmetro
function parImpar(n) {
    if (n % 2 == 0) {
        return `O número ${n} é par!`;
    } else {
        return `O número ${n} é ímpar!`;
    }
}

console.log(parImpar(2));

// 2.2 Função com parâmetros padrão
function soma(n1=0, n2=0) { // Parâmetro padrão evita undefined se o argumento não for passado
    return `A soma de ${n1} e ${n2} é igual a ${n1 + n2}!`;
}

console.log(soma(1));

// 2.3 Função atribuída a uma variável
var x = function(n) {
    return `${n} x 2 = ${n * 2}`;
}

console.log(x(4));

// 2.4 Função recursiva
function fatorial(numero) {
    if (numero === 1) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}
/*
Equivale a:
function fatorial(numero) {
    let f = 1;
    for(let contador = numero; contador > 1; contador--) {
        f *= contador;
    }
}
*/
console.log(fatorial(5))