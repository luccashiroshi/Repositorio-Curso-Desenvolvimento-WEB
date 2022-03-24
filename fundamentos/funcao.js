// função sem retorno

function imprimirSoma(a,b) {
    console.log(a+b)
}

imprimirSoma(2,3)

// função com retorno

function soma(a = 0, b = 0) {
    return a + b
}

console.log(soma(5, 6))

// armazenando uma função em uma variavel

const imprimirSoma2 = function (a,b) {
    console.log(a+b)
}
imprimirSoma2(5, 4)

// Armazenando uma função arrow em uma variavel

const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(8, 3))

// retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))