/*
const botao = document.querySelector<HTMLInputElement>('input#botaoGerar');
const box = document.querySelector<HTMLDivElement>('div#resultado');

if (!botao || !box) throw new Error('Elementos não encontrados no DOM.');

let boxEstilo: boolean = false;

botao.addEventListener('click', () => gerarTabuada(box));

function gerarTabuada(container: HTMLDivElement): void {
    const inputN = document.querySelector<HTMLInputElement>('input#txtn');

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

function criarParagrafo(n: number, contador: number, container: HTMLDivElement): void {
    const p = document.createElement('p');
    p.textContent = `${String(n)} x ${contador} = ${n*contador}`;
    p.className = 'tabuada';
    container.appendChild(p);
}
*/