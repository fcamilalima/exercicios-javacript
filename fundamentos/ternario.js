const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
// Operador ternário é composto por três operandos: uma expressão 
// relacional que retornará verdadeiro ou falso, a expressão que 
// retornará em caso a sentença seja verdadeira e o retorno 
// caso a expressão seja falso.

console.log(resultado(7.1))
console.log(resultado(6.7))