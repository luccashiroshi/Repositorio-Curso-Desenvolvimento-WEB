function venderCarro(modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan':
        case 'caminhonete':
        case 'motocicleta':
            return 'Tem certeza de que não pred=fere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}
console.log(venderCarro('hatch'))
console.log(venderCarro('sedan'))
console.log(venderCarro('caminhonete'))
console.log(venderCarro('motocicleta'))
console.log(venderCarro('bicicleta'))