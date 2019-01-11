const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server').server
const should = chai.should()
chai.use(chaiHttp)

describe('Portal telzir FaleMais', () => {

	it('Deve retornar a página principal do portal FaleMais da telzir', (done) => {

		chai.request(server)
			.get('/home')
			.end((err, res) => {

				res.should.have.status(200)
				done()
			})
	})

	it('Deve redirecionar para a principal página do portal FaleMais da telzir', (done) => {

		chai.request(server)
			.get('/')
			.end((err, res) => {

				res.should.have.status(200)
				done()
			})
	})

	it('Deve retornar a página Sobre do portal FaleMais da telzir', (done) => {

		chai.request(server)
			.get('/about')
			.end((err, res) => {

				res.should.have.status(200)
				done()
			})
	})

	it('Deve retornar página não encontrada', (done) => {

		chai.request(server)
			.get('/other')
			.end((err, res) => {

				res.should.have.status(404)
				done()
			})
	})
})