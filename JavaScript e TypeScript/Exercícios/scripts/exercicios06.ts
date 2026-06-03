import {
    type Genero,
    anoAtual,
    verificarInputVazio,
    verificarNumeroInvalido,
    gerarNumeroAleatorio
} from './utils.js';

// Exercício 51
try {
    const form51 = document.querySelector('form#ex51-form'); // const form51: Element | null
    const resultadoDiv51 = document.querySelector('div#resultado51'); // const resultadoDiv51: Element | null

    if (!(form51 instanceof HTMLFormElement)) {
        throw new Error('form51 inválido!');
    }
    if (!(resultadoDiv51 instanceof HTMLDivElement)) {
        throw new Error('div51 inválida!');
    }

    const inputPrimeiroTermo51 = form51.elements.namedItem('ex51-inicio');
    const inputRazao51 = form51.elements.namedItem('ex51-razao');

    if (!(inputPrimeiroTermo51 instanceof HTMLInputElement)) {
        throw new Error('input51 1 inválido!');
    }
    if (!(inputRazao51 instanceof HTMLInputElement)) {
        throw new Error('input51 2 inválido!');
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
try {
    const form52 = document.querySelector('form#ex52-form');
    const resultadoDiv52 = document.querySelector('div#resultado52');

    if (!(form52 instanceof HTMLFormElement)) {
        throw new Error('form52 inválido!');
    }
    if (!(resultadoDiv52 instanceof HTMLDivElement)) {
        throw new Error('div52 inválida!');
    }

    const inputNumero52 = form52.elements.namedItem('ex52-numero');

    if (!(inputNumero52 instanceof HTMLInputElement)) {
        throw new Error('input52 inválido!');
    }

    form52.addEventListener('submit', e => {
        e.preventDefault();

        if (verificarInputVazio([inputNumero52], resultadoDiv52)) return;

        const numero52 = Number(inputNumero52.value);

        if (verificarNumeroInvalido([numero52], resultadoDiv52)) return;

        let primo52 = true;

        if (numero52 < 2) {
            primo52 = false; // Por definição, 0, 1 e números negativos não são primos
        } else {
            const limite52 = Math.sqrt(numero52);

            for (let i = 2; i <= limite52; i++) {
                if (numero52 % i === 0) {
                    primo52 = false;
                    break;
                }
            }
        }

        resultadoDiv52.textContent = primo52
            ? `O número ${numero52} é primo!`
            : `O número ${numero52} não é primo!`;

        form52.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 53
try {
    const form53 = document.querySelector('form#ex53-form');
    const resultadoDiv53 = document.querySelector('div#resultado53');

    if (!(form53 instanceof HTMLFormElement)) {
        throw new Error('form53 inválido!');
    }
    if (!(resultadoDiv53 instanceof HTMLDivElement)) {
        throw new Error('div53 inválida!');
    }

    const inputFrase53 = form53.elements.namedItem('ex53-frase');

    if(!(inputFrase53 instanceof HTMLInputElement)) {
        throw new Error('input53 inválido!');
    }

    form53.addEventListener('submit', e => {
        e.preventDefault();

        if (verificarInputVazio([inputFrase53], resultadoDiv53)) return;

        const frase53 = inputFrase53.value;
        const fraseFormatada53 = frase53
            .toLowerCase()
            .replace(/\s/g, '');

        const fraseInvertida53: string[] = [];

        for (let i = fraseFormatada53.length - 1; i >= 0; i--) {
            fraseInvertida53.push(fraseFormatada53[i]);
        }

        /*
        Mais eficiente do que:
        for (let i = 0; i < fraseFormatada53.length; i++) {
            fraseInvertida53.unshift(fraseFormatada53[i]); → unshift() é menos eficiente, porque desloca elementos do array a cada inserção
        }
        */

        // Alternativa: fraseFormatada53.split('').reverse().join('');

        const palindromo53 = fraseFormatada53 === fraseInvertida53.join('');

        resultadoDiv53.textContent = palindromo53
            ? `A frase ${frase53} é um palíndromo!`
            : `A frase ${frase53} não é um palíndromo!`;

        form53.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 54
try {
    const form54 = document.querySelector('form#ex54-form');
    const resultadoDiv54 = document.querySelector('div#resultado54');

    if (!(form54 instanceof HTMLFormElement)) {
        throw new Error('form54 inválido!');
    }
    if (!(resultadoDiv54 instanceof HTMLDivElement)) {
        throw new Error('div54 inválida!');
    }

    const inputAno54 = form54.elements.namedItem('ex54-ano');
    const radioAniversario54 = form54.elements.namedItem('ex54-aniversario');
    const botaoRegistrar54 = form54.elements.namedItem('ex54-botao-registrar');

    if (!(inputAno54 instanceof HTMLInputElement)) {
        throw new Error('input54 inválido!');
    }
    if (!(radioAniversario54 instanceof RadioNodeList)) {
        throw new Error('radio54 inválido!');
    }
    if (!(botaoRegistrar54 instanceof HTMLButtonElement)) {
        throw new Error('botaoRegistrar54 inválido!');
    }

    const anoMin54 = anoAtual - 150;
    inputAno54.min = String(anoMin54);
    inputAno54.max = String(anoAtual);

    type Pessoa54 = {
        ano: number;
        fezAniversario: boolean;
    };

    const pessoas54: Pessoa54[] = [];

    function registrarAno54(inputAno: HTMLInputElement, radioAniversario: RadioNodeList, div: HTMLDivElement): boolean {
        if (pessoas54.length === 7) {
            div.textContent = 'Todos os 7 anos de nascimento foram inseridos, clique para enviar!';
            return false;
        }

        if (verificarInputVazio([inputAno], div)) return false;

        const ano54 = Number(inputAno.value);

        if (verificarNumeroInvalido([ano54], div)) return false;

        if (ano54 < anoMin54 || ano54 > anoAtual) {
            div.textContent = `Insira um ano entre ${anoMin54} e ${anoAtual}!`;
            return false;
        }

        pessoas54.push({
            ano: ano54,
            fezAniversario: radioAniversario.value === 's'
        });

        div.textContent = `${pessoas54.length}º registro inserido (${pessoas54.length}/7)!`;

        inputAno.value = '';
        inputAno.focus();

        return true;
    }

    botaoRegistrar54.addEventListener('click', () => registrarAno54(inputAno54, radioAniversario54, resultadoDiv54));

    form54.addEventListener('submit', e => {
        e.preventDefault();

        if (inputAno54.value !== '' && pessoas54.length < 7) {
            const registrou54 = registrarAno54(inputAno54, radioAniversario54, resultadoDiv54);

            if (!registrou54) return;
        }

        if (pessoas54.length < 7) {
            return;
        }

        const anosMaiores54: number[] = [];
        const anosMenores54: number[] = [];

        for (const pessoa of pessoas54) {
            const idade54 = anoAtual - pessoa.ano - (pessoa.fezAniversario ? 0 : 1);

            if (idade54 >= 18) {
                anosMaiores54.push(pessoa.ano);
            } else {
                anosMenores54.push(pessoa.ano);
            }
        }

        if (anosMaiores54.length === 7) {
            resultadoDiv54.textContent = 'Todas as pessoas que nasceram nos anos inseridos já atingiram a maioridade!';
        } else if (anosMenores54.length === 7) {
            resultadoDiv54.textContent = 'Nenhuma das pessoas que nasceram nos anos inseridos atingiu a maioridade ainda!';
        } else {
            resultadoDiv54.textContent = `As pessoas que nasceram em ${anosMaiores54.join(', ')} já atingiram a maioridade\nAs pessoas que nasceram em ${anosMenores54.join(', ')} ainda não atingiram a maioridade.`;
        }

        pessoas54.length = 0;

        form54.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 55
try {
    const form55 = document.querySelector('form#ex55-form');
    const resultadoDiv55 = document.querySelector('div#resultado55');

    if (!(form55 instanceof HTMLFormElement)) {
        throw new Error('form55 inválido!');
    }
    if (!(resultadoDiv55 instanceof HTMLDivElement)) {
        throw new Error('div55 inválida!');
    }

    const inputPeso55 = form55.elements.namedItem('ex55-peso');
    const botaoRegistrar55 = form55.elements.namedItem('ex55-botao-registrar');

    if (!(inputPeso55 instanceof HTMLInputElement)) {
        throw new Error('input55 inválido!');
    }
    if (!(botaoRegistrar55 instanceof HTMLButtonElement)) {
        throw new Error('botaoRegistrar55 inválido!');
    }

    const pesos55: number[] = [];

    function registrarPeso55(inputPeso: HTMLInputElement, div: HTMLDivElement): boolean {
        if (pesos55.length === 5) {
            div.textContent = 'Todos os 5 pesos foram inseridos, clique para enviar!';
            return false;
        }

        if (verificarInputVazio([inputPeso], div)) return false;

        const peso55 = Number(inputPeso.value);

        if (verificarNumeroInvalido([peso55], div)) return false;

        pesos55.push(peso55);

        div.textContent = `${pesos55.length}º registro inserido (${pesos55.length}/5)!`;

        inputPeso.value = '';
        inputPeso.focus();

        return true;
    }

    botaoRegistrar55.addEventListener('click', () => registrarPeso55(inputPeso55, resultadoDiv55));

    form55.addEventListener('submit', e => {
        e.preventDefault();

        if (inputPeso55.value !== '' && pesos55.length < 5) {
            const registrou55 = registrarPeso55(inputPeso55, resultadoDiv55);

            if (!registrou55) return;
        }

        if (pesos55.length < 5) {
            return;
        }

        let maior55 = pesos55[0];
        let menor55 = pesos55[0];

        for (const peso of pesos55) {
            if (peso > maior55) {
                maior55 = peso;
            }

            if (peso < menor55) {
                menor55 = peso;
            }
        }

        resultadoDiv55.textContent = `O maior peso lido foi de ${maior55}kg;\nO menor peso lido foi de ${menor55}kg.`;

        pesos55.length = 0;

        form55.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 56
try {
    const form56 = document.querySelector('form#ex56-form');
    const resultadoDiv56 = document.querySelector('div#resultado56');

    if (!(form56 instanceof HTMLFormElement)) {
        throw new Error('form56 inválido!');
    }
    if (!(resultadoDiv56 instanceof HTMLDivElement)) {
        throw new Error('div56 inválida!');
    }

    const inputNome56 = form56.elements.namedItem('ex56-nome');
    const inputIdade56 = form56.elements.namedItem('ex56-idade');
    const selectGenero56 = form56.elements.namedItem('ex56-genero');
    const botaoRegistrar56 = form56.elements.namedItem('ex56-botao-registrar');

    if (!(inputNome56 instanceof HTMLInputElement)) {
        throw new Error('input56 1 inválido!');
    }
    if (!(inputIdade56 instanceof HTMLInputElement)) {
        throw new Error('input56 2 inválido!');
    }
    if (!(selectGenero56 instanceof HTMLSelectElement)) {
        throw new Error('select56 inválido!');
    }
    if (!(botaoRegistrar56 instanceof HTMLButtonElement)) {
        throw new Error('botaoRegistrar56 inválido!');
    }

    type Pessoa56 = {
        nome: string;
        idade: number;
        genero: Genero;
    };

    const pessoas56: Pessoa56[] = [];

    function registrarPessoa56(inputNome: HTMLInputElement, inputIdade: HTMLInputElement, selectGenero: HTMLSelectElement, div: HTMLDivElement): boolean {
        if (pessoas56.length === 4) {
            div.textContent = 'As informações de todas as 4 pessoas foram inseridas, clique para enviar!';
            return false;
        }

        if (verificarInputVazio([inputNome, inputIdade, selectGenero], div)) return false;

        const nome56 = inputNome.value;
        const idade56 = Number(inputIdade.value);
        const genero56 = selectGenero.value;

        if (verificarNumeroInvalido([idade56], div)) return false;

        if (genero56 !== 'f' && genero56 !== 'm' && genero56 !== 'o') {
            div.textContent = 'Gênero inválido!';
            return false;
        }

        pessoas56.push({
            nome: nome56,
            idade: idade56,
            genero: genero56
        });

        div.textContent = `${pessoas56.length}º registro inserido (${pessoas56.length}/4)!`;

        inputNome.value = '';
        inputIdade.value = '';
        selectGenero.value = '';
        inputNome.focus();

        return true;
    }

    botaoRegistrar56.addEventListener('click', () => registrarPessoa56(inputNome56, inputIdade56, selectGenero56, resultadoDiv56));

    form56.addEventListener('submit', e => {
        e.preventDefault();

        if (inputNome56.value !== '' && inputIdade56.value !== '' && selectGenero56.value !== '' && pessoas56.length < 4) {
            const registrou56 = registrarPessoa56(inputNome56, inputIdade56, selectGenero56, resultadoDiv56);

            if (!registrou56) return;
        }

        if (pessoas56.length < 4) {
            return;
        }

        let soma56 = 0;
        let idadeHomemVelho56 = 0;
        let nomeHomemVelho56: string | null = null;
        const mulheresJovens56: string[] = [];

        for (const pessoa of pessoas56) {
            soma56 += pessoa.idade;

            if (pessoa.genero === 'm') {
                if (pessoa.idade > idadeHomemVelho56) {
                    idadeHomemVelho56 = pessoa.idade;
                    nomeHomemVelho56 = pessoa.nome;
                }
            } else if (pessoa.genero === 'f') {
                if (pessoa.idade < 20) {
                    mulheresJovens56.push(pessoa.nome);
                }
            }
        }

        const respostaHomem56 =
            nomeHomemVelho56 === null
                ? 'Nenhum homem foi inserido.'
                : `O nome do homem mais velho é ${nomeHomemVelho56}, com ${idadeHomemVelho56} anos.`;

        let respostaMulheres56: string;

        switch (mulheresJovens56.length) {
            case 0:
                respostaMulheres56 = 'Nenhuma mulher do grupo tem menos de 20 anos.';
                break;
            case 1:
                respostaMulheres56 = `1 mulher do grupo tem menos de 20 anos: ${mulheresJovens56}.`;
                break;
            default:
                respostaMulheres56 = `${mulheresJovens56.length} mulheres têm menos de 20 anos: ${mulheresJovens56.join(', ')}.`;
        }

        const linhas56 = [
            `A média de idade do grupo inserido é de ${(soma56 / pessoas56.length).toFixed(2)} anos.`,
            respostaHomem56,
            respostaMulheres56
        ];

        resultadoDiv56.textContent = linhas56.join('\n');

        pessoas56.length = 0;

        form56.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 57
try {
    const form57 = document.querySelector('form#ex57-form');
    const resultadoDiv57 = document.querySelector('div#resultado57');

    if (!(form57 instanceof HTMLFormElement)) {
        throw new Error('form57 inválido!');
    }
    if (!(resultadoDiv57 instanceof HTMLDivElement)) {
        throw new Error('div57 inválida!');
    }

    const radioGenero57 = form57.elements.namedItem('ex57-genero');

    if (!(radioGenero57 instanceof RadioNodeList)) {
        throw new Error('radio57 inválido!');
    }

    form57.addEventListener('submit', e => {
        e.preventDefault();

        const genero57 = radioGenero57.value;

        if (genero57 !== 'f' && genero57 !== 'm' && genero57 !== 'o') {
            resultadoDiv57.textContent = 'Gênero inválido. Marque uma opção válida!';
            return;
        }

        let generoMarcado57: string;

        switch (genero57) {
            case 'f':
                generoMarcado57 = 'feminino';
                break;

            case 'm':
                generoMarcado57 = 'masculino';
                break;

            default:
                generoMarcado57 = 'outro/prefiro não informar';
        }

        resultadoDiv57.textContent = `Gênero marcado: ${generoMarcado57}!`;

        form57.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 58
try {
    const botao58 = document.querySelector('button#ex58-botao');
    const form58 = document.querySelector('form#ex58-form');
    const resultadoDiv58 = document.querySelector('div#resultado58');

    if (!(botao58 instanceof HTMLButtonElement)) {
        throw new Error('button58 inválido!');
    }
    if (!(form58 instanceof HTMLFormElement)) {
        throw new Error('form58 inválido!');
    }
    if (!(resultadoDiv58 instanceof HTMLDivElement)) {
        throw new Error('div58 inválida!');
    }

    const inputNumero58 = form58.elements.namedItem('ex58-numero');

    if (!(inputNumero58 instanceof HTMLInputElement)) {
        throw new Error('input58 inválido!');
    }

    let numeroSorteado58: number | undefined;
    const tentativas58: number[] = [];

    botao58.addEventListener('click', () => {
        tentativas58.length = 0;

        numeroSorteado58 = gerarNumeroAleatorio(1, 9);
        resultadoDiv58.textContent = 'O número foi sorteado. Tente descobrir qual!';
    })

    form58.addEventListener('submit', e => {
        e.preventDefault();

        if (verificarInputVazio([inputNumero58], resultadoDiv58)) return;

        const numero58 = Number(inputNumero58.value);

        if (verificarNumeroInvalido([numero58], resultadoDiv58)) return;

        if (numeroSorteado58 === undefined) {
            resultadoDiv58.textContent = 'Sorteie um número!';
            return;
        }

        tentativas58.push(numero58);

        if (numero58 === numeroSorteado58) {
            const linhas58 = [
                `Você acertou! É o número ${numero58}!`,
                tentativas58.length === 1
                    ? 'Foi necessária apenas 1 tentativa!'
                    : `Foram necessárias ${tentativas58.length} tentativas para você acertar!`,
                'Sorteie um novo número para tentar novamente!'
            ];

            resultadoDiv58.textContent = linhas58.join('\n');

            numeroSorteado58 = undefined;
            tentativas58.length = 0;
        } else {
            const linhas58 = [
                'Você errou!',
                tentativas58.length === 1
                    ? `Tentativa: ${numero58}.`
                    : `Tentativas: ${tentativas58.join(', ')}.`
            ];

            resultadoDiv58.textContent = linhas58.join('\n');
        }

        form58.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 59
try {
    const form59 = document.querySelector('form#ex59-form');
    const resultadoDiv59 = document.querySelector('div#resultado59');

    if (!(form59 instanceof HTMLFormElement)) {
        throw new Error('form59 inválido!');
    }
    if (!(resultadoDiv59 instanceof HTMLDivElement)) {
        throw new Error('div59 inválida!');
    }

    const inputNumero59_1 = form59.elements.namedItem('ex59-numero1');
    const inputNumero59_2 = form59.elements.namedItem('ex59-numero2');
    const botaoSomar59 = form59.elements.namedItem('ex59-somar');
    const botaoMultiplicar59 = form59.elements.namedItem('ex59-multiplicar');
    const botaoMaior59 = form59.elements.namedItem('ex59-maior');
    const botaoNovos59 = form59.elements.namedItem('ex59-novos');
    const botaoSair59 = form59.elements.namedItem('ex59-sair');

    if (!(inputNumero59_1 instanceof HTMLInputElement)) {
        throw new Error('input59 1 inválido!');
    }
    if (!(inputNumero59_2 instanceof HTMLInputElement)) {
        throw new Error('input59 2 inválido!');
    }
    if (!(botaoSomar59 instanceof HTMLButtonElement)) {
        throw new Error('botaoSomar59 inválido!');
    }
    if (!(botaoMultiplicar59 instanceof HTMLButtonElement)) {
        throw new Error('botaoMultiplicar59 inválido!');
    }
    if (!(botaoMaior59 instanceof HTMLButtonElement)) {
        throw new Error('botaoMaior59 inválido!');
    }
    if (!(botaoNovos59 instanceof HTMLButtonElement)) {
        throw new Error('botaoNovos59 inválido!');
    }
    if (!(botaoSair59 instanceof HTMLButtonElement)) {
        throw new Error('botaoSair59 inválido!');
    }

    function registrarNumeros59(inputNumero1: HTMLInputElement, inputNumero2: HTMLInputElement, div: HTMLDivElement): [number, number] | null {
        if (verificarInputVazio([inputNumero1, inputNumero2], div)) return null;

        const numero59_1 = Number(inputNumero1.value);
        const numero59_2 = Number(inputNumero2.value);

        if (verificarNumeroInvalido([numero59_1, numero59_2], div)) return null;

        return [numero59_1, numero59_2];
    }

    botaoSomar59.addEventListener('click', () => {
        const numeros59 = registrarNumeros59(inputNumero59_1, inputNumero59_2, resultadoDiv59);

        if (!numeros59) return;

        resultadoDiv59.textContent = `${numeros59[0]} + ${numeros59[1]} = ${numeros59[0] + numeros59[1]}`;
    })

    botaoMultiplicar59.addEventListener('click', () => {
        const numeros59 = registrarNumeros59(inputNumero59_1, inputNumero59_2, resultadoDiv59);

        if (!numeros59) return;

        resultadoDiv59.textContent = `${numeros59[0]} x ${numeros59[1]} = ${numeros59[0] * numeros59[1]}`;
    })

    botaoMaior59.addEventListener('click', () => {
        const numeros59 = registrarNumeros59(inputNumero59_1, inputNumero59_2, resultadoDiv59);

        if (!numeros59) return;

        resultadoDiv59.textContent = `O maior valor entre ${numeros59[0]} e ${numeros59[1]} é ${Math.max(...numeros59)}.`;
    })

    botaoNovos59.addEventListener('click', () => {
        inputNumero59_1.value = String(gerarNumeroAleatorio(-999, 999));
        inputNumero59_2.value = String(gerarNumeroAleatorio(-999, 999));

        resultadoDiv59.textContent = 'Novos números sorteados!';
    })

    botaoSair59.addEventListener('click', () => {
        form59.reset();

        resultadoDiv59.textContent = 'Tchau! :)';
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 60
try {
    const form60 = document.querySelector('form#ex60-form');
    const resultadoDiv60 = document.querySelector('div#resultado60');

    if (!(form60 instanceof HTMLFormElement)) {
        throw new Error('form60 inválido!');
    }
    if (!(resultadoDiv60 instanceof HTMLDivElement)) {
        throw new Error('div60 inválida!');
    }

    const inputNumero60 = form60.elements.namedItem('ex60-numero');

    if (!(inputNumero60 instanceof HTMLInputElement)) {
        throw new Error('input60 inválido!');
    }

    form60.addEventListener('submit', e => {
        e.preventDefault();

        if (verificarInputVazio([inputNumero60], resultadoDiv60)) return;

        const numero60 = Number(inputNumero60.value);

        if (verificarNumeroInvalido([numero60], resultadoDiv60)) return;

        let fatorial60 = 1;

        for (let i = numero60; i > 1; i--) {
            fatorial60 *= i;
        }

        resultadoDiv60.textContent = `O fatorial de ${numero60} é igual a ${fatorial60}!`;

        form60.reset();
    })
} catch (erro) {
    console.error(erro);
}