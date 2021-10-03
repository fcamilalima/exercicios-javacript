function numeroInteiro(strings) {
    return parseInt(strings, 10)
}

function recordes(pontuacoes) {
    let pontuacao = pontuacoes.split(',')
    let record = 0
    let pontoMinimo = 0
    let numeroAnterior = 0

    for (let i = 0; i < pontuacao.length; i++) {
        if (i == 0) {
            pontoMinimo = pontuacao[i]
        } else if (i > 0) {
            if (pontuacao[i] > numeroAnterior) {
                ++record
            } else if (pontuacao[i] < pontoMinimo) {
                pontoMinimo = pontuacao[i]
            }
        }
        numeroAnterior = pontuacao[i]
    }
    console.log(pontuacao)
    return [record, pontoMinimo]
}

console.log(recordes('15, 12, 7, 9, 2, 5, 1, 8, 11'))