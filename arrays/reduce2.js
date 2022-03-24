const alunos = [{
    nome: 'Luccas',
    nota: 7.3,
    bolsista: false
},
{
    nome: 'Maria',
    nota: 10,
    bolsista: true
},
{
    nome: 'Carlos',
    nota: 6.4,
    bolsista: false
},
{
    nome: 'Natanael',
    nota: 9.5,
    bolsista: false
},
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))