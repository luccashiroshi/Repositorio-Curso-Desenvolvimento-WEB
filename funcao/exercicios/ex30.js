let vetor = [0, 2, 5, 8, 12, 13, 47, 446, 24, 25, 30, 22, 19]

function maxMin(vetor) {
    let max = Math.max(...vetor)
    let min = Math.min(...vetor)
    return console.log('Maior:', max, 'Menor:', min)
}
maxMin(vetor)