function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Camisa', 80))
console.log(criarProduto('Notebook', 5080,99))