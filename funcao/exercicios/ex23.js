function calculaMediaAluno(id, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => b - a)
    let mediaPond = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    if (mediaPond < 5) {
        return `Aluno: ${id}\nNotas:\n${nota1}\n${nota2}\n${nota3}\nMédia: ${mediaPond}\nReprovado!!`
    } else return `Aluno: ${id}\nNotas:\n${nota1}\n${nota2}\n${nota3}\nMédia: ${mediaPond}\nAprovado!!`
}

console.log(calculaMediaAluno(1, 3, 2, 4))
console.log(calculaMediaAluno(2, 6, 9, 10))