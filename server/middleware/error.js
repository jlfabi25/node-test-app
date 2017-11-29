const logger = require('../utilities').errorlogger.logger()

module.exports = (err, req, res, next) => {
  const errorStatus = err.status || 500

  if (process.env.NODE_ENV !== 'test') {
    const options = {
      ErrorCode: err.code || errorStatus,
      message: JSON.stringify(err.message)
    }
    logger.error(options)
  }

  res.status(err.status || 500)
  res.json(err)
}
