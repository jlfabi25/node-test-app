'use strict'
require('dotenv').config({silent: true})
const appFactory = require('./app')
const config = require('./config')
const app = appFactory(config)

app.listen(app.get('port'), (error) => {
  if (error) {
    console.error('Unable to listen for connections', error)
    process.exit(10)
  }
  console.log(`express ${app.get('env')} server is listening on port ${app.get('port')}`)
})
