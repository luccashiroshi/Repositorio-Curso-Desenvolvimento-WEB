function par(array) {
    let array1 = []
    array.forEach(i => {
        let indice = array.indexOf(i)
        if (i % 2 == 0 && indice % 2 == 0) {
            array1.push(i)
        }
    })
    return console.log(array1)
}

par([10, 70, 22, 43]) // retornará [10, 22]
