function calculoAnuidade(mes, valor) {
    return console.log(`R$ ${(valor * (1 + 0.05) ** mes).toFixed(2).replace('.', ',')}`)
}

calculoAnuidade(1, 100)
calculoAnuidade(5, 120)
calculoAnuidade(12, 200)
calculoAnuidade(10, 100)