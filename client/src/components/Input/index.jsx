import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Input,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Select from "react-select";
import { MdAdd } from "react-icons/md";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";

import { addTodos, filterTodos, getTodos } from "../../service/todos/action";

import todoSidebarImg from "../../img/sidebar_img.svg";

const priorityOptions = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

class TodoInput extends Component {
  state = {
    title: "",
    description: "",
    priority: "low",
    modal: false,
    startDate: new Date(),
  };

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handlePriorityChange = (event) => {
    this.setState({
      priority: event.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, priority, startDate } = this.state;
    this.props.addTodos({ title, description, priority, dueDate: startDate });
    if (title !== "") {
      this.setState({
        title: "",
        description: "",
        modal: false,
        priority: { value: "low", label: "Low" },
      });
    }
  };

  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleFilterTodos = (priority) => {
    if (priority === "all") {
      this.props.getTodos(priority);
    } else {
      this.props.filterTodos(priority);
    }
  };

  render() {
    const { title, description, priority, modal, startDate } = this.state;

    const { handleStatus } = this.props;

    return (
      <div className="todo__input-new">
        <div className="todo__sidebar">
          <img
            className="todo_sidebar-image"
            src={todoSidebarImg}
            alt="sidebar-img"
          />
          <Button className="todo__btn-add-new" onClick={this.toggle}>
            <MdAdd /> New task
          </Button>
          <div className="todo__date-filter">
            <p className="title">Status</p>
            <ul className="todo__date-filter-list">
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="all-tasks"
                  name="date-filter"
                  value="all-tasks"
                  onChange={() => handleStatus("allTasks")}
                />
                <label htmlFor="all-tasks">All tasks</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="pedning-tasks"
                  name="date-filter"
                  value="pending-tasks"
                  onChange={() => handleStatus("pending")}
                />
                <label htmlFor="pedning-tasks">Pending tasks</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="completed-tasks"
                  name="date-filter"
                  value="completed-tasks"
                  onChange={() => handleStatus("completed")}
                />
                <label htmlFor="completed-tasks">Completed tasks</label>
              </li>
            </ul>
          </div>
          <div className="todo__priority-filter">
            <p className="title">Priority</p>
            <ul className="todo__priority-filter-list">
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-all"
                  name="priority-filter"
                  value="all"
                  onChange={() => this.handleFilterTodos("all")}
                />
                <label htmlFor="priority-all">All</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-low"
                  name="priority-filter"
                  value="low"
                  onChange={() => this.handleFilterTodos("low")}
                />
                <label htmlFor="priority-low">Low</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-medium"
                  name="priority-filter"
                  value="medium"
                  onChange={() => this.handleFilterTodos("medium")}
                />
                <label htmlFor="priority-medium">Medium</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-high"
                  name="priority-filter"
                  value="high"
                  onChange={() => this.handleFilterTodos("high")}
                />
                <label htmlFor="priority-high">High</label>
              </li>
            </ul>
          </div>
        </div>
        <Modal
          size="lg"
          isOpen={modal}
          toggle={this.toggle}
          className={"todo__add-modal"}
        >
          <ModalHeader
            className={"py-3 bg-info text-white"}
            toggle={this.toggle}
          >
            Add Todos
          </ModalHeader>
          <ModalBody className={"px-4"}>
            <div className="form">
              <div className="form__form-group w-75">
                <span className="form__form-group-label typography-message">
                  Title
                </span>
                <div className="form__form-group-field">
                  <Input
                    type="text"
                    placeholder="title.."
                    required
                    value={title}
                    onChange={this.handleTitleChange}
                  />
                </div>
              </div>

              <div className="form__form-group w-75">
                <span className="form__form-group-label">Description</span>
                <div className="form__form-group-field">
                  <Input
                    placeholder="what to do.."
                    required
                    value={description}
                    onChange={this.handleDescriptionChange}
                  />
                </div>
              </div>

              <div className="form__form-group w-75">
                <span className="form__form-group-label">Due Date</span>
                <div className="form__form-group-field priority">
                  <DatePicker
                    className={"date-picker"}
                    dateFormat="yyyy/MM/dd"
                    selected={startDate}
                    onChange={this.handleDateChange}
                  />
                </div>
              </div>

              <div className="form__form-group w-75">
                <span className="form__form-group-label">Priority</span>
                <Select
                  options={priorityOptions}
                  onChange={this.handlePriorityChange}
                  defaultValue={priority}
                />
              </div>
            </div>
            <ModalFooter>
              <Button
                color="primary"
                className={"px-5"}
                onClick={this.handleSubmit}
              >
                Add
              </Button>
              <Button className={"px-5"} onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodos: (payload) => dispatch(addTodos(payload)),
  filterTodos: (payload) => dispatch(filterTodos(payload)),
  getTodos: () => dispatch(getTodos()),
});

export default connect(null, mapDispatchToProps)(TodoInput);
