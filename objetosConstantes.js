// pessoa -> recebe um endereço de memória
// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Luana'
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }
// TypeError: Assignment to constant variable.

Object.freeze(pessoa)
// Congelou o objeto e não se consegue mais alterá-lo.

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
// Não se consegue alterar o objeto, adicionar atributos 
// e nem deletar características de um objeto constante.


console.log(pessoa.nome)
console.log(pessoa)