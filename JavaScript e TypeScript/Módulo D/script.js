// Condições
// Exercício 1: Condição simples
var velocidade = 60.5; // TypeScript = var velocidade: number = 60.5
console.log(`A velocidade do carro é de ${velocidade}km/h.`);

if (velocidade > 60) {
    console.log('Você ultrapassou a velocidade permitida de 60km/h. Cuidado!');
}

console.log(':)');

// Exercício 2: Condição composta
var país = 'EUA';
if (país == 'Brasil' || país == 'brasil') {
    console.log('Brasileiro! :D');
} else {
    console.log('Estrangeiro! :P');
}

// Exercício 3: Condições aninhadas
var idade = 16;
if (idade < 16) {
    console.log('Voto proibido!');
} else if (idade < 18 || idade >= 70) {
    console.log('Voto facultativo!');
} else {
    console.log('Voto obrigatório!');
}

// Exercício 4: Condição múltipla
var agora = new Date();
var diaSemana = agora.getDay(); // Domingo = 0, [...], Sábado = 6
switch (diaSemana) {
    case 0:
        console.log('Hoje é domingo!');
        break;
    case 1:
        console.log('Hoje é segunda!');
        break;
    case 2:
        console.log('Hoje é terça!');
        break;
    case 3:
        console.log('Hoje é quarta!');
        break;
    case 4:
        console.log('Hoje é quinta!');
        break;
    case 5:
        console.log('Hoje é sexta!');
        break;
    case 6:
        console.log('Hoje é sábado!');
        break;
    default:
        console.log('Erro: dia inválido!');
        break;
}