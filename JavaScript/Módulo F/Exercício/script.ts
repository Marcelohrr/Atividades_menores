/*
const botaoAdicionar = document.querySelector<HTMLInputElement>('input#botaoAdicionar');
const botaoAnalisar = document.querySelector<HTMLInputElement>('input#botaoAnalisar');
const box = document.querySelector<HTMLDivElement>('div#resultado');

if (!botaoAdicionar || !botaoAnalisar || !box) throw new Error('Elementos não encontrados no DOM.');

let boxEstilo: boolean = false;

botaoAdicionar.addEventListener('click', () => adicionar(box));
botaoAnalisar.addEventListener('click', () => analisar(box));

const lista: Array<number> = [];

function adicionar(container: HTMLDivElement): void {
    const inputN = document.querySelector<HTMLInputElement>('input#txtn');

    if (!inputN || inputN.value ==='') {
        alert('Por favor, insira um valor!');
        inputN.value = '';
        inputN.focus();
        return;
    }

    let n = Number(inputN.value);

    if (n % 1 !== 0 || n < 1 || n > 100) {
        alert('Por favor, insira um valor inteiro de 1 a 100!');
        return;
    }

    container.innerHTML = '';

    if (!boxEstilo) {
        container.style.backgroundColor = 'lightpink';
        container.style.marginTop = '20px';
        container.style.borderRadius = '10px';
        container.style.padding = '10px';
        container.style.textAlign = 'center';
        boxEstilo = true;
    }

    lista.push(n);

    const p = document.createElement('p');
    p.textContent = `Lista atual: ${lista.join(', ')}.`;
    container.appendChild(p);

    inputN.value = '';
    inputN.focus();
}

function analisar(container: HTMLDivElement): void {
    if (lista.length === 0) {
        alert('Por favor, adicione um valor!');
        return;
    }

    const comprimento = lista.length;
    let menor: number = lista[0];
    let maior: number = lista[0];
    let soma: number = 0;
    for (let n of lista) {
        if (n < menor) menor = n;
        if (n > maior) maior = n;
        soma += n;
    }
    const media = soma / lista.length;

    container.innerHTML = '';

    const p = document.createElement('p');
    p.textContent = `A lista possui ${comprimento} ${comprimento === 1 ? 'item' : 'itens'}.\nO menor valor é ${menor} e o maior é ${maior}.\nA soma é igual a ${soma} e a média é igual a ${media.toFixed(2)}.`;
    p.className = 'exibicaoAnalise';
    container.appendChild(p);
}
*/