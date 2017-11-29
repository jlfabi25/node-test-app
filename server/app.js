const express = require('express')
const bodyParser = require('body-parser')
const middleware = require('./middleware')
const {routes} = require('./api')

module.exports = () => {
  const app = express()
  app.set('json spaces', 2)
  app.use(middleware.logger())
  app.use(bodyParser.json())
  app.use('/api', routes)
  app.use(middleware.notFound)
  app.use(middleware.error)
  return app
}
