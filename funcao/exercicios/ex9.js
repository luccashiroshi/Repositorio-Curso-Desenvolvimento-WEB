function classificaNota(nota) {
    if (nota >= 38) {
        arredonda()
    }

    function arredonda() {
        nextNum = nota => {
            return Math.ceil(nota / 5) * 5
        }
        if (nextNum(nota) - nota < 3) {
            return notaArredondada = nextNum(nota)
        } else notaArredondada = nota
    }

    if (nota < 40) {
        console.log(`Nota: ${nota} - Aluno Reprovado!`)
    } else if (notaArredondada > 40) console.log(`Nota: ${notaArredondada} - Aluno Aprovado!`)
}
classificaNota(30)
classificaNota(38)
classificaNota(48)
classificaNota(51)
classificaNota(99)