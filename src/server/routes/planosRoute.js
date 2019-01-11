const controller = require('../controllers/planos')


module.exports = app => {
//Arquivo de rotas para o endereço about
	app.get('/planos', async (req, res) => {

		const planos = await controller.readPlano()
		res.status(200)
		if (planos == undefined)
			res.redirect('/planos')
		else{
			res.render('planos', {
				planos : planos,
				host : appHost
			})
		}
	})

	app.get('/planos/list', async (req, res) => {

		const planos = await controller.readPlano()
		console.log(planos)
		res.json(planos)
	})

	app.post('/planos/create', async (req, res) => {

		const planos = await controller.createPlano(req)
		res.redirect('/planos')
	})

	app.delete('/planos/delete/:planoId', async (req, res) => {

		const planos = await controller.deletePlano(req)
		//console.log(planos)
		//res.redirect('/planos')
	})
}
