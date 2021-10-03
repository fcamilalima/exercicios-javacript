const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `  // acento grave - back check é usado 
    Olá             //no template string.
    ${nome} !`
console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1 + 1} `)

const up = texto => texto.toUpperCase() /* Função Arrow */
console.log(`Ei... ${up('cuidado!')}`)
