/*
 * Aula 95 -  Arrow Function - Parte 02
 */

function Pessoa() {
    this.idade = 0

    // 'this' sendo usado dentro de uma arrow function.
    // A função pessoa é um contexto léxico. 'this' aponta 
    // para o objeto instanciado de Pessoa.

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa // Criação de um objeto