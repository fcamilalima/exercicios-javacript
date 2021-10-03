/*
 * Aula 108 - Desafio Função Construtora
*/

// Função Construtora
function Pessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
// Instancia-se objetos a partir de uma class
// ou de uma função construtora ou de uma função factory. 