const controllerPlanos = require('../controllers/planos')
const controllerDestinos = require('../controllers/destinos')
//Arquivo de rotas para o root e para o endereço home
module.exports = app => {

	app.get('/home', async (req, res) => {

		const planos = await controllerPlanos.readPlano()
		const origens = await controllerDestinos.readOrigens()
		const destinos = await controllerDestinos.readDestinos()
		res.status(200)
		res.render('index', 
			{
				planos: planos,
				origens: origens,
				destinos: destinos,
				host: appHost
			}
		)
	})

	app.get('/', (req, res) => {

		res.redirect('/home')
	})
}