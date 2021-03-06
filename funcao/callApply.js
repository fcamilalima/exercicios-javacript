/*
 * Aula 110 - Call  & Apply
 */

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) *
        (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Resposta: R$ 18
console.log(produto.getPreco()) // Resposta: R$ 3900.65

const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro)) // Resposta: R$ 39992
console.log(getPreco.apply(carro)) // Resposta: R$ 39992

console.log(getPreco.call(carro, 0.17, '$'))
// Resposta: $ 46790.64

console.log(getPreco.apply(carro, [0.17, '$']))
 // Resposta: $ 46790.64
// A diferença entre a função call e a função apply é a
// passagem de parâmetros.
// A função call se passa o objeto e os parâmetros da função.
// A função apply se passa o objeto e os parâmetros da 
// função como array.
