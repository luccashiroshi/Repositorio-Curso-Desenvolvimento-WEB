const pilotos = ['Vettel', 'Alonso', 'Hamilton', 'Massa']
console.log(pilotos)

pilotos.pop() // remove ultimo elemento
console.log(pilotos)

pilotos.push('Botas') // adiciona ao array
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Albertt') // adiciona ao começo
console.log(pilotos)

pilotos.splice(2,0, 'Bottas', 'Massa') // adiciona e remove elementos
console.log(pilotos)

const pilotos2 = pilotos.slice(2) // gera novo array
console.log(pilotos2)