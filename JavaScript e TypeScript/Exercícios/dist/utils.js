export const anoAtual = new Date().getFullYear();
export const real = {
    style: 'currency',
    currency: 'BRL'
};
export function verificarInputVazio(inputArray, div) {
    if (inputArray.some(input => input.value.trim() === '')) {
        div.textContent = inputArray.length === 1 ? 'Insira um valor!' : 'Insira os valores!';
        return true;
    }
    return false;
}
export function verificarNumeroInvalido(numeroArray, div) {
    const quantidadeInvalidos = numeroArray.filter(numero => Number.isNaN(numero)).length;
    if (quantidadeInvalidos > 0) {
        div.textContent = quantidadeInvalidos === 1 ? 'Insira um valor válido!' : 'Insira valores válidos!';
        return true;
    }
    return false;
}
export function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
