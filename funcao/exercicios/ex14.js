function fruta(fruta) {
    switch(fruta){
        case 'maçã':
            return 'Não vendemos esta fruta aqui.'
        case 'kiwi':
            return 'Estamos com escassez de kiwis.'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo.'
        default:
            return 'ERROR'
    }
}
console.log(fruta('maçã'))
console.log(fruta('kiwi'))
console.log(fruta('melancia'))
console.log(fruta(5))