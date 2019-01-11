const mongoose = require('mongoose')

const destinos = new mongoose.Schema({
	id : {
		type : Number
	},
	origem : {
		type : String
	},
	destino : {
		type: String
	},
	tarifa : {
		type: Number
	}
})

const model = mongoose.model('destinos', destinos)

module.exports = model