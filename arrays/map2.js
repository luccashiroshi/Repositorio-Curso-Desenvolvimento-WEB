const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Lápis", "preco": 0.50}',
    '{"nome": "Caderno", "preco": 10.12}',
    '{"nome": "Caneta", "preco": 1.25}'
]

const paraObjeto = json => JSON.parse(json)
const getPreco = produto => produto.preco

let precos = carrinho.map(paraObjeto).map(getPreco)
console.log(precos)