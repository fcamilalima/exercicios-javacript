function carros(carro) {
    switch (carro) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Tem certeza que não prefere outro modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de imóvel aqui.')
    }
}

carros('hatch')
carros('sedan')
carros('motocicleta')
carros('caminhonete')
carros('bicicleta')