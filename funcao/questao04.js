/*
 * Aula 112 - Lista de exercícios: Fundamentos,
 * Estruturas de controle e Funções
 *
 * 04) Crie uma função que irá receber dois valores,
 * o dividendo e o divisor. A função deverá imprimir o
 * resultado e o resto da divisão destes dois valores. 
 *
 */

const divisao = (dividendo, divisor) =>
    console.log(`Quociente = ${Math.floor(dividendo / divisor)}
Resto = ${dividendo % divisor}`)


divisao(5, 2)