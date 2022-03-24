function contaNum(vetor) {
    let inside = 0
    for (i in vetor) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            inside++
        }
    }  
    return console.log(`${inside} números estão dentro do intervalo`)
}

let vetor = [0, 2, 5, 8, 12, 13, 47, 446, 24, 25, 30, 22, 19]
contaNum(vetor)