const cotacao = require('./cotacao')

module.exports = app => {
//Socket do lado server que fica esperando a requisição do client o calculo da cotacao
	const _socket = app.get('io')

	_socket.on('connection', socket => {

		socket.on('calcular cotacao', async msg => {

			const resultado = await cotacao(msg)
			_socket.emit('retorno cotacao', resultado)
		})
	})
}