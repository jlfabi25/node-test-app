const morgan = require('morgan')
const {getStandardFormat, getTokensFormat, formatSeparator} = require('./logging-formatter')

const registerTokens = (tokens = {}) => {
  Object.keys(tokens).forEach((key) => {
    morgan.token(key, tokens[key])
  })
}

module.exports = (options) => {
  options = options || {}

  let format = getStandardFormat()

  if (options.tokens) {
    registerTokens(options.tokens)
    format = `${format}${formatSeparator}${getTokensFormat(options.tokens)}`
  }

  const morganOptions = {}
  if (options.stream) {
    morganOptions.stream = options.stream
  }
  return morgan(format, morganOptions)
}
