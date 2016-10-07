'use strict'

const StandardResponse = require('../utils/standard-response').default
const config = {}

exports.createStandardReponse = (req, res, next) => {
  res.locals.standardResponse = new StandardResponse(config)
  res.locals.standardResponse.statusCode = 0
  next()
}
