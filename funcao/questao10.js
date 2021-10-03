function multiploDe3(nota) {
    let moduloDe3 = nota % 3
    if (moduloDe3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(multiploDe3(32))
console.log(multiploDe3(63))
console.log(multiploDe3(13))