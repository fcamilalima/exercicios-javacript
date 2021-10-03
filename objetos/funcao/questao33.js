function concatenacao(...argumentos) {
    let resultado = []
    for (let i = 0; i < argumentos.length; i++) {
        resultado = resultado.concat(argumentos[i])
    }
    return resultado
}

console.log(concatenacao([3, 2, 56, 12], ['Maia'], [1.2, 3.9, 3.1, 5.6]))