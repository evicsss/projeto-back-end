const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Rayssa Santana',
        imagem: 'https://i.pinimg.com/564x/0b/41/30/0b413079098cf18b83681a41d9021e67.jpg',
        minibio: 'Artista, nadadora, desenvolvedora, poetisa'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://cdn.thedevconf.com.br/photos/de37463f6d783829acfed90835e6837c7f0076a2.jpg',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://www.infomoney.com.br/wp-content/uploads/2021/02/iana_chan-e1615560698977.jpg?fit=402%2C287&quality=50&strip=all',
        minibio: 'Fundadora da PrograMaria'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)