/* Aula 71 - Parâmetros e Retornos são opcionais. */

function area(largura, altura) {
    const area = altura * largura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m2.`)
        // Não retorna nada, somente uma mensagem.
    }
    else {
        return area
        // Nesta condição, retornará a área da figura.
    }
}

console.log(area(2, 2)) // Resposta: 4
console.log(area(2)) // Resposta: NaN
console.log(area()) // Resposta: NaN
console.log(area(2, 3, 17, 22, 44)) // Resposta: 6
// Não mostrará mensagem de erro, apesar de se ter 
// passado mais parâmetros que a assinatura da função 
// permite (dois parâmetros) só usará os dois primeiros 
// argumentos.
console.log(area(5, 5)) // Resposta: undefined
// Tal condição da cláusula if não tem retorno.