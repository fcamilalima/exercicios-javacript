let funcaoSegundoGrau = (a, b, c) => {

    const delta = b ** 2 - 4 * a * c
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a)

    let raizes = []

    if (delta < 0) {
        console.log(`
        O valor da função ${a}.
        O valor de b é ${b}.
        O valor de c é ${c}.
        Não existem raízes.`)
    } else if (delta == 0) {
        raizes.push(raiz1)
        raizes.push(raiz2)
        console.log(`
        O valor da função ${a}.
        O valor de b é ${b}.
        O valor de c é ${c}.
        O valor de delta é ${delta}.
        A raiz primeira e segunda são iguais ${raizes}.`)
    } else if (delta > 0) {
        raizes.push(raiz1)
        raizes.push(raiz2)
        console.log(`
        O valor da função ${a}.
        O valor de b é ${b}.
        O valor de c é ${c}.
        O valor de delta é ${delta}.
        O valor das raízes são ${raizes}.`)
    }
}

funcaoSegundoGrau(1, 2, -3)
funcaoSegundoGrau(-1, 4, -3)
funcaoSegundoGrau(1, -2, 1)
funcaoSegundoGrau(2, 3, 4)