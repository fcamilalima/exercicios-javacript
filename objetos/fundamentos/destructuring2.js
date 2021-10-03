const [a] = [10, 20, 30, 40, 50] // Neste caso, está sendo usado o operador 
// destructuring para arrays. Preste atenção nos símbolos 
// de atribuição de array ou destructuring.
console.log(a) // Resposta: 10

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
// Resposta: 10 9 undefined 0

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota) // Resposta: 6