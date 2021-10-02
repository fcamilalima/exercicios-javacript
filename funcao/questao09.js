function notas(nota) {
    let quocienteDe5 = Math.floor(nota / 5)
    let multiploDe5 = (quocienteDe5 + 1) * 5
    let diferenca = multiploDe5 - nota

    if (diferenca < 3) {
        console.log(diferenca)
        nota = multiploDe5
    }

    if (nota >= 40) {
        return console.log(`Nota: ${nota}.\nDiferenca: ${diferenca}\nQuociente: ${quocienteDe5}\nAprovado!\n==================`)
    } else if (nota < 40) {
        return console.log(`Nota: ${nota}.\nDiferenca: ${diferenca}\nQuociente: ${quocienteDe5}\nReprovado!\n==================`)
    }
}

notas(32)
notas(64)
notas(38)
notas(84)
notas(37)