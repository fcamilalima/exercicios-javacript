function crescimento(altura1, altura2, taxaDeCrescimentoAnual1, taxaDeCrescimentoAnual2) {
    let alturaNova1 = 0
    let alturaNova2 = 0
    if (altura1 < altura2) {
        if (taxaDeCrescimentoAnual1 > taxaDeCrescimentoAnual2) {
            console.log('A criança menor ultrapassará a maior.')
        } else {
            console.log('A criança maior continuará ultrapassando a menor.')
        }
    } else if (altura1 > altura2) {
        if (taxaDeCrescimentoAnual1 < taxaDeCrescimentoAnual2) {
            console.log('A criança menor ultrapassará a maior.')
        } else {
            console.log('A criança maior continuará ultrapassando a menor.')
        }
    } else if (altura1 == altura2) {
        if (taxaDeCrescimentoAnual1 < taxaDeCrescimentoAnual2) {
            console.log('A criança 1 será menor que a criança 2.')
        } else if (taxaDeCrescimentoAnual1 > taxaDeCrescimentoAnual2) {
            console.log('A criança 1 será maior que a criança 2.')
        }
    }
    console.log(`Criança 1\nAltura: ${altura1}cm.\nTaxa de crescimento: ${taxaDeCrescimentoAnual1}cm.` +
        `\nCriança 2\nAltura: ${altura2}cm.\nTaxa de crescimento: ${taxaDeCrescimentoAnual2}cm.`)
}

crescimento(82.5, 103.1, 5.1, 4.0)
crescimento(109.1, 79.5, 3.9, 5.5)
crescimento(109.1, 79.5, 5.3, 4.1)