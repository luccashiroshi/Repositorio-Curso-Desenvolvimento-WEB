const aprovados = ['Luccas', 'Rayane', 'Bruno', 'Clara']

aprovados.forEach(function (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
})
exibirAprovados = nome => console.log(nome)
aprovados.forEach(exibirAprovados) 