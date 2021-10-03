function planoDeTrabalho(plano, salario) {
    switch (plano) {
        case 'A':
            return console.log(salario + salario * 0.1)
        case 'B':
            return console.log(salario + salario * 0.15)
        case 'C':
            return console.log(salario + salario * 0.2)
        default:
            return console.log('Plano inválido!')
    }
}

planoDeTrabalho('A', 1200)
planoDeTrabalho('B', 1500)
planoDeTrabalho('C', 2000)
planoDeTrabalho('E', 2500)