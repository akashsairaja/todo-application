const express = require('express');

const {getTodos, addTodos, deleteTodo, updateTodo, filterTodo} = require("../service");

const todoRouter = express.Router();


todoRouter.get('/api/todos', getTodos);
todoRouter.post('/api/todos', addTodos);
todoRouter.delete('/api/todos', deleteTodo);
todoRouter.put('/api/todos', updateTodo);
todoRouter.patch('/api/todos', filterTodo);


module.exports = todoRouter;