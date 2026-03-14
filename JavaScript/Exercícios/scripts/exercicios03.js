function verificarDOM(elementoArray, exercicio) {
    elementoArray.forEach(e => {
        if (!e) {
            throw new Error(`Elemento do exercício ${exercicio} não encontrado no DOM.`); // Lança uma exceção, que é interceptado pelo catch
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

// Exercício 21
try {
    const audio21 = document.querySelector('audio#ex21-audio');
    const botao21 = document.querySelector('button#ex21-botao');
    const barra21 = document.querySelector('input#ex21-id-barra');

    verificarDOM([audio21, botao21, barra21], 21);

    audio21.addEventListener('loadedmetadata', () => {
        barra21.max = audio21.duration; // Atualiza duração máxima do áudio em segundos quando metadata carregar
    });

    audio21.addEventListener('timeupdate', () => {
        barra21.value = audio21.currentTime; // Atualiza barra enquanto o áudio toca
    });

    botao21.addEventListener('click', () => {
        if (audio21.paused) {
            audio21.play();
            botao21.textContent = '⏸';
        } else {
            audio21.pause();
            botao21.textContent = '▶';
        }
    })

    audio21.addEventListener('ended', () => {
        botao21.textContent = '▶';
    })

    barra21.addEventListener('input', () => {
        audio21.currentTime = barra21.value; // Permite arrastar a barra para mudar o tempo de reprodução atual
    });
} catch (erro) {
    console.error(erro);
}

// Exercício 22
try {
    const form22 = document.querySelector('form#ex22-form');
    const resultadoDiv22 = document.querySelector('div#resultado22');

    verificarDOM([form22, resultadoDiv22], 22);

    const inputNome22 = form22.elements['ex22-nome'];

    form22.addEventListener('submit', function(evento) {
        evento.preventDefault();

        if (verificarInput([inputNome22], resultadoDiv22)) return;

        const nome22 = inputNome22.value.trim();
        
        const linhas22 = [
            `Nome em maiúsculo: ${nome22.toUpperCase()}.`,
            `Nome em minúsculo: ${nome22.toLowerCase()}.`,
            `Total de letras: ${nome22.length - (nome22.match(/ /g) || []).length}.`, // match() é um método de string que busca padrões usando expressões regulares (RegExp). / / é a expressão regular que procura um espaço em branco. g é a flag "global", que faz a busca em toda a string, não apenas na primeira ocorrência. Se match() não encontrar nenhum espaço, ele retornaria null e null.length daria erro. Por isso, || [] garante que, se não houver espaços, o resultado seja um array vazio, que tem length = 0.
            `Total de letras do primeiro nome: ${nome22.split(' ')[0].length}.`
        ];

        resultadoDiv22.textContent = linhas22.join('\n');
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 23
try {
    const form23 = document.querySelector('form#ex23-form');
    const resultadoDiv23 = document.querySelector('div#resultado23');

    verificarDOM([form23, resultadoDiv23], 23);

    const inputNumero23 = form23.elements['ex23-numero'];

    form23.addEventListener('submit', function(evento) {
        evento.preventDefault();

        if (verificarInput([inputNumero23], resultadoDiv23)) return;

        const numero23 = Number(inputNumero23.value);

        if (verificarNumero([numero23], resultadoDiv23)) return;

        /*
        Primeira solução:
        const digitos23 = numero23.split('');

        digitos23.unshift(0, 0, 0);

        const linhas23 = [
            `Número inserido: ${numero23}`,
            `Unidade: ${digitos23.at(-1)}`,
            `Dezena: ${digitos23.at(-2)}`,
            `Centena: ${digitos23.at(-3)}`,
            `Milhar: ${digitos23.at(-4)}`
        ];
        */

        // Solução matemática:
        const linhas23 = [
            `Número inserido: ${numero23}`,
            `Unidade: ${numero23 % 10}`,
            `Dezena: ${Math.floor(numero23 / 10) % 10}`,
            `Centena: ${Math.floor(numero23 / 100) % 10}`,
            `Milhar: ${Math.floor(numero23 / 1000) % 10}`
        ];

        resultadoDiv23.textContent = linhas23.join('\n');

        form23.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 24
try {
    const form24 = document.querySelector('form#ex24-form');
    const resultadoDiv24 = document.querySelector('div#resultado24');

    verificarDOM([form24, resultadoDiv24], 24);

    const inputNome24 = form24.elements['ex24-nome'];

    form24.addEventListener('submit', function(evento) {
        evento.preventDefault();

        if (verificarInput([inputNome24], resultadoDiv24)) return;

        const nome24 = inputNome24.value.trim();

        if (nome24.split(' ')[0].toLowerCase() === 'santo') {
            resultadoDiv24.textContent = `A cidade "${nome24}" começa com "Santo"!`;
        } else {
            resultadoDiv24.textContent = `A cidade "${nome24}" não começa com "Santo"!`;
        }

        form24.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 25
try {
    const form25 = document.querySelector('form#ex25-form');
    const resultadoDiv25 = document.querySelector('div#resultado25');

    verificarDOM([form25, resultadoDiv25], 25);

    const inputNome25 = form25.elements['ex25-nome'];

    form25.addEventListener('submit', function(evento) {
        evento.preventDefault();

        if (verificarInput([inputNome25], resultadoDiv25)) return;

        const nome25 = inputNome25.value.trim();
        const nomeArray25 = nome25.split(' ');

        let silva25 = false;

        for (const palavra25 of nomeArray25) {
            if (palavra25.toLowerCase() === 'silva') {
                silva25 = true;
                break;
            }
        }

        if (silva25 === true) {
            resultadoDiv25.textContent = `O nome "${nome25}" possui "Silva"!`;
        } else {
            resultadoDiv25.textContent = `O nome "${nome25}" não possui "Silva"!`;
        }

        form25.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 26
try {
    const form26 = document.querySelector('form#ex26-form');
    const resultadoDiv26 = document.querySelector('div#resultado26');

    verificarDOM([form26, resultadoDiv26], 26);

    const inputFrase26 = form26.elements['ex26-frase'];

    form26.addEventListener('submit', function(evento) {
        evento.preventDefault();

        if (verificarInput([inputFrase26], resultadoDiv26)) return;

        const fraseOriginal26 = inputFrase26.value.trim();
        const frase26 = fraseOriginal26.toLowerCase();

        const primeiroA26 = frase26.indexOf('a');

        if (primeiroA26 === -1) {
            resultadoDiv26.textContent = `A frase "${fraseOriginal26}" não possui a letra "a"!`;
        } else {
            let as26 = 0;
            let ultimoA26 = primeiroA26;

            for (let indice26 = 0; indice26 < frase26.length; indice26++) {
                if (frase26[indice26] === 'a') {
                    as26++;
                    ultimoA26 = indice26;
                }
            }

            const linhas26 = [
                `A letra "a" aparece ${as26} vezes na frase "${fraseOriginal26}".`,
                `Primeira posição: ${primeiroA26}.`,
                `Última posição: ${ultimoA26}.`
            ];

            resultadoDiv26.textContent = linhas26.join('\n');
        }

        form26.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 27
try {
    const form27 = document.querySelector('form#ex27-form');
    const resultadoDiv27 = document.querySelector('div#resultado27');

    verificarDOM([form27, resultadoDiv27], 27);

    const inputNome27 = form27.elements['ex27-nome'];

    form27.addEventListener('submit', function(evento) {
        evento.preventDefault();

        if (verificarInput([inputNome27], resultadoDiv27)) return;

        const nome27 = inputNome27.value.trim();
        const nomeArray27 = nome27.split(/\s+/); // Significado da expressão regular (regex): \s é um metacaractere que representa qualquer espaço em branco e + é um quantificador que significa uma ou mais ocorrências

        if (nomeArray27.length === 1) {
            resultadoDiv27.textContent = `Apenas um nome foi inserido: "${nome27}"!`;
        } else {
            resultadoDiv27.textContent = `O primeiro e o último nome de "${nome27}" são, respectivamente: "${nomeArray27[0]}" e "${nomeArray27.at(-1)}"!`;
        }

        form27.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 28
try {
    const botao28 = document.querySelector('button#ex28-botao');
    const form28 = document.querySelector('form#ex28-form');
    const resultadoDiv28 = document.querySelector('div#resultado28');

    verificarDOM([botao28, form28, resultadoDiv28], 28);

    const inputNumero28 = form28.elements['ex28-numero'];
    let resultado28 = false;
    let numeroSorteado28; // Antes da atribuição, vale undefined

    botao28.addEventListener('click', () => {
        resultado28 = false;
        numeroSorteado28 = Math.floor(Math.random() * 6);
        resultadoDiv28.textContent = 'O número foi sorteado. Tente descobrir qual!';
    })

    form28.addEventListener('submit', function(evento) {
        evento.preventDefault();

        if (verificarInput([inputNumero28], resultadoDiv28)) return;

        const numero28 = Number(inputNumero28.value);

        if (verificarNumero([numero28], resultadoDiv28)) return;

        if (numeroSorteado28 === undefined) {
            resultadoDiv28.textContent = 'Sorteie um número!';
        } else if (!resultado28) {
            const linhas28 = [
                `Número inserido: ${numero28}`,
                `Número sorteado: ${numeroSorteado28}`,
                numero28 === numeroSorteado28 ? 'Você acertou!' : 'Você errou!'
            ];

            resultadoDiv28.textContent = linhas28.join('\n');

            resultado28 = true;
        } else {
            resultadoDiv28.textContent = 'Sorteie um novo número para tentar novamente!';
        }

        form28.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 29
try {
    const form29 = document.querySelector('form#ex29-form');
    const resultadoDiv29 = document.querySelector('div#resultado29');

    verificarDOM([form29, resultadoDiv29], 29);

    const inputVelocidade29 = form29.elements['ex29-velocidade'];

    form29.addEventListener('submit', function(evento) {
        evento.preventDefault();

        if (verificarInput([inputVelocidade29], resultadoDiv29)) return;

        const velocidade29 = Number(inputVelocidade29.value);

        if (verificarNumero([velocidade29], resultadoDiv29)) return;

        const limiteVelocidade29 = 80;
        const real29 = {
            style: 'currency',
            currency: 'BRL'
        };
        const valorMulta29 = 7;

        const linhas29 = [
            `Velocidade inserida: ${velocidade29} km/h.`,
            `Limite de velocidade: ${limiteVelocidade29} km/h.`
        ];

        if (velocidade29 <= limiteVelocidade29) {
            linhas29.push(`A velocidade está dentro do limite!`);
        } else {
            linhas29.push(`A velocidade está fora do limite!`);
            linhas29.push(`A multa é de ${((velocidade29 - limiteVelocidade29) * valorMulta29).toLocaleString('pt-BR', real29)}!`);
        }

        resultadoDiv29.textContent = linhas29.join('\n');

        form29.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 30
try {
    const form30 = document.querySelector('form#ex30-form');
    const resultadoDiv30 = document.querySelector('div#resultado30');

    verificarDOM([form30, resultadoDiv30], 30);

    const inputNumero30 = form30.elements['ex30-numero'];

    form30.addEventListener('submit', function(evento) {
        evento.preventDefault();

        if (verificarInput([inputNumero30], resultadoDiv30)) return;

        const numero30 = Number(inputNumero30.value);

        if (verificarNumero([numero30], resultadoDiv30)) return;

        const linhas30 = [
            `Número inserido: ${numero30}.`,
            `O número inserido é ${numero30 % 2 === 0 ? 'par' : 'ímpar'}.`
        ];

        resultadoDiv30.textContent = linhas30.join('\n');

        form30.reset();
    })
} catch (erro) {
    console.error(erro);
}