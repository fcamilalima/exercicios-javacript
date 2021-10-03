/* Aula 64 - Usando a Estrutura SWITCH.  */

const imprimirResultado = function (nota) {
    // O switch funciona para múltiplas opções.
    // Switch não é uma expessão relacional. 
    // Não retorna verdadeiro ou falso.

    switch (Math.floor(nota)) {
        case 10: // Caso a nota seja 10 ou 9 mostrará a mensagem 
        case 9: // Quadro de Honra. Comportamento fall-through. 
            // Todos os cases serão executados pois não existe 
            // uma palavra fall-through break.
            // O switch é utilizado com números inteiros.
            console.log('Quadro de Honra!')
            break
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação!')
            break
        case 3: case 2: case 1: case 0:
            // case 3, 2, 1, 0: Sintaxe inválida!
            // case 3 - 0: //Sintaxe inválida!
            console.log('Reprovado!')
            break
        default:
            console.log('Nota inválida!')
        // Não se é forçado e obrigatório o uso do default no fim.
    }
}

imprimirResultado(10) // Resposta: Quadro de Honra!
imprimirResultado(8.9) // Resposta: Aprovado!
imprimirResultado(6.55) // Resposta: Recuperação!
imprimirResultado(0) // Resposta: Reprovado!
imprimirResultado(-1) // Resposta: Nota Inválida!
imprimirResultado(11) // Resposta: Nota Inválida!