function gerarPlano(idade) {
    let intervalo = defineFaixa(idade)
    switch (intervalo) {
        case 1:
            return `R$${100 + 80}`
            case 2:
            return `R$${100 + 50}`
            case 3:
            return `R$${100 + 95}`
            case 4:
            return `R$${100 + 130}`
    }

}

function defineFaixa(idade) {
    if (idade < 10) {
        return 1
    } else if (idade >= 10 && idade <= 30) {
        return 2
    } else if (idade > 30 && idade <= 60) {
        return 3
    } else if (idade > 60) {
        return 4
    }
}

console.log(gerarPlano(9))
console.log(gerarPlano(10))
console.log(gerarPlano(31))
console.log(gerarPlano(61))