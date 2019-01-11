const controller = require('../controllers/destinos')

module.exports = async (origem, destino) => {
//Retorna o valor da tarifa para a origem e destino informada
	const destinos = await controller.readDestino()
	const tarifa = destinos.filter(value => value.origem == origem && value.destino == destino)
	console.log(tarifa, tarifa[0].tarifa)
	if(!!tarifa[0])
		return tarifa[0].tarifa
	else
		return undefined
}