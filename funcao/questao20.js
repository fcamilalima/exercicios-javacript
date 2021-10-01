function restos(resto) {
    let resto50 = resto >= 50 && resto < 100 ? console.log(`${Math.floor(resto / 50)} notas de 50 reais. `) : 0
    let resto10 = resto >= 10 && resto < 50 ? console.log(`${Math.floor(resto / 10)} notas de 10 reais. `) : 0
    let resto5 = resto >= 5 && resto < 10 ? console.log(`${Math.floor(resto / 5)} notas de 5 reais. `) : 0
    let resto1 = resto >= 1 && resto < 5 ? console.log(`${Math.floor(resto / 1)} notas de 1 real. `) : 0
}

function cedulas(valor) {
    let res100 = (Math.floor(valor / 100)) > 0
    let res50 = (Math.floor(valor / 50)) > 0
    let res10 = (Math.floor(valor / 10)) > 0
    let res5 = (Math.floor(valor / 5)) > 0
    let res1 = (Math.floor(valor / 1)) > 0

    let acumulador = 0
    if (res100) {
        console.log(`${Math.floor(valor / 100)} notas de 100 reais. `)
        if (valor % 100 > 0) {
            return restos(valor % 100)
        }
    } else if (res50) {
        console.log(`${Math.floor(valor / 50)} notas de 50 reais. `)
        if (valor % 50 > 0) {
            return restos(valor % 50)
        }
    } else if (res10) {
        console.log(`${Math.floor(valor / 10)} notas de 10 reais. `)
        if (valor % 10 > 0) {
            return restos(valor % 10)
        }
    } else if (res5) {
        console.log(`${Math.floor(valor / 5)} notas de 5 reais. `)
        if (valor % 5 > 0) {
            return restos(valor % 5)
        }
    } else if (res1) {
        console.log(`${Math.floor(valor / 1)} notas de 1 real. `)
        if (valor % 1 > 0) {
            return restos(valor % 1)
        }
    }
}

cedulas(42)
console.log(cedulas(50))
console.log(cedulas(24))
console.log(cedulas(100))
console.log(cedulas(55))