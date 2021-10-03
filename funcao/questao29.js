let dentro10e20 = 0
let fora10e20 = 0
function entre(valor) {

    if (valor >= 10 && valor <= 20) {
        dentro10e20++
    } else {
        fora10e20++
    }
}
function intervalos(vetor) {
    vetor.forEach(entre)
    console.log(`Números entre 10 e 20: ${dentro10e20}.\nNúmeros fora do Intervalo entre 10 e 20: ${fora10e20}.`)
}

intervalos([0, 3, 5, 6, 7, 10, 12, 23, 29, 33, 45])