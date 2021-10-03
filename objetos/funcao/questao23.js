function boletim(codigoAluno, nota1, nota2, nota3) {
    let peso1 = 3
    let peso2 = 3
    let peso3 = 4

    let media = ((nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)).toFixed(2)
    let aprovacao = media >= 5 ? 'Aprovado' : 'Reprovado'
    console.log(`Código do Aluno: ${codigoAluno}\nMédia: ${media.replace('.', ',')}` +
        `\nNota 1 = ${nota1.toFixed(2).replace('.', ',')}\nNota 2 = ${nota2.toFixed(2).replace('.', ',')}` +
        `\nNota 3 = ${nota3.toFixed(2).replace('.', ',')}\nSituação: ${aprovacao}\n`)
}

boletim(100, 3.75, 4.55, 6)
boletim(101, 3.6, 4.3, 6.77)