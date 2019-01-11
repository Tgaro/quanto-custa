const _tarifa = require('./valorTarifa')
const _valorPlano = require('./valorPlano')

module.exports = async (req) => {
	//Função que apartir dos parâmetros informados pelo cliente retorna os cálculos dos valores com e sem o plano Telzir
	const origem = req.origem
	const destino = req.destino
	const tempo = req.tempo
	const plano = req.plano
	const minutosExcedentes = parseInt(tempo) - parseInt(plano)
	const tarifa = await _tarifa(origem, destino)
	console.log('Tarifa', tarifa)

	if(tarifa == undefined)
		return {
			valorSemPlano: '-', 
			valorComPlano: '-', 
			alerta: 'Não existe tarifa cadastrada para a origem x destino informada', 
			excedentes: minutosExcedentes,
			tarifa: tarifa
		}
	else
		return _valorPlano(tarifa, tempo, minutosExcedentes)
}
