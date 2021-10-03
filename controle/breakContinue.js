/*
 * Aula 60 - Usando Break/Continue
 * estrutura break: influencia dentre de uma laço for e do laço
 * while e de uma estrutura switch. Não influencia na estrtura if.
 * estrutura continue: influencia na estrutura for e while.
 * O uso de break e continue é desencorajado pois estimula o
 * desvio de fluxo na aplicação, assim como a estrututra de rótulo.
 * */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // break não age sobre o bloco if, mas o 
        // bloco mais próximo de break. Nesta situação, o 
        // bloco for.
    }
    console.log(`x[${x}] = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`y[${y}] = ${nums[y]}`)
}

externo: for (a in nums) { //externo é um rótulo e fica vinculado
    //  a um laço for. É usada conjuntamente com o break quando se 
    // necessita saltar para um bloco mais externo que o bloco 
    // mais próximo com o uso do break sozinho realiza.
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par[${a}][${b}]`)
    }
}

/*
 * Não utilize estruturas que desviam do fluxo estruturado e
 * sequencial. Não abuse, principalmente, dos rótulos.
 * */