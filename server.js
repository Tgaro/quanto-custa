'use strict'

const port = process.env.PORT || 3031
const app = require('./src/server/app')
const server = app.listen(port, () => { console.log(`Server's listening on port ${port}`) })
const socketListenner = require('./src/server/utils/socketListenner')
const io = require('socket.io').listen(server)
const db = require('./src/server/db/connection')

global.appHost = 'http://localhost:3031'
global.mongoHost = process.env.MONGOLAB_URI

db.connect(mongoHost)

app.set('io', io)
socketListenner(app)

module.exports = {server, app} 

