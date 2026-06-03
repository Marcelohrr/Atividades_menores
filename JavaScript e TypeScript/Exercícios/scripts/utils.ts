export type Genero = 'f' | 'm' | 'o';

export const anoAtual = new Date().getFullYear();

export const real: Intl.NumberFormatOptions = { // Tipo para objetos de configuração usados em toLocaleString() e Intl.NumberFormat()
    style: 'currency',
    currency: 'BRL'
};

export function verificarInputVazio(
    inputArray: (HTMLInputElement | HTMLSelectElement)[],
    div: HTMLDivElement
): boolean {
    if (inputArray.some(input => input.value.trim() === '')) {
        div.textContent = inputArray.length === 1 ? 'Insira um valor!' : 'Insira os valores!';
        return true;
    }
    return false;
}

export function verificarNumeroInvalido(
    numeroArray: number[],
    div: HTMLDivElement
): boolean {
    const quantidadeInvalidos = numeroArray.filter(numero =>
        Number.isNaN(numero)
    ).length;
    if (quantidadeInvalidos > 0) {
        div.textContent = quantidadeInvalidos === 1 ? 'Insira um valor válido!' : 'Insira valores válidos!';
        return true;
    }
    return false;
}

export function gerarNumeroAleatorio(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}