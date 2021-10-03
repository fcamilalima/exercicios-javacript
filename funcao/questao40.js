function conceitos(vetor) {
    let conceitos = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 0 && vetor[i] <= 4.9) {
            conceitos[i] = 'D'
        } else if (vetor[i] >= 5 && vetor[i] <= 6.9) {
            conceitos[i] = 'C'
        } else if (vetor[i] >= 7 && vetor[i] <= 8.9) {
            conceitos[i] = 'B'
        } else if (vetor[i] >= 9 && vetor[i] <= 10) {
            conceitos[i] = 'A'
        }
        console.log(`Nota: ${vetor[i]}\nConceito: ${conceitos[i]}\n`)
    }
}

conceitos([4.5, 2.3, 5.6, 8.9, 7.0, 6.9, 5.99, 10])
