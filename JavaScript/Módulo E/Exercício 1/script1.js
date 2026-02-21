// JavaScript
/*
const botao = document.querySelector('input#botaoContar');
const box = document.querySelector('div#resultado');
let boxEstilo = false;

botao.addEventListener('click', contar);

function contar() {
    const inputInicio = document.querySelector('input#txtnI').value;
    const inputFim = document.querySelector('input#txtnF').value;
    const inputPasso = document.querySelector('input#txtnP').value;
    const inicio = Number(inputInicio);
    const fim = Number(inputFim);
    let passo = Number(inputPasso);
    passo = Math.abs(passo);

    box.innerHTML = '';

    if (inputInicio === '' || inputFim === '' || inputPasso === '') {
        alert('Por favor, insira todos os valores!');
    } else if (passo === 0) {
        alert('O passo não pode ser 0!');
    } else {
        if (!boxEstilo) {
            box.style.backgroundColor = 'lightcyan';
            box.style.marginTop = '20px';
            box.style.borderRadius = '10px';
            box.style.padding = '10px';
            box.style.textAlign = 'center';
            boxEstilo = true;
        }

        if (inicio <= fim) {
            for (let n = inicio; n <= fim; n += passo) {
                criarParagrafo(n, box);
            }
        } else {
            for (let n = inicio; n >= fim; n -= passo) {
                criarParagrafo(n, box);
            }
        }
    }
}

function criarParagrafo(valor, container) {
    const p = document.createElement('p');
    p.textContent = String(valor); // Conversão desnecessária em JavaScript, apesar de ser boa prática explicitar
    p.className = 'contagem';
    container.appendChild(p);
}
*/