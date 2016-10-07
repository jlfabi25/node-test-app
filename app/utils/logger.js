'use strict'

const debug = require('debug')('todo-logger')

const getTime = () => {
  return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
}

exports.logInfo = (req, res) => {
  debug(`${
    getTime()
    } || Thread= || System=todo-apps || Operation=${
    req.url
    }.${
    req.method
    } || StartTime=${
    res.locals.startTime.toISOString()
    } || DurationMs=${
    res.locals.elapsedTime / 1000000
    } || App=ToDo || HostName=${
    req.headers.host
    } `)
}

exports.logError = (err, req) => {
  debug(`${
    getTime()
    } || Thread= || System=todo-apps ||  Message=${
    err.stack
    } || HostName=${
    req.headers.host
    } || ErrorId= || Alert=N`)
}
