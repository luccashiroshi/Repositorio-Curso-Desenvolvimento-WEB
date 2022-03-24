function Pessoa(nome = 'Anônimo') {
    this.nome = nome
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

p1 = new Pessoa("Luccas")
p1.falar()
console.log(p1.nome)