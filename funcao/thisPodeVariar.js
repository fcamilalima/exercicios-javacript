/*
 * Aula 74 - 'this' pode Variar
 *    O this é uma forma de referenciar um objeto atual
 *    daquela execução a partir de uma classe (function) que
 *    seria uma espécie de planta-baixa deste objeto.
 *    No browser:
 * function f1(){ console.log(this===window) }
 * f1()
 * true
 * -----------------------------------------------------
 * document.getElementsByTagName('body')[0].onclick = f1
 * false
 *    No exemplo anterior, pode haver mais de um body
 *    dentro de um iframe. Quando associado onclick
 *    a função f1() e o this variou nesta circunstância.
 * -----------------------------------------------------
 * function f2(){console.log(this===document)}
 * f2()
 * false
 *
 * document.getElementsByTagName('body')[0].onclick = f2
 * false
 *
 * const body = document.getElementsByTagName('body')[0]
 * function f2(){console.log(this===body)}
 * document.getElementsByTagName('body')[0].onclick = f2
 * true
 * f2()
 * false -> this aponta para window e não para body.
 * -----------------------------------------------------
 * const f3 = () => console.log(this === window)
 *
 *    this léxico (contexto léxico) é o contexto no qual
 *    a função foi definida.
 *
 *    this NUNCA VARIA se a função de criação for uma arrow
 *    function.
 *
 *    this VARIA se for chamada dentro de uma função
 *    criada com function.
 *
 *    Numa função criada com function, o this
 *    não irá variar a partir do uso de uma função
 *    chamada bind.
 *
 *
 * f3()
 * true
 * document.getElementsByTagName('body')[0].onclick = f3
 * true
 * f3()
 * true
 * */

