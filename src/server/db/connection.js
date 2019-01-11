const mongoose = require('mongoose')
const connect = url => {
	mongoose.Promise = global.Promise
	mongoose.connect(url, { useNewUrlParser: true })
}

module.exports = {connect}