function tamanho(vetor) {
    if (vetor.length != 5) {
        console.log('Digite outro vetor com cinco itens!')
    }
}

function empilhando(vetorPilha, vetorAdiciona) {
    tamanho(vetorPilha)
    tamanho(vetorAdiciona)

    for (let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i])
    }
    return console.log(vetorPilha)
}

empilhando([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])