const express = require('express')
const todoRouter = require('./todo').routes
const pingRouter = require('./ping').routes

const router = express.Router({mergeParams: true})

router.use('/todo', todoRouter)
router.use('/ping', pingRouter)

module.exports = router
