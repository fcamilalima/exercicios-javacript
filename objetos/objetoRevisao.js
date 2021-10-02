// coleção dinâmica de pares chave/valor.
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

// delete produto.preco
// delete produto['marca do produto']

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
// Acessar os dados de um objeto a partir de um algoritmo,
// de maneira reflexiva, fazendo uma introspecção no objeto.
// Maneira mais verbosa.
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)
// Acessar um atributo de um objeto nulo ou indefinido
// causa erro.
// Cannot read property 'length' of undefined