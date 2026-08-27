// Repetições
// Exercício 1: repetição com teste no início
var contador = 1;
while (contador <= 5) {
    console.log(`Passo ${contador}`);
    contador++;
}
console.log('Fim!');

// Exercício 2: repetição com teste no final
var contador = 5;
do {
    console.log(`Passo ${contador}`);
    contador--;
} while (contador >= 1);
console.log('Fim!');

// Exercício 3: repetição com variável de controle
for (var contador = 0; contador <= 100; contador += 10) {
    console.log(`Passo ${contador}`);
}
console.log('Fim!');
