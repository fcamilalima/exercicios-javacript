/* 
 * Aula 99 - Callback - Parte 02
 */

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1) // Resposta: [ 6.5, 5.2, 3.6 ]

// Com callback
// Filter recebe parâmetros, cujos os resultados serão 
// verdadeiro e falso.
// Segundo exemplo
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2) // Resposta: [ 6.5, 5.2, 3.6 ]

// Terceiro exemplo
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3) // Resposta: [ 6.5, 5.2, 3.6 ]

// Quarto exemplo
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4) // Resposta: [ 6.5, 5.2, 3.6 ]