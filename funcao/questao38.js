function numerosImpares(inicio = 0, fim = 100) {
    let impares = []
    let auxiliar = 0

    if (inicio > fim) {
        auxiliar = inicio
        inicio = fim
        fim = auxiliar
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 == 1) {
            impares.push(i)
        }
    }
    return console.log(impares)
}

numerosImpares(10, 70)
numerosImpares()
numerosImpares(85, 25)