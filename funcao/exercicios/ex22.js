function calculaAnuidade(mes) {
    const anuidade = 100
    switch (mes) {
        case 1:
            return anuidade
        case 2:
            return anuidade * Math.pow((1 + 0.05), mes)
        case 3:
            return anuidade * Math.pow((1 + 0.05), mes)
        case 4:
            return anuidade * Math.pow((1 + 0.05), mes)
        case 5:
            return anuidade * Math.pow((1 + 0.05), mes)
        case 6:
            return anuidade * Math.pow((1 + 0.05), mes)
        case 7:
            return anuidade * Math.pow((1 + 0.05), mes)
        case 8:
            return anuidade * Math.pow((1 + 0.05), mes)
        case 9:
            return anuidade * Math.pow((1 + 0.05), mes)
        case 10:
            return anuidade * Math.pow((1 + 0.05), mes)
        case 11:
            return anuidade * Math.pow((1 + 0.05), mes)
        case 12:
            return anuidade * Math.pow((1 + 0.05), mes)

    }
}

console.log(calculaAnuidade(2))
console.log(calculaAnuidade(12))