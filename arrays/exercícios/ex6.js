inverso = valor => {
    if (typeof(valor) == 'boolean'){
        return console.log(!valor)
    }
    else if(!isNaN(valor)){
        return console.log(valor * -1)
    } else return console.log('booleano ou número esperados, mas o parâmetro é do tipo', typeof(valor))
}
inverso(true)
inverso(20)
inverso('abc')