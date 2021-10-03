// usando a notação literal de objetos é diferente de 
// notação JSON (Javascript Object Notation).

// Usando a notação literal.
const obj = {}
console.log(obj)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
// As variáveis estão visíveis com this.
// Encapsulamento de Javascript, precisa-se aprender esses 
// níveis de visibilidade.
// Node.js -> níveis de escopo nível global, nível do 
// próprio módulo e nível da função.
// No Browser e com as palavras let e const no Node.js, a 
// visibilidade somente no bloco ->  escopo global (window), 
// escopo da função e escopo de bloco.
function Produto(nome, preco, desc) {
    // com this esta variável está pública e visível. 
    this.nome = nome
    // preco e desc estão encapsulados, ou seja, não 
    // estão facilmente acessíveis.
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 8.15)
const p2 = new Produto('Notebok', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)