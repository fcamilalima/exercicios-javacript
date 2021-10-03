/*
 * Quando se faz uma comparação usando um operador
 * relacional, a resposta será TRUE ou FALSE.
 * No Javascript, existe dois tipos de comparaçãoes
 * se os valores são iguais (mesmo com tipo diferentes)
 * ou se os valores são estritamente iguais.
 */

console.log('Teste') // Um igual (=) é uma atribuição.
console.log(`01) ${'1' == 1}`) // Dois símbolos de == 
// representa uma igualdade que simboliza os valores e não 
// os tipos de dados de cada operando.
// Resposta: 01) true

console.log(`02) ${'1' === 1}`) // Operador de estrita igualdade
// entre valores. Incluindo, os valores e o tipo de dados 
// dos operandos.
// Resposta: 02) false

console.log(`03) ${'3' != 3}`) // Operador de diferença.
// Resposta: 03) false

console.log(`04) ${'3' !== 3}`) // Operador extritamente 
// diferente.
// Resposta: 04) true

console.log(`05) ${3 < 2}`) // Menor que
// Resposta = false
console.log(`06) ${3 > 2}`) // Maior que
// Resposta = true
console.log(`07) ${3 <= 2}`) // Menor ou igual que
// Resposta = false
console.log(`08) ${3 >= 2}`) // Maior ou igual que
// Resposta = true

const d1 = new Date(0) // Argumento 0 corresponde a data
// de referência (marco zero) de 1 de janeiro de 1970.
const d2 = new Date(0)

console.log(`09) ${d1 === d2}`) // Resposta: false
console.log(`10) ${d1 == d2}`) // Resposta: false
console.log(`11) ${d1.getTime() == d2.getTime()}`)
// Resposta: true
console.log(`12) ${d1.getTime() === d2.getTime()}`)
// Resposta: true

console.log(`13) ${undefined == null}`)
// Representam vazio, mas não são do mesmo tipo.
console.log(`14) ${undefined === null}`)
// Os tipos são diferentes.

