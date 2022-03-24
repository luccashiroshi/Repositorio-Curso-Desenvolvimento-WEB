multiplic = (a, b) => {
    let resultado = 0
    for (i = 0; i < a; i++) {
        resultado += b
    }
    return resultado
}

console.log(multiplic(5, 5))
console.log(multiplic(5,1))