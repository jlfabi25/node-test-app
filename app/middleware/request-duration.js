'use strict'

const debug = require('debug')('request-duration')
const NANOSECONDS_PER_SECOND = 1e9
const SECONDS = 0
const NANOSECONDS = 1

exports.setOperationStartTime = (req, res, next) => {
  res.locals.startTime = new Date()
  res.locals.performanceStart = process.hrtime()
  debug('performanceStart', res.locals.performanceStart)
  next()
}

exports.setOperationEndTime = (req, res, next) => {
  res.locals.endTime = new Date()
  const end = res.locals.performanceEnd = process.hrtime(res.locals.performanceStart)
  res.locals.elapsedTime = end[ SECONDS ] * NANOSECONDS_PER_SECOND + end[ NANOSECONDS ]
  debug('performanceEnd', res.locals.performanceEnd)
  next()
}
