function buscarString(palavra1, palavra2) {
    if (palavra1.length < palavra2.length) {
        if (palavra2.indexOf(palavra1) > 0) {
            return true
        } else if (palavra2.indexOf(palavra1) == -1) {
            return false
        }
    } else if (palavra1.length > palavra2.length) {
        if (palavra1.indexOf(palavra2) > 0) {
            return true
        } else if (palavra1.indexOf(palavra2) == -1) {
            return false
        }
    }
}

console.log(buscarString('w', 'perigosa'))
console.log(buscarString('go', 'perigosa'))
console.log(buscarString('perigosa', 'sa'))
console.log(buscarString('perigosa', 'k'))