const { Todos } = require("../models");
const moment = require("moment");

const Time = moment.utc().format("YYYY-MM-DD HH:mm:ss");

const getTodos = (req, res) => {
  Todos.find({}).then((data) => {
    res.status(200).json({
      data,
    });
  });
};

const addTodos = (req, res) => {
  req.body.dueDate = moment(req.body.dueDate).format("MM/DD/YYYY").toString();
  Todos.create(req.body).then((data) => {
    res.status(200).json({
      data,
    });
  });
};

const deleteTodo = (req, res) => {
  Todos.findOneAndDelete({ _id: req.body.id }).then((data) => {
    res.status(200).json({
      data,
    });
  });
};

const updateTodo = (req, res) => {
  const { id, completed, title, description, dueDate, priority } = req.body;
  Todos.findOneAndUpdate(
    { _id: id },
    {
      completed,
      title,
      description,
      dueDate,
      priority,
      modifiedOn: Time,
    },
    { new: true },
    (err, result) => {
      if (err) {
        res.status(410).json({
          data: err,
        });
      } else {
        res.status(200).json({
          data: result,
        });
      }
    }
  );
};

const filterTodo = (req, res) => {
  Todos.find({
    priority: req.body.priority,
  }).then((data) => {
    res.status(200).json({
      data,
    });
  });
};

module.exports = {
  filterTodo,
  updateTodo,
  addTodos,
  deleteTodo,
  getTodos,
};
