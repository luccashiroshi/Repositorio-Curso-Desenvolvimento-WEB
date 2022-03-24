removerPropriedade = (objeto, propriedade) => {
    let newObjeto = Object.assign({}, objeto)
    delete newObjeto[propriedade]
    return newObjeto
}

obj = {
    nome: 'Luccas',
    idade: 17,
    peso: 61,
    altura: 175
}

console.log(removerPropriedade(obj, 'altura'))