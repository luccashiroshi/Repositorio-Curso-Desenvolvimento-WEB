function calcula(x = 1, y = 1, operador) {
    switch (operador) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return (x / y).toFixed(2)
        default:
            return 'Operação Inválida'
    }
}

console.log(calcula(10,5,'+'))
console.log(calcula(10,5,'-'))
console.log(calcula(10,5,'*'))
console.log(calcula(10,5,'/'))