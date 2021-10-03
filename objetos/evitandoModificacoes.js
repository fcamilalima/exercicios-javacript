// Object.preventExtensions
// Não consegue adicionar novos atributos para este objeto.
// O objeto não estará congelado como Object.freeze.
// Permite você alterar os dados e deletar atributos, 
// não permite adicionar atributos. 
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

// Testa se o objeto foi criado com Object.preventExtensions 
// ou não.
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal Object.isSealed
// Não consegue adicionar novos atributos, excluir
// atributos. Porém, consegue modificar os atributos 
// que já existem.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed)

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes