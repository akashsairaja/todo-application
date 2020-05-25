const mongoose = require("mongoose");
const moment = require("moment");

const Time = moment.utc().format("YYYY-MM-DD HH:mm:ss");

const Todos = mongoose.model(
  "todos",
  new mongoose.Schema([
    {
      title: {
        type: String,
        required: true,
      },
      priority: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      dueDate: {
        type: Date,
        default: Time,
      },
      completed: {
        type: Boolean,
        default: false,
      },
      createdOn: {
        type: Date,
        default: Time,
      },
      modifiedOn: {
        type: Date,
        default: Time,
      },
    },
  ]),
  "todos"
);

exports.Todos = Todos;
