const io = require('socket.io-client')
const cotacao = require('../src/server/utils/cotacao')
const chai = require('chai')
const expect = chai.expect

describe('Conexão com websocket', async () => {
	
	const client = await io.connect('http://localhost:3031')
	const socket = require('../server').app.get('io')

	it('Deve conectar e enviar mensagem', done => {

		client.on('connect', () => {

			request =  {
				origem : '011',
				destino : '017',
				plano : '60',
				tempo : '80'
			}

			client.emit('calcular cotacao', request)
			done()
		})
	})
		
	it('Deve receber mensagem do websocket no server' , () => {

		client.on('calcular cotacao', async msg => {

			expect(typeof msg).to.equal('object')
			expect(msg.origem).to.equal('011')
			expect(msg.destino).to.equal('017')
			expect(msg.plano).to.equal('60')
			expect(msg.tempo).to.equal('80')
			const resultado = await cotacao(msg)
			socket.emit('retorno cotacao', resultado)		
		})
	})

	it('Deve receber mensagem no client' , () => {

		client.on('retorno cotacao', valores => {

			expect(typeof valores).to.equal('object')
			expect(valores.alerta).to.equal(null)
			expect(valores.valorComPlano).to.equal(parseFloat(37.40).toFixed(2))
			expect(valores.valorSemPlano).to.equal(parseFloat(136.00).toFixed(2))	
		})
	})
})