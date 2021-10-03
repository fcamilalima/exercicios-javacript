function cardapio(codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log(`Descrição: Cachorro Quente | Quantidade: ${quantidade} | Preço: R$ ${(quantidade * 3).toFixed(2).replace('.', ',')}`)
            break
        case 200:
            console.log(`Descrição: Hambúrguer Simples | Quantidade: ${quantidade} | Preço: R$ ${(quantidade * 4).toFixed(2).replace('.', ',')}`)
            break
        case 300:
            console.log(`Descrição: Cheeseburguer | Quantidade: ${quantidade} | Preço: R$ ${(quantidade * 5.5).toFixed(2).replace('.', ',')}`)
            break
        case 400:
            console.log(`Descrição: Bauru | Quantidade: ${quantidade} | Preço: R$ ${(quantidade * 7.5).toFixed(2).replace('.', ',')}`)
            break
        case 500:
            console.log(`Descrição: Refrigerante | Quantidade: ${quantidade} | Preço: R$ ${(quantidade * 3.5).toFixed(2).replace('.', ',')}`)
            break
        case 600:
            console.log(`Descrição: Refrigerante | Quantidade: ${quantidade} | Preço: R$ ${(quantidade * 2.8).toFixed(2).replace('.', ',')}`)
            break
    }
}

cardapio(100, 1)
cardapio(200, 3)
cardapio(300, 4)
cardapio(400, 4)
cardapio(500, 2)
cardapio(600, 5)