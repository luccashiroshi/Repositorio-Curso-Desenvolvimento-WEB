function simboloMais (qnt) {
    let array = []
    for (i=0;i<qnt; i++){
        array.push('+')
    }
    return array.join('')
}
console.log(simboloMais(2))