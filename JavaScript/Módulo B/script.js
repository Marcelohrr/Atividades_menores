// Comentário de linha

/*
Comentário de bloco
*/

var n1 = 1 // Declaração de variável
n1 = null // Atribuição de variável

var s1 = "Aprendendo" // String normal
var s2 = 'JS' // String normal
var s3 = `:)` // Template literals: permite interpolação de variáveis com ${} e quebras de linha

/*
var funciona para declarar variáveis, mas não é recomendado, porque:
- Tem escopo de função, não de bloco, o que pode gerar comportamentos inesperados.
- Permite redeclaração, o que aumenta a chance de sobrescrever variáveis acidentalmente.
- Ocorre hoisting (elevação) da declaração, ou seja, a variável existe antes de ser declarada e inicializa como undefined, o que pode gerar comportamentos inesperados.

Por isso, const e let são preferíveis:
- const não permite reatribuir a variável depois de declarada (bloqueia a referência para objetos, ou o valor para primitivos).
- let permite reatribuir a variável depois de declarada.

Dica: use const por padrão ao declarar uma variável que não precisa ser reatribuída, para evitar mudanças acidentais.
*/

/*
Atribuição de variáveis em TypeScript:
let n1: number | null = 1; → | permite number ou null
n1 = null;
*/

/*
Identificadores:
- Podem começar com letra, $ ou _.
- Não podem começar com números.
- Aceitam letras, números, acentos e símbolos.
- Não podem conter espaços nem hífen.
- Não podem ser palavras reservadas.
- São case sensitive.
*/

/*
Principais tipos de dados:
- boolean
- undefined
- number
-- Infinity
-- NaN (Not a Number)
- string
- object
-- null
-- Array
- function
*/