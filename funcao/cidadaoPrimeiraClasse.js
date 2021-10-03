/*
 * Aula 70 - Função: cidadão de primeira linha.
 *
 * Função em JS é First-Class Object ou First-Class Citizen.
 *  High-Order Function.
 * Função como dado.
 * - Passar função como parâmetro.
 * - Retornar uma função como resposta de uma outra função.
 * - Criar uma função e armazená-la numa variável/constante.
 * - Criar uma função dentro de outra função.
 * Javascript é uma linguagem multiparadigma. Imiscui paradigma
 *  procedural, orientada a objetos e funcional.
 *
*/

// Ao criar uma função de forma literal,
// retornar uma valor é opcional. O retorno de uma função
// se faz com a palavra-chave return e pode ter um retorno 
// implícito, sem a palavra return, devolvendo um tipo 
// undefined.
function fun1() { }

// Armazenar uma função em uma variável. A função que retorna 
// e é atribuída a uma variável fun2 é uma função anônima.
const fun2 = function () { }

// Armazenar uma função em um array.
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3)) // Resposta: 5

// Armazenando a função em um atributo de objeto
// criado dinamicamente.
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar()) // Resposta: Opa

// Passar função como parâmetro para outra, visando executar 
// a função run().
function run(fun) {
    // fun // Assim sendo, se for repassado fun como argumento 
    // de uma função e executado sem parêntes no final, fun 
    // não é considerada uma função que foi passada por 
    // parâmetro.
    fun()
}

run(function () { console.log('Executando...') })
// Resposta: 'Executando...'

// Uma função pode retornar/conter outra função.
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

// Não se escreve assim: soma(2, 3, 4)
// Chama-se a função dessa forma: 
soma(2, 3)(4) // Resposta: 9

// Similar a escrita soma(2, 3)(4).
const cincoMais = soma(2, 3)
cincoMais(4)  // Resposta: 9
