const express = require('express')
const tasksController = require('./controllers/taskController')
const taksMiddleware = require('./middlewares/tasksMiddleware')
const router = express.Router()

router.get('/tasks', tasksController.getAll)
router.post('/tasks', taksMiddleware.validateBody, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id',taksMiddleware.validateBody, tasksController.updateTask)


module.exports = router