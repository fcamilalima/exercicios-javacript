/* 
 * Aula 97 - Funções Anônimas 
 */
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // Resposta: 7
imprimirResultado(3, 4, soma) // Resposta: 7
imprimirResultado(3, 4, function (x, y) {
    return x - y
})  // Resposta: -1
imprimirResultado(3, 4, (x, y) => x * y)  // Resposta: 12
// Arrow function também é uma função anônima.

// Função dentro de um objeto
const pessoa = {
    falar: function () {
        console.log('Opa!')
    }
    /*  falar() {
         console.log('Opa!')
     } */
}

pessoa.falar()