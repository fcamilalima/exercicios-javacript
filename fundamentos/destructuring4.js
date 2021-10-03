/* Destructuring dentro dos parâmetros de uma função. */

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) // o número 992 assume o valor de min.
console.log(rand([, 10])) // Assumindo o valor máximo de 10.
console.log(rand([])) // Passando array vazio como parâmetro.
// Assume os valores padrões de min=0 e max=1000 definidos
// na função, usando o destructuring.

// console.log(rand()) // Erro.
