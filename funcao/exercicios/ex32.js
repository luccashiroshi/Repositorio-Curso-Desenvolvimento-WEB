function media(vetor) {
    let soma = 0
    for (i in vetor) {
        soma += vetor[i]
    }
    return (soma / vetor.length).toFixed(2)
}
let vetor = [5, 8, 7, 9, 6, 55, 20]
console.log(media(vetor))