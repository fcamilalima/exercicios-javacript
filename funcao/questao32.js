function mediaAritmetica(vetor) {
    let acumulador = 0
    let media = 0
    for (let i = 0; i < vetor.length; i++) {
        acumulador += vetor[i]
    }
    media = acumulador / vetor.length
    return console.log(`A média é ${media}.`)
}

mediaAritmetica([34, 23, -100, 12, 56, -74, 83, 199, -29])