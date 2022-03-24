despesasTotais = array => {
    let total = 0
    for (i in array) {
        total += array[i].preco
    }
    return console.log(total)
}
despesasTotais([{
        nome: "Jornal online",
        categoria: "Informação",
        preco: 89.99
    },
    {
        nome: "Cinema",
        categoria: "Entretenimento",
        preco: 150
    }
]) // retornará 239.99