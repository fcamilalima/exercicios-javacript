let arrayPares = []
let arrayImpares = []
let numerosPares = 0
let numerosImpares = 0

function parOuImpar(numero) {
    if (numero % 2 == 0) {
        arrayPares.push(numero)
        numerosPares++

    } else if (numero % 2 == 1) {
        arrayImpares.push(numero)
        numerosImpares++
    }
}

function distinguidoParesEImpares(vetor) {
    vetor.forEach(parOuImpar)
    console.log(`${numerosPares} par(es) e ${numerosImpares} ímpar(es).`)
    return [arrayPares, arrayImpares]
}

console.log(distinguidoParesEImpares([3, 5, 8, 11, 12, 15, 18, 21, 26, 30, 33]))