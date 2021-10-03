/*
* Aula 98 - Funções Callback - Parte 01
* Callback significa chamar de volta.
* Padrão Observer é um dos padrões mais usados na Internet.
*/

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`) // Assinatura 
    // de uma função que pode ser chamada pelo forEach.
}

// A função callback será chamada quando um evento ocorrer.
// No caso abaixo, o evento será um loop.
// No processo de callback, ao se ter mais de um dado de entrada 
// como um array e ao executar a função para cada entrada, 
// está sendo executada um collback.

fabricantes.forEach(imprimir) // Dentro do array fabricantes 
// existe a função forEach()

fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
})
fabricantes.forEach((fabricante) => console.log(fabricante))

