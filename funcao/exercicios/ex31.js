let vetor = [0, 2, 5, -4, 30, -21, -1]

function getNegative(vetor) {
    let negative = 0
    for (i in vetor) {
        if (vetor[i] < 0) {
            negative++
        }
    }
    return console.log(negative)
}

getNegative(vetor)