// TypeScript compilado em JavaScript
const botaoAdicionar = document.querySelector('input#botaoAdicionar');
const botaoAnalisar = document.querySelector('input#botaoAnalisar');
const box = document.querySelector('div#resultado');
if (!botaoAdicionar || !botaoAnalisar || !box)
    throw new Error('Elementos não encontrados no DOM.');
let boxEstilo = false;
botaoAdicionar.addEventListener('click', function () { return adicionar(box); });
botaoAnalisar.addEventListener('click', function () { return analisar(box); });
const lista = [];
function adicionar(container) {
    const inputN = document.querySelector('input#txtn');
    if (!inputN || inputN.value === '') {
        alert('Por favor, insira um valor!');
        return;
    }
    let n = Number(inputN.value);
    if (n % 1 !== 0 || n < 1 || n > 100) {
        alert('Por favor, insira um valor inteiro de 1 a 100!');
        inputN.value = '';
        inputN.focus();
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
    p.textContent = "Lista atual: ".concat(lista.join(', '), ".");
    container.appendChild(p);
    inputN.value = '';
    inputN.focus();
}
function analisar(container) {
    if (lista.length === 0) {
        alert('Por favor, adicione um valor!');
        return;
    }
    const comprimento = lista.length;
    let menor = lista[0];
    let maior = lista[0];
    let soma = 0;
    for (let _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        let n = lista_1[_i];
        if (n < menor)
            menor = n;
        if (n > maior)
            maior = n;
        soma += n;
    }
    const media = soma / lista.length;
    container.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = "A lista possui ".concat(comprimento, " ").concat(comprimento === 1 ? 'item' : 'itens', ".\nO menor valor \u00E9 ").concat(menor, " e o maior \u00E9 ").concat(maior, ".\nA soma \u00E9 igual a ").concat(soma, " e a m\u00E9dia \u00E9 igual a ").concat(media.toFixed(2), ".");
    p.className = 'exibicaoAnalise';
    container.appendChild(p);
}
