// TypeScript
/*
const botao = document.querySelector<HTMLInputElement>('input#botaoContar');
const box = document.querySelector<HTMLDivElement>('div#resultado');
----------
<HTMLInputElement> e <HTMLDivElement> são tipagens do DOM.
Sem isso, o TypeScript sabe apenas que a const botao é do tipo Element | null.
Element é o tipo genérico mais básico de todos os elementos HTML e, portanto, só tem propriedades comuns a todos os elementos. Element não tem propriedades específicas como .value ou .checked de um input, nem .innerHTML de uma div.
Com <HTMLInputElement> e <HTMLDivElement>, o TypeScript sabe exatamente que o elemento é um input e uma div. Ainda existe a possibilidade de null (se o ID não existir), então TypeScript considera HTMLInputElement | null e HTMLDivElement | null.
----------

if (!botao || !box) throw new Error('Elementos não encontrados no DOM.');
----------
O operador ! faz negação de verdade/falsidade. !variável = negação do valor da variável. Se a variável for "falsy", a operação dá true. Valores considerados falsy em JavaScript e TypeScript: false, 0, '', null, undefined, NaN.

Verificação necessária para garantir que botao e box existem e o TypeScript reconhecer que eles não podem mais ser null.
----------

let boxEstilo: boolean = false;

botao.addEventListener('click', () => contar(box));
----------
() é uma função anônima (arrow function) e sem parâmetros que chama => contar(box) quando o botão for clicado.
O navegador chamaria contar(event) automaticamente, por isso é importante usar os parêntesis vazios, para indicar que não é para usar Event como parâmetro.
Depois, passa box como argumento, porque, apesar de já ter sido verificado no escopo global, o TypeScript não sabe que box não é null dentro da função. Assim, o parâmetro container na função garante que ele não é null, o que torna a função segura e também independente da variável global.
----------

function contar(container: HTMLDivElement): void { // void é o tipo de uma função que não retorna nada
    const inputInicio = document.querySelector<HTMLInputElement>('input#txtnI');
    const inputFim = document.querySelector<HTMLInputElement>('input#txtnF');
    const inputPasso = document.querySelector<HTMLInputElement>('input#txtnP');

    if (!inputInicio || !inputFim || !inputPasso) {
        alert('Por favor, insira todos os valores!');
        return;
    }
    ----------
    document.querySelector(...) pode retornar null se o elemento não existir no DOM. Como .value pode causar erro ("Cannot read property 'value' of null"), é necessária a verificação
    ----------

    const inicio = Number(inputInicio.value);
    const fim = Number(inputFim.value);
    let passo = Math.abs(Number(inputPasso.value));

    container.innerHTML = '';

    if (inputInicio.value === '' || inputFim.value === '' || inputPasso.value === '') {
        alert('Por favor, insira todos os valores!');
        return;
    }

    if (passo === 0) {
        alert('O passo não pode ser 0!');
        return;
    }

    if (!boxEstilo) {
        container.style.backgroundColor = 'lightcyan';
        container.style.marginTop = '20px';
        container.style.borderRadius = '10px';
        container.style.padding = '10px';
        container.style.textAlign = 'center';
        boxEstilo = true;
    }

    if (inicio <= fim) {
        for (let n = inicio; n <= fim; n += passo) {
            criarParagrafo(n, container);
        }
    } else {
        for (let n = inicio; n >= fim; n -= passo) {
            criarParagrafo(n, container);
        }
    }
}

function criarParagrafo(valor: number, container: HTMLDivElement): void {
    const p = document.createElement('p');
    p.textContent = String(valor); // Conversão necessária em TypeScript
    p.className = 'contagem';
    container.appendChild(p);
}

----------
É necessário compilar o código em TypeScript, porque os navegadores não entendem arquivos .ts diretamente. O TypeScript adiciona recursos que o JavaScript puro não tem, como tipagem de variáveis e verificação de erros em tempo de compilação, mas isso significa que o código não pode ser executado sozinho. A compilação transforma o código TypeScript em JavaScript padrão (.js), que os navegadores conseguem interpretar, garantindo que o programa funcione corretamente e que erros de tipo sejam detectados antes da execução.

Para compilar, no terminal:
1. Navegue até a pasta do arquivo → cd "C:\Users\Marcelo Henrique\OneDrive\Documentos\Desenvolvimento\Atividades_menores\JavaScript\Módulo E\Exercício 1"
2. Digite o nome do arquivo .ts → tsc script2.ts -w (tsc chama o compilador TypeScript e -w coloca o arquivo em "watch mode", para recompilar automaticamente para .js sempre que você salvar o arquivo .ts).
----------
*/