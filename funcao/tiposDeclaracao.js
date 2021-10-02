/*  
 * Aula 102 - Tipos de declaração
 */
// No momento em que se declara a função, a
// carrega (hoisting) primeiramente em memória, 
// mesmo antes da declaração da função. O dito
// acima é válido para somente function declaration.

console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
// Não é permitido a chamada a função antes da 
// criação dela na function expression. 

const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression 
// Não é permitido a chamada a função antes da 
// criação dela na named funtion expression. 
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))


