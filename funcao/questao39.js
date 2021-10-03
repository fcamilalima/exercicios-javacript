function trocaVetor(vetorA, vetorB) {
    for (let i = 0; i < vetorB.length; i++) {
        vetorA[vetorB.length + i] = vetorB[i]
    }

    for (let j = 0; j < vetorB.length; j++) {
        vetorB[j] = vetorA[j]
    }

    for (let k = 0; k < vetorB.length; k++) {
        vetorA[k] = vetorA[k + vetorB.length]
    }

    for (let l = 0; l <= vetorB.length; l++) {
        if (vetorA.length > vetorB.length) {
            vetorA.pop()
        }
    }
    console.log(vetorA, vetorB)
}

trocaVetor([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])