/* 
 * Aula 106 - Funções Factory - Parte 02 
*/
function criarProduto(nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
    }

    /*  Outra forma de retornar um objeto com funções factory. 
        return{
          nome: nome,
          preco: preco,
          desconto: 0.1
      } */

}

console.log(criarProduto('Notebook', 2199.49))
// Resposta:
// { nome: 'Notebook', preco: 2199.49, desconto: 0.1 }

console.log(criarProduto('iPad', 1199.49))
// Resposta:
// { nome: 'iPad', preco: 1199.49, desconto: 0.1 }