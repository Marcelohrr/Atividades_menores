// TypeScript compilado em JavaScript
const botao = document.querySelector('input#botaoGerar');
const box = document.querySelector('div#resultado');
if (!botao || !box)
    throw new Error('Elementos não encontrados no DOM.');
let boxEstilo = false;
botao.addEventListener('click', function () { return gerarTabuada(box); });
function gerarTabuada(container) {
    const inputN = document.querySelector('input#txtn');
    if (!inputN || inputN.value === '') { // !inputN garante que o elemento existe no DOM e inputN.value === '' garante que o usuário digitou algo
        alert('Por favor, insira um valor!');
        return;
    }
    let n = Number(inputN.value);
    if (n <= 0) {
        alert('Por favor, insira um valor maior do que zero!');
        return;
    }
    if (n % 1 !== 0) { // !Number.isInteger(n) não funcionou
        alert('Por favor, insira um valor inteiro!');
        return;
    }
    container.innerHTML = '';
    if (!boxEstilo) {
        container.style.backgroundColor = 'lightcyan';
        container.style.marginTop = '20px';
        container.style.borderRadius = '10px';
        container.style.padding = '10px';
        container.style.textAlign = 'center';
        boxEstilo = true;
    }
    if (n > 100) {
        alert('Uau!');
    }
    for (let contador = 1; contador <= 10; contador++) {
        criarParagrafo(n, contador, container);
    }
}
function criarParagrafo(n, contador, container) {
    const p = document.createElement('p');
    p.textContent = "".concat(String(n), " x ").concat(contador, " = ").concat(n * contador);
    p.className = 'tabuada';
    container.appendChild(p);
}
