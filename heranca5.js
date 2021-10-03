console.log(typeof String) // Resposta: function
console.log(typeof Array) // Resposta: function
console.log(typeof Object) // Resposta: function

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())
// Resposta: r3doC alocsE

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) // Resposta: 1
console.log(['a', 'b', 'c'].first()) // Resposta: a

// Muito cuidado! Simplesmente, não tente sobrescrever 
// (ou sobrecarregar) funções existentes. Não faça isso 
// a nível global, mesmo a linguagem proporcionando e 
// tendo uma flexibilidade alta e poder ser implementada. 
// Evite não violar as comportamentos contratuais, 
// estabelecido como comportamento padrão da linguagem.
String.prototype.toString = function () {
    return `Lascou tudo.`
}

console.log('Escola Cod3r'.reverse())
// Resposta:  .odut uocsaL