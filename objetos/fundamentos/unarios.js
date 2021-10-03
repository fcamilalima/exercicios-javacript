/* Aula 54 - Data: 03/07/2021 */
let num1 = 1
let num2 = 2

num1++ //Forma pós-fixada
console.log(num1) //Resposta: 2
--num1 //Forma pré-fixada tem uma ordem de prescedência 
// maior que uma forma pós-fixada.
console.log(num1) //Resposta: 1

console.log(++num1 === num2--) //Resposta: true
console.log(++num1 === num2--) //Resposta: false

// Usar refatoração e simplicando a criação para deixar 
// a leitura do código mais inteligível.