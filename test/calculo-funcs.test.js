const chai = require('chai')
const cotacao = require('../src/server/utils/cotacao')
const expect = chai.expect
let request

describe('Telzir calculos de plano', () => {

	it('Deve retornar um objeto com valores do plano e sem plano',  async () => {
		
		request =  {
			origem : '011',
			destino : '017',
			plano : '60',
			tempo : '80'
		}
		const result = await cotacao(request)
		expect(typeof result).to.equal('object')
		expect(result.alerta).to.equal(null)
		expect(result.valorComPlano).to.equal(parseFloat(37.40).toFixed(2))
		expect(result.valorSemPlano).to.equal(parseFloat(136.00).toFixed(2))
		expect(result.tarifa).to.equal(parseFloat(1.70))
	})

	it('Deve retornar um objeto com valor sem plano. Com plano deve ser 0',  async () => {
		
		request =  {
			origem : '011',
			destino : '016',
			plano : '30',
			tempo : '20'
		}
		const result = await cotacao(request)
		expect(typeof result).to.equal('object')
		expect(result.alerta).to.equal(null)
		expect(result.valorComPlano).to.equal(parseFloat(0.00).toFixed(2))
		expect(result.valorSemPlano).to.equal(parseFloat(38.00).toFixed(2))
		expect(result.tarifa).to.equal(parseFloat(1.90))
	})

	it('Deve retornar um objeto com alerta',  async () => {
		
		request =  {
			origem : '018',
			destino : '017',
			plano : '30',
			tempo : '100'
		}
		const result = await cotacao(request)
		expect(typeof result).to.equal('object')
		expect(result.alerta).to.not.equal(null)
		expect(result.valorComPlano).to.equal('-')
		expect(result.valorSemPlano).to.equal('-')
		expect(result.tarifa).to.equal(undefined)
	})
})