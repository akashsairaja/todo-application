import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Card, CardBody, Input, Tooltip, Alert } from "reactstrap";

import moment from "moment";
import { MdDeleteForever } from "react-icons/md";

import { deleteTodos, updatedTodos } from "../../service/todos/action";

const ItemList = ({ todos }) => {
  const dispatch = useDispatch();

  const [tooltipOpen, setTooltipOpen] = useState("");

  const toggle = (id) => setTooltipOpen(id);

  const deleteTodo = (id) => dispatch(deleteTodos(id));

  const updateToCompleted = (id, payload) =>
    dispatch(
      updatedTodos({
        id,
        ...payload,
        completed: !payload.completed,
      })
    );

  if (!todos.length > 0) {
    return (
      <div className="d-flex- justify-content-center my-5 text-danger">
        <Alert color={"danger"} className="d-flex px-5">
          No Todos Added{" "}
        </Alert>
      </div>
    );
  }

  return todos.map(
    ({ completed, title, description, dueDate, priority, _id }) => (
      <Card
        key={_id}
        className={completed ? "todo__item-comleted my-2" : " my-2"}
      >
        <CardBody className="todo__item" key={_id}>
          <label
            htmlFor={title}
            onClick={() =>
              updateToCompleted(_id, {
                completed,
                title,
                description,
                dueDate,
                priority,
                _id,
              })
            }
            className="todo__label-checkbox"
          >
            <Input
              type="checkbox"
              className="todo__complete-toggle"
              defaultChecked={completed}
              required
            />
            <span className="checkbox-indicator" />
          </label>
          <div className="todo__info">
            <div className="todo__header">
              <h3>{title} </h3>
              <div className="todo__additional">
                <p className="todo__due-date">
                  Due date: {moment(dueDate).format("MM/DD/YYYY").toString()}
                </p>

                <span className="todo__priority">Priority:</span>
                <span
                  className={
                    "cursor-pointer todo__priority-indicator " + priority
                  }
                  id={"todo_tooltip" + _id}
                />
                <Tooltip
                  className={"cursor-pointer"}
                  target={"todo_tooltip" + _id}
                  placement="right"
                  isOpen={tooltipOpen === "todo_tooltip" + _id}
                  toggle={() => toggle("todo_tooltip" + _id)}
                >
                  {priority}
                </Tooltip>
              </div>
            </div>

            <div className="todo__content">
              <div className="todo__description">{description}</div>
              <button className="todo__delete-btn cursor-pointer" type="button">
                <MdDeleteForever onClick={() => deleteTodo(_id)} />
              </button>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  );
};

ItemList.defaultProps = {
  todos: [],
};

ItemList.propTypes = {
  todos: PropTypes.array.isRequired,
};
export default ItemList;
