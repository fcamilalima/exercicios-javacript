function feira(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log(`Não vendemos está fruta aqui.`)
            break
        case 'kiwi':
            console.log(`Estamos em escassez de kiwis.`)
            break
        case 'melancia':
            console.log(`Aqui está, são 3 reais o quilo.`)
            break
        default:
            console.log(`Opção inválida.`)
    }
}

feira('maçã')
feira('kiwi')
feira('melancia')
feira('melão')