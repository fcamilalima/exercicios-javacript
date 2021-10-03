/* Passagem de atribuição por referencia: usada em objetos, 
 * aponta para o mesmo endereço de memória.  
 * Passagem por atribuiçãoo de valor: usada com variáveis 
 * com tipos primitivos. Cria-se uma cópia de uma variável 
 * independentemente da outra. 
*/

let valor // Não inicializada
console.log(valor)

valor = null // a variável valor não tem nenhum valor e nem 
console.log(valor) /* variável que aponta para algum endereço
  * de memória. Boas maneiras de programação: não atribuia uma
  * variável com UNDEFINED. O próprio Javascript faz a 
  * atribuição de UNDEFINED. Em vez disso, utilize NULL. */

// console.log(valor.toString()) valor is not defined

const produto = {}
console.log(produto.preco) // Resposta: undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir de forma explícita 
// UNDEFINDED.
console.log(!!produto.preco) // Resposta: false
delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco) // Resposta: false
console.log(produto)


