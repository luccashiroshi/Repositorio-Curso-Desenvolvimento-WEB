formataValor = valor => {
    valorFormatado = valor.toFixed(2).toString().replace('.', ',')
    console.log(`R$${valorFormatado}`)
}

formataValor(0.30000000000000004)