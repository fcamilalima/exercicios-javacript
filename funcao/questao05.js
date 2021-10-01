/*
 * Aula 112 - Lista de exercícios: Fundamentos,
 * Estruturas de controle e Funções
 *
 * 05) Lidar com números em Javascript pode dar muita
 * dor de cabeça. Você já viu o que acontece quando faz
 * o seguinte comando pelo console: console.log(0.1 + 0.2);
 * O resultado será: 0.30000000000000004. Outra coisa
 * importante de observar, é o fato que o ponto é utilizado
 * no lugar da vírgula e vice-versa. Com isso, vamos fazer
 * um exercício simples para mostrar dinheiro sempre de uma
 * forma correta. Desenvolva uma função Javascript para que
 * ela receba um valor como 0.30000000000000004 e retorne
 * R$0,30 (observe a vírgula e o ponto).
 *
 */

function soma(a, b) {
    return console.log(('R$ ').concat(((a + b).toFixed(2)).replace('.', ',')))
}

soma(0.2, 0.4)