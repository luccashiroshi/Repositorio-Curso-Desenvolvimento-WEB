function geraPedido(id, qntd = 1) {
    switch (id) {
        case 100:
            return qntd * 3
        case 200:
            return qntd * 4
        case 300:
            return qntd * 5.5
        case 400:
            return qntd * 7.5
        case 500:
            return qntd * 3.5
        case 600:
            return qntd * 2.8
        default:
            return 'Produto não existente!'
    }
}
console.log(geraPedido(100, 2))
console.log(geraPedido(200, 3))
console.log(geraPedido(300, 2))
console.log(geraPedido(400, 1))
console.log(geraPedido(500, 6))
console.log(geraPedido(600, 5))