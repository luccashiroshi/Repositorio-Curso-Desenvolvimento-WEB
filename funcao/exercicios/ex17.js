function calculaAumento(plano, salario = 0) {
    switch (plano) {
        case 'A':
            return salario * 1.1
        case 'B':
            return salario * 1.15
        case 'C':
            return salario * 1.2
        default:
            return 'Plano Inválido'
    }
}
console.log(calculaAumento('A', 1000))
console.log(calculaAumento('B', 1000))
console.log(calculaAumento('C', 1000))
console.log(calculaAumento('D', 1000))