function diaUtil(dia) {
    switch (dia) {
        case 1: case 7:
            console.log(`Fim de  semana.`)
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log(`Hoje é dia de útil.`)
            break
        default:
            console.log(`Número inválido.`)

    }
}

diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)