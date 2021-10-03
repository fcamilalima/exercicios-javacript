function buscarNegativos(vetor) {
    let numerosNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            ++numerosNegativos
        }
    }
    return console.log(`A quantidade de números negativos é ${numerosNegativos}.`)
}

buscarNegativos([-3, -10, 3, 5, 9, -100, -103, 14, 76])