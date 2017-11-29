const express = require('express')
const router = express.Router()
const todo = require('../../services').todo
const todoService = todo.service
const { ToDoNotFoundError } = todo.errors
const { NotFound } = require('http-errors')
const {validateBody} = require('../../middleware')
const postTodoSchema = require('./post.todo.schema')

router.get('/:id', (req, res, next) => {
  todoService.get(req.params.id)
   .then((todo) => {
     res.json(todo)
   })
   .catch((error) => {
     if (error instanceof ToDoNotFoundError) {
       return next(new NotFound(error.message))
     }

     return next(error)
   })
})
router.post('/', validateBody(postTodoSchema), (req, res, next) => {
  todoService.create(req.body)
   .then((id) => {
     res.status(201)
     res.json({
       id: id,
       links: [{
         rel: 'self',
         href: `/api/${id}`
       }]
     })
   })
   .catch((error) => {
     if (error instanceof ToDoNotFoundError) {
       return next(new NotFound(error.message))
     }

     return next(error)
   })
})

module.exports = router
