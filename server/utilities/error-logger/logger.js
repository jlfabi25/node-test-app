const winston = require('winston')
const standardFormatter = require('./logger-formatter')

const createLogger = (options) => {
  options = options || {}

  return winston.createLogger({
    transports: getTransports(options)
  })
}

const getTransports = (options) => {
  if (options.transports) {
    const transports = []
    if (options.transports.find((transport) => { return transport === 'memory' })) {
      transports.push(getTransportWithDefaults(winston.transports.Memory))
    }
    if (options.transports.find((transport) => { return transport === 'console' })) {
      transports.push(getTransportWithDefaults(winston.transports.Console))
    }
    return transports
  } else {
    return [getTransportWithDefaults(winston.transports.Console)]
  }
}

const getTransportWithDefaults = (TransportType) => {
  return new (TransportType)({
    formatter: standardFormatter
  })
}

module.exports = createLogger
