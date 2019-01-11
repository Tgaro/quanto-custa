const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const app = express()

//Utilizando os middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static('./src/client/public'))
//Setando o EJS como view engine e o caminho para acessar as views do projeto
app.set('view engine', 'ejs')
app.set('views', './src/client/views')
//Incluindo as rotas em APP	
consign()
	.include('./src/server/routes')
	.into(app)
//Para qualquer endereço que não esteja na rota, retornar 404
app.use((req, res) => {
    res.status(404).send('O endereço que você está procurando não existe');
})

module.exports = app

