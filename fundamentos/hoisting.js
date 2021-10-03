/*
 * Aluno(a): Francisca Camila da Silva Lima
 * Hoisting
 * Conceito relacionado com VAR e LET. Quer dizer içado, 
 * içamento, jogar para cima.
 * Javascript possui Hoisting.
 * 
 */

function teste() {
    console.log('a = ', a) // Resposta: undefined
    var a = 2
    console.log('a = ', a) // Resposta: 2
}
/* Hoisting segundo o W3school.
 * É o comportamento padrão do Javascript que move a 
 * declaração para o top. */

teste()
//console.log('a = ', a) // Erro: a is not definded

console.log('==========================')
var a = 2
console.log('a = ', a) // 
function qualquer() {
    console.log('a = ', a) // 
    var a = 3
    console.log('a = ', a) // 
}
qualquer()

console.log('==========================')
var a = 2
console.log('a = ', a)

function qualquer1() {
    // Como se a variável fosse declarada anteriomente 
    //(içada) e atribuída com undefined.
    console.log('a = ', a) // Resposta: undefined
    var a = 3
    console.log('a = ', a) // Resposta: 3
}
qualquer1()

console.log('==========================')
function getValor() {

    //var returnarValor = undefined - Declaração da função
    //var returnarValor = undefined - Declaração da função

    function retornarValor() { // Deixa de ser uma declaração
        return 1             // e vira uma atribuição.
    }
    return retornarValor()
    function retornarValor() { // Deixa de ser uma declaração
        return 2               // e vira uma atribuição.
    }
}
var resultado = getValor() //Declaração da função, 
console.log(resultado)  //essa declaração irá ser içada 
                        // (hoisting)