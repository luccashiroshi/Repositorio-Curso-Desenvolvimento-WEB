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

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)
console.log(resultado)