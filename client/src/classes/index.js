// If you dont have mongodb you can configure the complete statemgmt here ... in service > todos
class TodoApp {
  constructor() {
    this.todos = [];
  }

  batchInsert(todos) {
    if (Array.isArray(todos)) {
      this.todos = this.todos.concat(todos);
      return todos;
    }
  }

  addTodos(todo) {
    if (todo !== null && typeof todo === "object") {
      return this.todos.push(todo);
    }
  }

  updateTodo(todo) {
    if (todo !== null && typeof todo === "object") {
      let upIdx = this.todos.findIndex((t) => t._id === todo._id);
      if (upIdx !== -1) {
        this.todos.splice(upIdx, 1);
        this.todos.splice(upIdx, 0, todo);
        return upIdx;
      }
    }
  }

  todos() {
    return this.todos;
  }

  deleteTodo(todo) {
    const rmIdx = this.todos.findIndex((t) => t._id === todo._id);
    if (rmIdx !== -1) {
      this.todos.splice(rmIdx, 1);
      return rmIdx;
    }
  }
}

const todo = new TodoApp();

const insertTodo = todo.addTodos({
  _id: 1,
});

const batchInsert = todo.batchInsert([
  {
    _id: 2,
  },
  {
    _id: 3,
  },
]);

const updateTodo = todo.updateTodo({
  _id: 2,
  name: "Akash",
});

const deleteTodo = todo.deleteTodo({
  _id: 3,
});
