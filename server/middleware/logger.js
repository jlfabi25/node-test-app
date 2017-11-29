const oprationLogger = require('../utilities/operation-logger').logger

module.exports = opts => {
  if (process.env.NODE_ENV !== 'test') {
    return oprationLogger(opts)
  }
  return (req, res, next) => {
    next()
  }
}
