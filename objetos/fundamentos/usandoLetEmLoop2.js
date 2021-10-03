/* Uma função em Javascript é uma closure. 
 * Uma função tem consciencia de onde foi originária. */

const funcs = []
for (let i = 0; i < 10; i++) {
    funcs.push(
        function () {
            console.log(i)
        }
    )
}

funcs[2]() // Imprime o valor 2
funcs[6]() // Imprime o valor 6
funcs[8]() // Imprime o valor 8

