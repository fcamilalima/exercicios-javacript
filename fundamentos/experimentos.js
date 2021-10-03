/* 
 * Aula 56 - Contexto de Execução: Browser Vs Node. 
 * Data: 03/07/2021
*/

let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log('a = ', this.a) // Global não consegue acessar a variável 
// a (declarada com let e impossibilita o acesso ao escopo global 
// no NODE.js - module exports).
// Resposta: undefined

console.log('a = ', global.a) // Resposta: undefined
console.log(global.b) // Resposta: 123
console.log(this.c)   // Resposta: 456
console.log(module.exports.c)  // Resposta: 456
// this é igual a module.exports no runtime do NODE.js.
console.log(module.exports === this) //this representa o escopo 
// global modulo.experts.

console.log(module.exports)
//Resposta: { c: 456, d: false, e: 'teste' }

// Cada arquivo representa um módulo diferente.
// Nunca declare uma variável como global. Acesse variáveis 
// através de objetos. 

// criando uma variável maluca: sem var e nem let!
abc = 3 //Não faça isso
console.log(global.abc)
