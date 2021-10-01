/*
 * Aula 112 - Lista de exercícios: Fundamentos,
 * Estruturas de controle e Funções
 * 
 *  01) Crie uma função que dado dois valores (passados como
 *      parâmetros) mostre no console a soma, subtração, 
 *      multiplicação e divisão desses valores.
 * 
 */

const soma = (a, b) => a + b
const subtracao = (a, b) => a - b
const multiplicacao = (a, b) => a * b
const divisao = (a, b) => a / b

const operacao = (c, d, operacao) => console.log(`${c} e ${d} = ${operacao(c, d)}.`)

operacao(2, 3, soma)
operacao(5, 3, subtracao)
operacao(4, 3, multiplicacao)
operacao(12, 4, divisao)

/*
 Resposta do Exercício - Questão 01

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)

*/