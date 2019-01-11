const mongoose = require('mongoose')

const planos = new mongoose.Schema({
	id : {
		type : Number
	},
	desconto : {
		type : Number
	},
	plano : {
		type: String
	}
})

const model = mongoose.model('planos', planos)

module.exports = model