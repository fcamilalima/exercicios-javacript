function progressaoAritmetica(a1, r, n) {
    let vetor = []
    let somatorio = 0
    for (let i = 0; i < n; i++) {
        vetor.push(a1 + (i * r))
    }
    somatorio = ((a1 + (a1 + (n - 1) * r)) * n) / 2
    return console.log(vetor, somatorio)
}

function progressaoGeometrica(n, a1, q) {
    let vetor = []
    let somatorio = 0
    for (let j = 0; j < n; j++) {
        vetor.push(a1 * q ** j)
    }
    somatorio = (a1 * (q ** n - 1)) / (q - 1)
    return console.log(vetor, somatorio)
}

progressaoAritmetica(1, 5, 5)
progressaoAritmetica(0, 2, 5)
progressaoGeometrica(7, 25, 5)