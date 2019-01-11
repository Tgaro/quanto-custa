'use strict'

const port = process.env.PORT || 3031
const app = require('./src/server/app')
const server = app.listen(port, () => { console.log(`Server's listening on port ${port}`) })
const socketListenner = require('./src/server/utils/socketListenner')
const io = require('socket.io').listen(server)
const db = require('./src/server/db/connection')
process.env.MONGOLAB_URI = 'mongodb://test:test123@ds153824.mlab.com:53824/quantocusta'
global.appHost = 'http://quanto-fica.heroku-app.com'
global.mongoHost = process.env.MONGOLAB_URI

db.connect(mongoHost)

app.set('io', io)
socketListenner(app)

module.exports = {server, app} 

