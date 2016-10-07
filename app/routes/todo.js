'use strict'

const express = require('express')
const todoservice = require('../services/todo-service')
const router = express.Router()

router.route('*')
  .post((req, res, next) => {
    const serviceCalls = []
    serviceCalls.push(todoservice.Add())
    return Promise.all(serviceCalls)
      .then((results) => {
        // TODO check for source then return
        if (results[0].error !== undefined) {
          res.status(results[0].error.httpStatus)
          res.locals.standardResponse.data = results
        } else {
          res.status(202)
          res.locals.standardResponse.data = results
        }
        next()
      }).catch(next)
  })

router.route('*')
  .get((req, res, next) => {
    var db = req.db
    var collection = db.get('todos')
    collection.find({}, {}, function (e, results) {
      res.locals.standardResponse.data = results
    })
    next()
  })

module.exports = router
