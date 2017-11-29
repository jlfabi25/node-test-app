const todoModel = require('./todo-model')
const {ToDoNotFoundError} = require('./errors')
const _ = require('ramda')

var todos = []

const get = (id) => {
  var todo = _.find(_.whereEq({id: id}), todos)
  if (!todo) {
    return Promise.reject(new ToDoNotFoundError(id))
  }
  return Promise.resolve(todo)
}

const create = (todo) => {
  var newTodo = todoModel.create(todo)
  todos.push(newTodo)
  return Promise.resolve(newTodo.id)
}
module.exports = {get, create}
