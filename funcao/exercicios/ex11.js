// 2020 ano bissexto
function bissexto(ano) {
    if (ano % 100 == 0 && ano % 400 == 0) {
        return console.log('True')
    } else if (ano % 100 != 0 && ano % 4 == 0) {
        return console.log('True')
    } else {
        return console.log('False')
    }
}

bissexto(2000)
bissexto(2024)
bissexto(2022)