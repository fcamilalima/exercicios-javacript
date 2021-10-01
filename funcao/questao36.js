function multiplica(vetorDeNumeros, valorInteiro) {
    let argumentos = []
    for (let i = 0; i < vetorDeNumeros.length; i++) {
        argumentos.push(vetorDeNumeros[i] * valorInteiro)
    }
    return console.log(argumentos)
}
function multiplicaMaiorQue5(vetorDeNumeros, valorInteiro) {
    if (valorInteiro > 5) {
        return multiplica(vetorDeNumeros, valorInteiro)
    } else {
        console.log('Digite um número maior que 5.')
    }
}

multiplica([1, 2, 4, 5, 6], 2)
multiplicaMaiorQue5([2, 4, 6, 9, 10], 2)
multiplicaMaiorQue5([3, 5, 7, 9, 11], 6)