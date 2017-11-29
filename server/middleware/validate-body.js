const {BadRequest} = require('http-errors')
const Ajv = require('ajv')
module.exports = (
 schema,
 schemaOpts = {coerceTypes: true, useDefaults: true}) => (req, res, next) => {
   const ajv = new Ajv(schemaOpts)
   const isValid = ajv.validate(schema, req.body)
   if (!isValid) {
     var message = ajv.errors[0].message
     return next(new BadRequest({code: 400, error: message}))
   }
   return next()
 }
