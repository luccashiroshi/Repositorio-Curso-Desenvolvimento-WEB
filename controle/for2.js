const notas = [6.7 , 8.2, 5.5, 10, 9.6, 4.2]

for( i in notas){
    console.log(`${i}. ${notas[i]}`)
}

const pessoa = {
    nome: 'Luccas',
    sobrenome: 'Hina',
    idade: 17,
    peso: 61
}

for(atributo in pessoa){
    console.log(atributo,'=', pessoa[atributo])
}