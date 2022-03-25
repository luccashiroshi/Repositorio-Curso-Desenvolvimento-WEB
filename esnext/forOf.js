for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promisse', { abordado: false }]
])

for (let assunto in assuntosMap){
    console.log(assunto)
}

for (let chave in assuntosMap.keys()){
    console.log(chave)
}

for (let valor in assuntosMap.values()){
    console.log(chave)
}

for (let [ch, vl] in assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s){
    console.log(letra)
}