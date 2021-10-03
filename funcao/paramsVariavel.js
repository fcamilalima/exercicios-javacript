/* Aula 72 - Parâmetros Variáveis. */

function soma() { // Não é porque a criação da função não 
    // recebe argumentos que necessariamente será um 
    // impeditivo;;;;;;;;;;;;;;; em adicionar argumentos na chamada 
    // da função.

    let soma = 0
    for (i in arguments) { // arguments é um array interno 
        // que recebe todos os parâmetros passados na função.
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) //Resposta: 0
console.log(soma(1)) //Resposta: 1
console.log(soma(1.1, 2.2, 3.3)) //Resposta: 6.6
console.log(soma('a', 'b', 'c')) //Resposta: 0abc