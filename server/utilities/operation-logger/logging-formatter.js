const formatSeparator = ' || '
const standardTokens = {
  'Operation': ':method :url HTTP/:http-version',
  'HttpStatus': ':status',
  'ContentLength': ':res[content-length]',
  'StartTime': ':date[iso]',
  'DurationMs': ':response-time ms',
  'Useragent': ':user-agent'
}
const getStandardFormat = () => {
  return Object.keys(standardTokens).map((key) => `${key}=${standardTokens[key]}`).join(formatSeparator)
}

const getTokensFormat = (obj = {}) => {
  return Object.keys(obj).map((key) => `${key}=:${key}`).join(formatSeparator)
}

module.exports = {
  getStandardFormat,
  getTokensFormat,
  formatSeparator
}
