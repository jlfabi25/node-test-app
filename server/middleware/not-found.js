const {NotFound} = require('http-errors')
module.exports = (req, res, next) => {
  next(new NotFound())
}
