/* 
 * Aula 96 - Arrow Function - Parte 03 
 */

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // Resposta: true
comparaComThis(this) // Resposta: false
// 'this' não referencia this, e sim, o escopo global.

// Numa função normal (criada com a palavra-chave function),  
// o 'this' referenciará o escopo global. Para retornar 
// ao escopo da função, precisa-se usar a função bind(). 
// Arrow function, não precisa dessa correção. A função 
// aponta normalmente para o escopo de função (contexto léxico).
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // Resposta: false
comparaComThis(obj) // Resposta: true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // Resposta: false
comparaComThisArrow(module.exports) // Resposta: true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // Resposta: false
// No exemplo acima, ao tentar trocar a referência de
// this dentro uma arrow function (função comparaComThisArrow) 
// com a função bind(), a prioridade de this apontará para
//  o escopo de module.exports e não de obj.


/*
No browser:
let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(window)
true

comparaComThis(global)
Uncaught ReferenceError: global is not defined

*/