soma = array => {
    let sum = 0
    array.forEach(e => {
        sum+=e
    })
    return sum
}

const a = [1, 2, 52, 7, 4, 6, 7]

console.log(soma(a))