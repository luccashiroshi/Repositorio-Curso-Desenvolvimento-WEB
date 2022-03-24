jogos = '24 20 12 26 24 28'
pontos = jogos.split(' ').map(Number)

function analisaPontos(pontos) {
    let contRecord = 0
    let maior = pontos[0]
    for (i = 0; i < pontos.length; i++) {
        if (pontos[i] > maior) {
            maior = pontos[i]
            contRecord++
        }
    }
    const piorPontuacao = Math.min(...pontos)
    const piorJogo = pontos.indexOf(piorPontuacao)
    return console.log([contRecord, piorJogo + 1])
}

analisaPontos(pontos)