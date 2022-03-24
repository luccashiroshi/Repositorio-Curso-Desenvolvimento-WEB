repetir = (valor, qnt) => {
    let array = []
    for (i = 0; i < qnt; i++){
        array.push(valor)
    }
    return array
}

console.log(repetir('Olá', 10))