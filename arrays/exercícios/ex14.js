const obj = {
    nome: 'Luccas',
    idade: 17,
    peso: 61,
    altura: 175
}

function geraArray(objeto) {
    const resultado = []
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
    }
    
console.log(geraArray(obj))