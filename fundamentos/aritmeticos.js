/*
 * Operadores aritméticos possuem dois operandos
 * de entrada.
 */

const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
// operando1 + operando2 -> Syntaxe in fix

// d++ -> sintaxe post-fix
// sintaxe pre-fix
// -u ->  operador unário - Recebe um operando.
// ? - Operador ternário - Recebe três operandos.

const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(`Soma é ${soma}`)
console.log(`Subtração é ${subtracao}`)
console.log(`Multiplicação é ${multiplicacao}`)
console.log(`Divisão é ${divisao}`)
console.log(`Módulo é ${modulo}`)



