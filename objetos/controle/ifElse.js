const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // Cuidado com este tipo de situação!
              // O indicado seria ter um tratamento de exceção.
            // 'Epa' não constitui uma nota.