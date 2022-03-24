function lerVetores(vetor) {
    let numImpares = 0
    let numPares = 0
    let i = 0
    for (i in vetor) {
        if (vetor[i] % 2 == 0) {
            numPares++
        } else numImpares++
    }
    return console.log(`Números Ímpares: ${numImpares}\nNúmeros Pares: ${numPares}`)
}

vetor = [0, 2, 5, 8, 12, 13, 47, 446]
lerVetores(vetor)