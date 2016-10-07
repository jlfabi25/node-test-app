'use strict'
require('dot-env')
const logger = require('./utils/logger')

const express = require('express')
const defaultRouter = require('./routes/default')
const viewRouter = require('./routes/index')
const mongo = require('mongodb')
const monk = require('monk')
const db = monk('localhost:27017/db')

const path = require('path')

const bodyParser = require('body-parser')

module.exports = (config) => {
  const app = express()

  // view engine setup
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'jade')

  // set app config
  app.set('port', config.express.port)

  app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, 'public')))

    // Make our db accessible to our router
  app.use(function (req, res, next) {
    req.db = db
    next()
  })

  // configure default router
  app.use('/api', defaultRouter)

  // configure view routes
  app.use('/', viewRouter)
  app.use((req, res) => {
    logger.logInfo(req, res)
    res.json(res.locals.standardResponse)
  })
  app.use((err, req, res, next) => {
    if (res.locals.standardResponse !== undefined) {
      res.locals.standardResponse.error = err
    }
    logger.logError(err, req)
    res.status(500).json(res.locals.standardResponse)
  })

  return app
}
