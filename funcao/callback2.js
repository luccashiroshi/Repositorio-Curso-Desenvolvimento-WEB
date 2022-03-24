const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// callback 1

function notaBaixa(nota) {
    if (nota < 7) {
        return console.log(nota)
    }
}
notas.forEach(notaBaixa)

// callback 2

notasBaixas = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas)

// callback 3

const notasBaixas1 = notas.filter(nota => nota < 7)
console.log(notasBaixas1)