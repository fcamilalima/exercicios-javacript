/* 
 * Aula 107 - Classes Versus Funções Construtoras  
*/

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
        // console.log(`Meu nome é ${nome}`)
        // Resposta: ReferenceError: nome is not defined
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Função Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()



/*
 * No browser:
 * class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
        // console.log(`Meu nome é ${nome}`)
        // Resposta: ReferenceError: nome is not defined
    }
}

const p1 = new Pessoa('João')
p1.falar() // Reposta: Meu nome é João.

document.getElementsByTagName('body')[0].onclick = p1.falar
// Resposta: Meu nome é undefined.
// Ocorre isto porque a função acessa this.nome que não
// recebe o parâmetro 'João'.

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

document.getElementsByTagName('body')[0].onclick = p2.falar
// Resposta: Meu nome é João
// Na função construtora, que também é uma função factory,
// o parâmetro passado é captado, dependente do contexto
// léxico da arrow function. Diferentemente da classe
// acima que retorna um valor undefined.

 */