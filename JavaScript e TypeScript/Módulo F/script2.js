// Próximos passos: Objetos
/*
Um objeto é uma coleção de pares chave:valor.

Tecnicamente, um array é um tipo especial de objeto em JavaScript. É uma coleção ordenada (como lista) e indexada numericamente.

Exemplo:
let vetorNumeros = [10, 20, 30];

• Acessando um valor pelo índice no array:
vetorNumeros[0] → 10 (equivalente a vetorNumeros['0'])

• Acessando um índice pelo valor no array:
vetorNumeros.indexOf(30) → 2 (se o valor não existir, retorna -1)

----------

Uma coleção nomeada (objeto literal) organiza dados por propriedades.

Exemplo:
let pessoaAna = {
    nome: 'Ana',
    idade: 50,
    apresentar(frase) {
        return `Olá, meu nome é ${this.nome}. ${frase}`;
    }
};

• Acessando um valor pela chave no objeto:
pessoaAna.nome → 'Ana' (equivalente a pessoaAna['nome'])
• Não há método nativo para acessar uma chave pelo valor no objeto.
• Chamando o método do objeto pessoaAna:
pessoaAna.apresentar(':D'); → 'Olá, meu nome é Ana. :D'

Ou melhor, criando o mesmo objeto a partir de uma classe:
class Pessoa {
    constructor(nome, idade) { // constructor é um método especial para inicializar os atributos
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(frase) {
        return `Olá, meu nome é ${this.nome}. ${frase}`;
    }

    static especie() { // static é um método de classe
        return 'Humano';
    }
}

let pessoaAna = new Pessoa('Ana', 50);

pessoaAna.apresentar(':D');
Pessoa.especie(); → 'Humano'
*/