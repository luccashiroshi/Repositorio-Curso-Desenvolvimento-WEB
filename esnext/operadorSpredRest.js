// operador ... rest(juntar)/spred(espalhar)
// usar rest como parametro de função

// usar spread com objeto
const funcionario = {nome: 'maria', salario: 12345.99}
const clone ={ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Letícia']
const grupoB = ['Maria', 'Rafaela', ...grupoA]

console.log(grupoB)