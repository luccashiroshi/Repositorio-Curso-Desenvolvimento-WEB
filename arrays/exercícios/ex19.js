calcularMedia = array => {
    let sum = 0
    array.forEach(e => {
        sum += e
    })
    return console.log(sum / array.length)
}

calcularMedia([0, 10]) 
calcularMedia([1, 2, 3, 4, 5])