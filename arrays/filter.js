const produtos = [{
        nome: 'Notebook',
        preco: 2599,
        fragil: true
    },
    {
        nome: 'Copo de vidro',
        preco: 10.52,
        fragil: true
    },
    {
        nome: 'Copo de plástico',
        preco: 5.65,
        fragil: false
    },
    {
        nome: 'Iphone XR Pro',
        preco: 5400,
        fragil: true
    }
]

console.log(produtos.filter(function (p) {
    return p.fragil
}))

const caro = p => p.preco > 1000

console.log(produtos.filter(caro))