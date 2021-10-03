// novo recurso de ES2015.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // Uma forma simplificada 
// de tirar os atributos de uma estrutura. O operador 
//{a, b, c...} representa o operador destructuring para 
// desestruturar objetos.
console.log(nome, idade) // Resposta: Ana 5

const { nome: n, idade: i } = pessoa // O nome das variáveis 
// não precisam ser iguais ao dos atributos do objeto que 
// está sendo desestruturado.
console.log(n, i) // Resposta: Ana 5

// const { sobrenome, bemHumorada } = pessoa 
// As variáveis sobrenome e bemHumorada não existem como 
// atributos do objeto pessoa. Logo, esses atributos serão 
// caracterizados como UNDEFINED.

// console.log(sobrenome, bemHumorada) 
// Resposta: undefined 
// undefined

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)
// Resposta: undefined undefined

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
// Resposta: Rua ABC 1000 undefined

// const { conta: { ag, num } } = pessoa
// console.log(ag, num) 
// O atributo conta não existe e já consta como erro.
// Erro: Cannot read property 'ag' of defined.