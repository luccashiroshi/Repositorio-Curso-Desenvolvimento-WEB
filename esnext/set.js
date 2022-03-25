// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('Flamengo')
times.add('Palmeiras')
times.add('Corinthians')
times.add('São Paulo')
times.add('São Paulo')

console.log(times)
console.log(times.size)
console.log(times.has('Palmeiras'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))
