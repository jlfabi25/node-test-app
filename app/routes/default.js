'use strict'
const router = require('express').Router()
const standardResponse = require('../middleware/response-standard')
const requestDuration = require('../middleware/request-duration')
const logger = require('../utils/logger')
const todoRouter = require('./todo')

module.exports = router

// configure middleware
router.use(requestDuration.setOperationStartTime)
router.use(standardResponse.createStandardReponse)

router.get('*', (req, res, next) => {
  logger.logInfo(req, res)
  res.status(404)
  next()
})

router.put('*', (req, res, next) => {
  logger.logInfo(req, res)
  res.status(404)
  next()
})

router.get('/ping', (req, res, next) => {
  res.locals.standardResponse.data = 'pong'
  res.status(200)
  next()
})

router.use('/todo', todoRouter)

router.use(requestDuration.setOperationEndTime)
