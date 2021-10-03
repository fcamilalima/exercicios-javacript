/* Aula 62 - Usando a estrutura IF/ELSE. */
function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final')
}

teste1(6) // Resposta: Final
teste1(8) // Resposta: 8 Final

function teste2(num) {
    if (num > 7); { // Cuidado com o ponto e vírgula.
        // Não usar ele nas estruturas de controle. 
        console.log(num)
    }
}

teste2(6) // Resposta: 6
teste2(8) // Resposta: 8