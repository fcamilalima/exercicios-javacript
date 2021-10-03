/*
 * Aula 101 - Funções Construtoras
 * Funções Construtoras serão usadas como uma Classe em
 * Orientação a Objetos. No ECMAScript2015 (ES6), criou o
 * conceito de Classe. Em Javascript, classe também é uma
 * forma diferente de escrever uma função com uma sintaxe
 * familiar. A função construtora é uma função que pode
 * ser extendida (herança).
 *
 */

// Usando classes.
class Carro {
    // método construtor
    constructor(velocidadeMaxima = 200, delta = 5) {
        this.velocidadeMaxima = velocidadeMaxima
        this.delta = delta
        this.velocidadeAtual = 0
    }

    acelerar() {
        if (this.velocidadeAtual + this.delta <= this.velocidadeMaxima) {
            this.velocidadeAtual += this.delta
        } else {
            this.velocidadeAtual = this.velocidadeMaxima
        }
    }

    getVelocidadeAtual() {
        return this.velocidadeAtual

    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual()) // Resposta: 5

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())  // Resposta: 60

console.log(typeof Carro) // Resposta: function
console.log(typeof ferrari) // Resposta: object

/*

Código Legado


function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    // let transforma o atributo em privado.
    let velocidadeAtual = 0

    // Método Público
    // this possibilita a função se tornar pública para outras
    // funções (arquivos).
    // Criando funções dentro de uma função.
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

    const uno = new Carro
    uno.acelerar()
    console.log(uno.getVelocidadeAtual())

    const ferrari = new Carro(350, 20)
    ferrari.acelerar()
    ferrari.acelerar()
    ferrari.acelerar()
    console.log(ferrari.getVelocidadeAtual())

    console.log(typeof Carro)
    console.log(typeof ferrari)

}

 */