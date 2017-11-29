class ToDoNotFoundError extends Error {
  constructor (id) {
    super(`Todo ${id} Not Found`)
    Error.captureStackTrace(this, ToDoNotFoundError)
  }
}

module.exports = {ToDoNotFoundError}
