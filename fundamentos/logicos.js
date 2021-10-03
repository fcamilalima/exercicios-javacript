/*
 * v e v -> v
 * v e f -> f
 * f e ? -> f
 *
 * v ou ? -> v
 * f ou v -> v
 * f ou f -> f
 *
 * v xor v -> f
 * v xor f -> v
 * f xor v -> v
 * f xor f -> f
 *
 * !v -> f
 * !f -> v
 */

function compras(trabalho1, trabalho2) {
    // Operador PIPE (|) O operador OU usa dois pipes (||).
    const comprarSorvete = trabalho1 || trabalho2

    const comprarTV50 = trabalho1 && trabalho2 // && é um 
    // operador curto-circuito. Bastando o primeiro termo ser
    // verdadeiro ou falso para determinar o resultado.

    const comprarTV32 = !!(trabalho1 ^ trabalho2) // Operador 
    // bitwise -> Opera bit a bit ou OU EXCLUSIVO.

    const manterSaudavel = !comprarSorvete //Operador unário

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
    // Novo recurso do ES2015. Não deixa de ser chave-valor. 
    // E criado os pares chave-valor de maneira implícita.
}

/*   return {
      comprarSorvete: comprarSorvete,
      comprarTV50: comprarTV50,
      comprarTV32: comprarTV32,
      manterSaudavel: manterSaudavel
  }
*/

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))