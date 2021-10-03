
function maiorEMenor(vetor) {
    let menor = vetor[0]
    let maior = vetor[0]
    vetor.forEach((numero) => {
        if (menor > numero) {
            menor = numero
        }
        if (maior < numero) {
            maior = numero
        }
        console.log(vetor)

    })

    return console.log(`O menor número é ${menor}.\nO maior número é ${maior}.`)
}

maiorEMenor([2, 20, 74, 4, 1, 12, 84, 100, 17, 29])