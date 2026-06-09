import {
    type Genero,
    real,
    verificarInputVazio,
    verificarNumeroInvalido,
    gerarNumeroAleatorio
} from './utils.js';

// Exercício 61
try {
    const form61 = document.querySelector('form#ex61-form');
    const resultadoDiv61 = document.querySelector('div#resultado61');

    if (!(form61 instanceof HTMLFormElement)) {
        throw new Error('form61 inválido!');
    }
    if (!(resultadoDiv61 instanceof HTMLDivElement)) {
        throw new Error('div61 inválida!');
    }

    const inputPrimeiroTermo61 = form61.elements.namedItem('ex61-inicio');
    const inputRazao61 = form61.elements.namedItem('ex61-razao');

    if (!(inputPrimeiroTermo61 instanceof HTMLInputElement)) {
        throw new Error('input61 1 inválido!');
    }
    if (!(inputRazao61 instanceof HTMLInputElement)) {
        throw new Error('input61 2 inválido!');
    }

    form61.addEventListener('submit', e => {
        e.preventDefault();

        if (verificarInputVazio([inputPrimeiroTermo61, inputRazao61], resultadoDiv61)) return;

        const primeiroTermo61 = Number(inputPrimeiroTermo61.value);
        const razao61 = Number(inputRazao61.value);

        if (verificarNumeroInvalido([primeiroTermo61, razao61], resultadoDiv61)) return;

        const pa61 = [primeiroTermo61];

        let contador61 = 1;
        let soma61 = primeiroTermo61;

        while (contador61 < 10) {
            const progressao61 = primeiroTermo61 + razao61 * contador61;

            pa61.push(progressao61);

            soma61 += progressao61;

            contador61++;
        }

        resultadoDiv61.textContent = `Os 10 primeiros termos da Progressão Aritmética cujo início é ${primeiroTermo61} e razão é ${razao61} são: ${pa61.join(', ')}.\nA soma de todos os termos é igual a ${soma61}.`;

        form61.reset();
    });
} catch (erro) {
    console.error(erro);
}

// Exercício 62
try {
    const form62 = document.querySelector('form#ex62-form');
    const resultadoDiv62 = document.querySelector('div#resultado62');

    if (!(form62 instanceof HTMLFormElement)) {
        throw new Error('form62 inválido!');
    }
    if (!(resultadoDiv62 instanceof HTMLDivElement)) {
        throw new Error('div62 inválida!');
    }

    const inputPrimeiroTermo62 = form62.elements.namedItem('ex62-inicio');
    const inputRazao62 = form62.elements.namedItem('ex62-razao');

    if (!(inputPrimeiroTermo62 instanceof HTMLInputElement)) {
        throw new Error('input62 1 inválido!');
    }
    if (!(inputRazao62 instanceof HTMLInputElement)) {
        throw new Error('input62 2 inválido!');
    }

    let pa62: number[] = [];

    form62.addEventListener('submit', e => {
        e.preventDefault();

        resultadoDiv62.innerHTML = '';

        if (verificarInputVazio([inputPrimeiroTermo62, inputRazao62], resultadoDiv62)) return;

        const primeiroTermo62 = Number(inputPrimeiroTermo62.value);
        const razao62 = Number(inputRazao62.value);

        if (verificarNumeroInvalido([primeiroTermo62, razao62], resultadoDiv62)) return;

        pa62 = [primeiroTermo62];

        let contador62 = 1;
        let soma62 = primeiroTermo62;

        while (contador62 < 10) {
            const progressao62 = primeiroTermo62 + razao62 * contador62;

            pa62.push(progressao62);

            soma62 += progressao62;

            contador62++;
        }

        resultadoDiv62.textContent = `Os 10 primeiros termos da Progressão Aritmética cujo início é ${primeiroTermo62} e razão é ${razao62} são: ${pa62.join(', ')}.\nA soma de todos os termos é igual a ${soma62}.`;

        const div62 = document.createElement('div');

        const label62 = document.createElement('label');
        label62.htmlFor = 'ex62-id-mais';
        label62.textContent = 'Para mostrar mais termos da sequência, digite a quantidade desejada e pressione o botão:';

        const input62 = document.createElement('input');
        input62.type = 'number';
        input62.id = 'ex62-id-mais';
        input62.step = '1';
        input62.min = '0';

        const button62 = document.createElement('button');
        button62.type = 'button';
        button62.id = 'ex62-id-button-mais';
        button62.textContent = 'Mostrar mais';

        const resultadoDivInterna62 = document.createElement('div');

        button62.addEventListener('click', () => {
            if (verificarInputVazio([input62], div62)) return;

            const quantidadeTermos62 = Number(input62.value);

            if (verificarNumeroInvalido([quantidadeTermos62], div62)) return;

            if (quantidadeTermos62 === 0) {
                div62.remove();

                resultadoDiv62.textContent = ':)';

                return;
            }

            const novosTermos62: number[] = [];

            const limite62 = contador62 + quantidadeTermos62;

            while (contador62 < limite62) {
                const progressao62 = primeiroTermo62 + razao62 * contador62;

                novosTermos62.push(progressao62);

                soma62 += progressao62;

                contador62++;
            }

            resultadoDivInterna62.textContent = `${quantidadeTermos62 === 1 ? 'O próximo termo da Progressão Aritmética inserida é:' : `Os ${quantidadeTermos62} próximos termos da Progressão Aritmética inserida são:`} ${novosTermos62.join(', ')}.\nA soma de todos os termos até então é igual a ${soma62}.`;
            div62.appendChild(resultadoDivInterna62);

            input62.value = '';
            input62.focus();
        });

        div62.appendChild(label62);
        div62.appendChild(input62);
        div62.appendChild(button62);
        resultadoDiv62.appendChild(div62);

        form62.reset();
    });
} catch (erro) {
    console.error(erro);
}

// Exercício 63
try {
    const form63 = document.querySelector('form#ex63-form');
    const resultadoDiv63 = document.querySelector('div#resultado63');

    if (!(form63 instanceof HTMLFormElement)) {
        throw new Error('form63 inválido!');
    }
    if (!(resultadoDiv63 instanceof HTMLDivElement)) {
        throw new Error('div63 inválida!');
    }

    const inputElementos63 = form63.elements.namedItem('ex63-elementos');

    if (!(inputElementos63 instanceof HTMLInputElement)) {
        throw new Error('input63 inválido!');
    }

    form63.addEventListener('submit', e => {
        e.preventDefault();

        if (verificarInputVazio([inputElementos63], resultadoDiv63)) return;

        const elementos63 = Number(inputElementos63.value);

        if (verificarNumeroInvalido([elementos63], resultadoDiv63)) return;

        switch (elementos63) {
            case 1:
                resultadoDiv63.textContent = '0.';
                return;

            case 2:
                resultadoDiv63.textContent = '0, 1.';
                return;
        }

        let x63 = 0;
        let y63 = 1;
        let soma63 = 0;
        const arrayFibonacci63 = [0, 1];

        for (let i = 2; i < elementos63; i++) {
            soma63 = x63 + y63;
            arrayFibonacci63.push(soma63);
            x63 = y63;
            y63 = soma63;
        }

        resultadoDiv63.textContent = `${arrayFibonacci63.join(', ')}.`;

        form63.reset();
    });
} catch (erro) {
    console.error(erro);
}

// Exercício 64
try {
    const form64 = document.querySelector('form#ex64-form');
    const resultadoDiv64 = document.querySelector('div#resultado64');

    if (!(form64 instanceof HTMLFormElement)) {
        throw new Error('form64 inválido!');
    }
    if (!(resultadoDiv64 instanceof HTMLDivElement)) {
        throw new Error('div64 inválida!');
    }

    const inputNumero64 = form64.elements.namedItem('ex64-numero');
    const botaoRegistrar64 = form64.elements.namedItem('ex64-botao-registrar');

    if (!(inputNumero64 instanceof HTMLInputElement)) {
        throw new Error('input64 inválido!');
    }
    if (!(botaoRegistrar64 instanceof HTMLButtonElement)) {
        throw new Error('botaoRegistrar64 inválido!');
    }

    const numeros64: number[] = [];

    function registrarNumero64(input: HTMLInputElement, div: HTMLDivElement): boolean {
        if (verificarInputVazio([input], div)) return false;

        const numero64 = Number(input.value);

        if (verificarNumeroInvalido([numero64], div)) return false;

        numeros64.push(numero64);

        input.value = '';
        input.focus();
        return true;
    }

    botaoRegistrar64.addEventListener('click', () => registrarNumero64(inputNumero64, resultadoDiv64));

    form64.addEventListener('submit', e => {
        e.preventDefault();

        if (inputNumero64.value !== '') {
            const registrou64 = registrarNumero64(inputNumero64, resultadoDiv64);

            if (!registrou64) return;
        }

        if (numeros64.length === 0) {
            resultadoDiv64.textContent = 'Insira pelo menos um número antes de parar!';
            return;
        }

        const soma64 = numeros64.reduce((acumulador, numero) => acumulador + numero, 0);

        resultadoDiv64.textContent = `Números digitados: ${numeros64.length}.\nSoma total: ${soma64}.`;

        numeros64.length = 0;

        form64.reset();
    });
} catch (erro) {
    console.error(erro);
}

// Exercício 65
try {
    const form65 = document.querySelector('form#ex65-form');
    const resultadoDiv65 = document.querySelector('div#resultado65');

    if (!(form65 instanceof HTMLFormElement)) {
        throw new Error('form65 inválido!');
    }
    if (!(resultadoDiv65 instanceof HTMLDivElement)) {
        throw new Error('div65 inválida!');
    }

    const inputNumero65 = form65.elements.namedItem('ex65-numero');
    const botaoRegistrar65 = form65.elements.namedItem('ex65-botao-registrar');

    if (!(inputNumero65 instanceof HTMLInputElement)) {
        throw new Error('input65 inválido!');
    }
    if (!(botaoRegistrar65 instanceof HTMLButtonElement)) {
        throw new Error('botaoRegistrar65 inválido!');
    }

    const numeros65: number[] = [];

    function registrarNumero65(input: HTMLInputElement, div: HTMLDivElement): boolean {
        if (verificarInputVazio([input], div)) return false;

        const numero65 = Number(input.value);

        if (verificarNumeroInvalido([numero65], div)) return false;

        numeros65.push(numero65);

        input.value = '';
        input.focus();
        return true;
    }

    botaoRegistrar65.addEventListener('click', () => {
        const registrou65 = registrarNumero65(inputNumero65, resultadoDiv65);

        if (!registrou65) return;

        resultadoDiv65.textContent =
            'Número registrado!\n' +
            `Registro atual: ${numeros65.join(', ')}.\n` +
            'Se deseja fechar a conta e ver o resultado, clique no botão "Parar"!';
    });

    form65.addEventListener('submit', e => {
        e.preventDefault();

        if (inputNumero65.value !== '') {
            const registrou65 = registrarNumero65(inputNumero65, resultadoDiv65);

            if (!registrou65) return;
        }

        if (numeros65.length === 0) {
            resultadoDiv65.textContent = 'Insira pelo menos um número antes de parar!';
            return;
        }

        const media65 = (numeros65.reduce((acumulador, numero) => acumulador + numero, 0)) / numeros65.length;

        resultadoDiv65.textContent = `Média dos números digitados: ${media65}.\nMaior valor: ${Math.max(...numeros65)}.\nMenor valor: ${Math.min(...numeros65)}.`;

        numeros65.length = 0;

        form65.reset();
    });
} catch (erro) {
    console.error(erro);
}

// Exercício 66
// Igual ao desafio 64!

// Exercício 67
try {
    const form67 = document.querySelector('form#ex67-form');
    const resultadoDiv67 = document.querySelector('div#resultado67');

    if (!(form67 instanceof HTMLFormElement)) {
        throw new Error('form67 inválido!');
    }
    if (!(resultadoDiv67 instanceof HTMLDivElement)) {
        throw new Error('div67 inválida!');
    }

    const inputNumero67 = form67.elements.namedItem('ex67-numero');

    if (!(inputNumero67 instanceof HTMLInputElement)) {
        throw new Error('input67 inválido!');
    }

    const tabela67 = document.createElement('table');

    const caption67 = document.createElement('caption');
    tabela67.appendChild(caption67);

    const thead67 = document.createElement('thead');
    const tr67_head = document.createElement('tr');
    const th67_operacao = document.createElement('th');
    th67_operacao.textContent = 'Operação';
    const th67_resultado = document.createElement('th');
    th67_resultado.textContent = 'Resultado';
    tr67_head.appendChild(th67_operacao);
    tr67_head.appendChild(th67_resultado);
    thead67.appendChild(tr67_head);
    tabela67.appendChild(thead67);

    const tbody67 = document.createElement('tbody');
    tabela67.appendChild(tbody67);

    form67.addEventListener('submit', e => {
        e.preventDefault();

        if (verificarInputVazio([inputNumero67], resultadoDiv67)) return;

        const numero67 = Number(inputNumero67.value);

        if (verificarNumeroInvalido([numero67], resultadoDiv67)) return;

        resultadoDiv67.innerHTML = '';

        caption67.textContent = `Tabuada de ${numero67}`;

        tbody67.replaceChildren();

        for (let i = 1; i <= 10; i++) {
            const tr67_corpo = document.createElement('tr');

            const td67_operacao = document.createElement('td');
            td67_operacao.textContent = `${numero67} x ${i}`;
            tr67_corpo.appendChild(td67_operacao);

            const td67_resultado = document.createElement('td');
            td67_resultado.textContent = `${numero67 * i}`;
            tr67_corpo.appendChild(td67_resultado);

            tbody67.appendChild(tr67_corpo);
        }

        if (!resultadoDiv67.contains(tabela67)) {
            resultadoDiv67.appendChild(tabela67);
        }

        form67.reset();
    });
} catch (erro) {
    console.error(erro);
}

// Exercício 68
try {
    const botaoNumero68 = document.querySelector('button#ex68-botao-sortear');
    const botaoPar68 = document.querySelector('button#ex68-botao-par');
    const botaoImpar68 = document.querySelector('button#ex68-botao-impar');
    const resultadoDiv68 = document.querySelector('div#resultado68');

    if (!(botaoNumero68 instanceof HTMLButtonElement)) {
        throw new Error('botaoNumero68 inválido!');
    }
    if (!(botaoPar68 instanceof HTMLButtonElement)) {
        throw new Error('botaoPar68 inválido!');
    }
    if (!(botaoImpar68 instanceof HTMLButtonElement)) {
        throw new Error('botaoImpar68 inválido!');
    }
    if (!(resultadoDiv68 instanceof HTMLDivElement)) {
        throw new Error('div68 inválida!');
    }

    let numero68: undefined | number;
    let acertosConsecutivos68 = 0;

    botaoNumero68.addEventListener('click', () => {
        numero68 = gerarNumeroAleatorio(-999, 999);
    });

    function verificarParOuImpar68(div: HTMLDivElement): 'par' | 'ímpar' | undefined {
        if (numero68 === undefined) {
            div.textContent = 'Clique para sortear um número antes!';
            return;
        }

        return numero68 % 2 === 0 ? 'par' : 'ímpar';
    }

    function jogar68(escolha: 'par' | 'ímpar', div: HTMLDivElement): void {
        const resultado = verificarParOuImpar68(div);

        if (resultado === undefined) return;

        if (resultado === escolha) {
            acertosConsecutivos68++;
            div.textContent =
                `Número sorteado: ${numero68}.\nVocê acertou! Acertos consecutivos: ${acertosConsecutivos68}.`;
        } else {
            div.textContent =
                `Número sorteado: ${numero68}.\nVocê perdeu após ${acertosConsecutivos68} vitórias consecutivas.`;
            acertosConsecutivos68 = 0;
        }

        numero68 = undefined;
    }

    botaoPar68.addEventListener('click', () => jogar68('par', resultadoDiv68));
    botaoImpar68.addEventListener('click', () => jogar68('ímpar', resultadoDiv68));
} catch (erro) {
    console.error(erro);
}

// Exercício 69
try {
    const form69 = document.querySelector('form#ex69-form');
    const resultadoDiv69 = document.querySelector('div#resultado69');

    if (!(form69 instanceof HTMLFormElement)) {
        throw new Error('form69 inválido!');
    }
    if (!(resultadoDiv69 instanceof HTMLDivElement)) {
        throw new Error('div69 inválida!');
    }

    const inputIdade69 = form69.elements.namedItem('ex69-idade');
    const radioGenero69 = form69.elements.namedItem('ex69-genero');
    const botaoRegistrar69 = form69.elements.namedItem('ex69-botao-registrar');

    if (!(inputIdade69 instanceof HTMLInputElement)) {
        throw new Error('input69 inválido!');
    }
    if (!(radioGenero69 instanceof RadioNodeList)) {
        throw new Error('radio69 inválido!');
    }
    if (!(botaoRegistrar69 instanceof HTMLButtonElement)) {
        throw new Error('botaoRegistrar69 inválido!');
    }

    type Pessoa69 = {
        idade: number;
        genero: Genero;
    };

    const pessoas69: Pessoa69[] = [];

    function registrarPessoa69(form: HTMLFormElement, inputIdade: HTMLInputElement, radioGenero: RadioNodeList, div: HTMLDivElement): boolean {
        if (verificarInputVazio([inputIdade], div)) return false;

        const idade69 = Number(inputIdade.value);

        if (verificarNumeroInvalido([idade69], div)) return false;

        const genero69 = radioGenero.value;

        if (genero69 !== 'f' && genero69 !== 'm' && genero69 !== 'o') {
            div.textContent = 'Gênero inválido. Marque uma opção válida!';
            return false;
        }

        pessoas69.push({
            idade: idade69,
            genero: genero69
        });

        div.textContent = `${pessoas69.length}º registro inserido! Para continuar, apenas insira novos valores!`;

        form.reset();
        inputIdade.focus();

        return true;
    }

    botaoRegistrar69.addEventListener('click', () => registrarPessoa69(form69, inputIdade69, radioGenero69, resultadoDiv69));

    form69.addEventListener('submit', e => {
        e.preventDefault();

        if (inputIdade69.value !== '' && radioGenero69.value !== '') {
            const registrou69 = registrarPessoa69(form69, inputIdade69, radioGenero69, resultadoDiv69);

            if (!registrou69) return;
        }

        if (pessoas69.length === 0) {
            resultadoDiv69.textContent = 'Nenhuma pessoa foi cadastrada.';
            return;
        }

        let maiores69 = 0;
        let homens69 = 0;
        let mulheresJovens69 = 0;

        for (const pessoa of pessoas69) {
            if (pessoa.idade >= 18) maiores69++;
            if (pessoa.genero === 'm') homens69++;
            if (pessoa.genero === 'f' && pessoa.idade < 20) mulheresJovens69++;
        }

        let resposta69_1: string;
        let resposta69_2: string;
        let resposta69_3: string;

        switch (maiores69) {
            case 0:
                resposta69_1 = `Das ${pessoas69.length} pessoas inseridas, nenhuma possui mais de 18 anos de idade.`;
                break;

            case 1:
                resposta69_1 = `Das ${pessoas69.length} pessoas inseridas, apenas uma possui mais de 18 anos de idade.`;
                break;

            default:
                resposta69_1 = `Das ${pessoas69.length} pessoas inseridas, ${maiores69} possuem mais de 18 anos de idade.`;
        }

        switch (homens69) {
            case 0:
                resposta69_2 = `Das ${pessoas69.length} pessoas inseridas, nenhuma é do gênero masculino.`;
                break;

            case 1:
                resposta69_2 = `Das ${pessoas69.length} pessoas inseridas, apenas uma é do gênero masculino.`;
                break;

            default:
                resposta69_2 = `Das ${pessoas69.length} pessoas inseridas, ${homens69} são do gênero masculino.`;
        }

        switch (mulheresJovens69) {
            case 0:
                resposta69_3 = `Das ${pessoas69.length} pessoas inseridas, nenhuma é do gênero feminino e possui menos de 20 anos de idade.`;
                break;

            case 1:
                resposta69_3 = `Das ${pessoas69.length} pessoas inseridas, apenas uma é do gênero feminino e possui menos de 20 anos de idade.`;
                break;

            default:
                resposta69_3 = `Das ${pessoas69.length} pessoas inseridas, ${mulheresJovens69} são do gênero feminino e possuem menos de 20 anos de idade.`;
        }

        const linhas69 = [
            resposta69_1,
            resposta69_2,
            resposta69_3
        ];

        resultadoDiv69.textContent = linhas69.join('\n');

        form69.reset();
    })
} catch (erro) {
    console.error(erro);
}

// Exercício 70
try {
    const form70 = document.querySelector('form#ex70-form');
    const resultadoDiv70 = document.querySelector('div#resultado70');

    if (!(form70 instanceof HTMLFormElement)) {
        throw new Error('form70 inválido!');
    }
    if (!(resultadoDiv70 instanceof HTMLDivElement)) {
        throw new Error('div70 inválida!');
    }

    const inputProduto70 = form70.elements.namedItem('ex70-produto');
    const inputPreco70 = form70.elements.namedItem('ex70-preco');
    const botaoRegistrar70 = form70.elements.namedItem('ex70-botao-registrar');

    if (!(inputProduto70 instanceof HTMLInputElement)) {
        throw new Error('inputProduto70 inválido!');
    }
    if (!(inputPreco70 instanceof HTMLInputElement)) {
        throw new Error('inputPreco70 inválido!');
    }
    if (!(botaoRegistrar70 instanceof HTMLButtonElement)) {
        throw new Error('botaoRegistrar70 inválido!');
    }

    type Produto70 = {
        nome: string;
        preco: number;
    };

    const produtos70: Produto70[] = [];

    function registrarProduto70(form: HTMLFormElement, inputProduto: HTMLInputElement, inputPreco: HTMLInputElement, div: HTMLDivElement): boolean {
        if (verificarInputVazio([inputProduto, inputPreco], div)) return false;

        const produto70 = inputProduto.value;
        const preco70 = Number(inputPreco.value);

        if (verificarNumeroInvalido([preco70], div)) return false;

        produtos70.push({
            nome: produto70,
            preco: preco70
        });

        div.textContent = `${produtos70.length}º registro inserido! Para continuar, apenas insira novos valores!`;

        form.reset();
        inputProduto.focus();

        return true;
    }

    botaoRegistrar70.addEventListener('click', () => registrarProduto70(form70, inputProduto70, inputPreco70, resultadoDiv70));

    form70.addEventListener('submit', e => {
        e.preventDefault();

        if (inputProduto70.value !== '' && inputPreco70.value !== '') {
            const registrou70 = registrarProduto70(form70, inputProduto70, inputPreco70, resultadoDiv70);

            if (!registrou70) return;
        }

        if (produtos70.length === 0) {
            resultadoDiv70.textContent = 'Nenhum produto foi cadastrado.';
            return;
        }

        let totalGasto70 = 0;
        let produtosMaisDe1000 = 0;
        let precoProdutoMaisBarato = Infinity;
        let nomeProdutoMaisBarato: string[] = [];

        for (const produto of produtos70) {
            totalGasto70 += produto.preco;
            if (produto.preco > 1000) produtosMaisDe1000++;
            if (produto.preco < precoProdutoMaisBarato) {
                nomeProdutoMaisBarato = [produto.nome];
                precoProdutoMaisBarato = produto.preco;
            } else if (produto.preco === precoProdutoMaisBarato) {
                nomeProdutoMaisBarato.push(produto.nome);
                precoProdutoMaisBarato = produto.preco;
            }
        }

        let respostaMaisDe1000: string;

        switch (produtosMaisDe1000) {
            case 0:
                respostaMaisDe1000 = `Dos ${produtos70.length} produtos inseridos, nenhum custa mais de R$1.000,00.`;
                break;

            case 1:
                respostaMaisDe1000 = `Dos ${produtos70.length} produtos inseridos, apenas um custa mais de R$1.000,00.`;
                break;

            default:
                respostaMaisDe1000 = `Dos ${produtos70.length} produtos inseridos, ${produtosMaisDe1000} custam mais de R$1.000,00.`;
        }

        const linhas70 = [
            `Total gasto: ${totalGasto70.toLocaleString('pt-BR', real)}.`,
            respostaMaisDe1000,
            nomeProdutoMaisBarato.length === 1
                ? `O produto mais barato inserido é: ${nomeProdutoMaisBarato} — que custa ${precoProdutoMaisBarato.toLocaleString('pt-BR', real)}.`
                : `Os produtos mais baratos inseridos são: ${nomeProdutoMaisBarato.join(', ')} — todos custando ${precoProdutoMaisBarato.toLocaleString('pt-BR', real)}.`
        ];

        resultadoDiv70.textContent = linhas70.join('\n');

        produtos70.length = 0;

        form70.reset();
    })
} catch (erro) {
    console.error(erro);
}