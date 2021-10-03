/* Aula 68 - Usando a estrutura FOR/IN. */
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) { // Faz varredura no array notas pelos índices.
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (atributo in pessoa) {
    // Para objetos, existem opções mais interessantes
    // de listagem.
    console.log(`${atributo} = ${pessoa[atributo]}`)
}