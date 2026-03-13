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

        if (verificarInput([inputNome22]) === true) {
            return;
        }

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


// Exercício 24


// Exercício 25


// Exercício 26


// Exercício 27


// Exercício 28


// Exercício 29


// Exercício 30

