console.log(typeof Object) // Respota: function.
// Object é uma função.
console.log(typeof new Object) // Respota: object.
// É uma instância de Object. 
// Cria um objeto sem parênteses no fim.
console.log(typeof new Object()) // Respota: object.
// É uma instância de Object.
const Cliente = function () { }
console.log(typeof Cliente) // Respota: function.
console.log(typeof new Cliente) // Respota: object.
console.log(typeof new Cliente()) // Respota: object.

class Produto { } // ES 2015 (ES6) (ECMA-script 2015).  
// Classe define a criação de uma função. 
// É um atalho para criar um função. Class é uma syntax sugar.
// Função possui atributos e comportamentos.
// Função construtora.
console.log(typeof Produto) // Respota: function.
console.log(typeof new Produto) // Respota: object.
console.log(typeof new Produto()) // Respota: object.