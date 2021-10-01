/* 
 * Aula 94 = Funções Arrow - Parte 01 
 * Introduzido o Arrow Function no ES2015 ou ES6.
 * A função arrow é sempre uma função anônima que precisa 
 * ser atribuída a uma variável.
 * Sintaxe reduzida com um this que não varia. 
*/
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { // Refatorando...
    return 2 * a
}

// Refatorando...
dobro = a => 2 * a // return implícito
// Favorece o reuso de código. Código funcional.

console.log(dobro(Math.PI)) // Resposta: 6.283185307179586 

let ola = function () {
    return 'Olá!'
}

ola = () => 'Olá!'
ola = _ => 'Olá!' // Função com um único parâmetro.

console.log(ola())


