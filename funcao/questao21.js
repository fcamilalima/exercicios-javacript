function planoDeSaude(idade) {
    let preco = 100
    if (idade < 10) {
        console.log(`Preço do plano: R$ ${(preco += 80).toFixed(2).replace('.', ',')}\nIdade: ${idade}`)
    } else if (idade >= 10 && idade <= 30) {
        console.log(`Preço do plano: R$ ${(preco += 50).toFixed(2).replace('.', ',')}\nIdade: ${idade}`)
    } else if (idade > 30 && idade <= 60) {
        console.log(`Preço do plano: R$ ${(preco += 95).toFixed(2).replace('.', ',')}\nIdade: ${idade}`)
    } else if (idade > 60) {
        console.log(`Preço do plano: R$ ${(preco += 130).toFixed(2).replace('.', ',')}\nIdade: ${idade}`)
    }
}

planoDeSaude(15)
planoDeSaude(10)
planoDeSaude(63)
planoDeSaude(43)
planoDeSaude(27)