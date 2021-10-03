// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // Resposta: 5.
imprimirSoma(2) // Permite-se passar somente um argumento no exemplo. 
// Resposta: NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // Resposta: 12

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) // Respota: 5
console.log(soma(2)) // Resposta: 3
console.log(soma()) // Resposta: NaN

