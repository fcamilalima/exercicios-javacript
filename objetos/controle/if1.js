function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1) // Resposta: Aprovado com 8.1
soBoaNoticia(6.1) // Resposta:

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // Resposta: 
seForVerdadeEuFalo(null) // Resposta:
seForVerdadeEuFalo(undefined) // Resposta:
seForVerdadeEuFalo(NaN) // Resposta:
seForVerdadeEuFalo('') // Resposta:
seForVerdadeEuFalo(0) // Resposta:
// O único número que terá o retorno falso e não é considerado
// um valor.

seForVerdadeEuFalo(-1) // Resposta: É verdade... -1
seForVerdadeEuFalo(' ') // Resposta: É verdade...  
seForVerdadeEuFalo('?') // Resposta: É verdade... ?
seForVerdadeEuFalo([]) // Resposta: É verdade...  
seForVerdadeEuFalo([1, 2]) // Resposta: É verdade... 1, 2
seForVerdadeEuFalo({}) // Resposta: É verdade... [object Object]