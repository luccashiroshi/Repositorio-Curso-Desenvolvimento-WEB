const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')

produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(saudacao('Luccas'))

app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

app.post('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatório: ${req.query.completo == true ? "completo" : "incompleto"} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })
    // req.on('end', function(){
    //     res.send(corpo)
    // })
    res.send(req.body)

})

app.get("/cliente/:id", (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get("/opa", (req, res, next) => {
    console.log('Durante...')
    res.json({
        data: [
            { id: 7, name: 'Ana', position: 1 },
            { id: 13, name: 'Bia', position: 2 },
            { id: 54, name: 'Carlos', position: 3 },
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    next()

    // res.send("Estou bem!")

    // res.json({
    //     name: 'Ipad 32Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    // res.json([
    //     {id: 7, name: 'Ana', position: 1},
    //     {id: 13, name: 'Bia', position: 2},
    //     {id: 54, name: 'Carlos', position: 3},
    // ])
})

app.use("/opa", (req, res) => {
    console.log('Depois...')
})

app.listen(3000, () => {
    console.log('executando backend...')
})