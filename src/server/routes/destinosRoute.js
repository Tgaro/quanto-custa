const controller = require('../controllers/destinos')

module.exports = app => {
//Arquivo de rotas para o endereço about
	app.get('/destinos', async (req, res) => {

		const destinos = await controller.readDestino()
		res.status(200)
		if (destinos == undefined)
			res.redirect('/destinos')
		else{
			res.render('destinos', {
				destinos : destinos,
				host: appHost
			})
		}		
	})

	app.get('/destinos/list', async (req, res) => {

		const destinos = await controller.readDestino()
		res.json(destinos)
	})

	app.post('/destinos/create', async (req, res) => {

		const destinos = await controller.createDestino(req)
		res.redirect('/destinos')
	})

	app.delete('/destinos/delete/:destinoId', async (req, res) => {

		const destinos = await controller.deleteDestino(req)
		//res.redirect('/destinos')
	})
}