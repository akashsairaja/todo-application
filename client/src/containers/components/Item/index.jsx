import React, {useState} from 'react';
import {connect} from "react-redux";

import {Card, CardBody, Input, Tooltip} from 'reactstrap';
import moment from 'moment';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';

import {deleteTodos, updatedTodos} from '../../../service/todos/action'


const ItemList = (props) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);


    const toggle = () => {
        setTooltipOpen(!tooltipOpen)
    };

    const deleteTodo = (id) => {
        props.deleteTodos(id);
    };

    const updateToCompleted = (id, payload) => {
        props.updatedTodos({
            id,
            ...payload,
            completed: !payload.completed
        });
    };

    const {obj: {completed, title, description, dueDate, priority, _id}} = props;
    const completedClass = completed ? "todo__item-comleted mt-1" : "mt-1";
    const classPriority = "todo__priority-indicator " + priority;
    return (
        <Card className={completedClass}>
            <CardBody className="todo__item">
                <label htmlFor={title} onClick={() => updateToCompleted(_id, props.obj)}
                       className="todo__label-checkbox">
                    <Input
                        type="checkbox"
                        className="todo__complete-toggle"
                        defaultChecked={completed}
                        required
                    />
                    <span className="checkbox-indicator"/>
                </label>
                <div className="todo__info">
                    <div className="todo__header">
                        <h3>{title} </h3>
                        <div className="todo__additional">
                            <p className="todo__due-date">Due
                                date: {moment(dueDate).format('MM/DD/YYYY').toString()}</p>

                            <span className="todo__priority">Priority:</span>
                            <span className={classPriority} id={"todo_tooltip" + _id}/>
                            <Tooltip target={"todo_tooltip" + _id} placement="right" isOpen={tooltipOpen}
                                     toggle={toggle}>
                                {priority}
                            </Tooltip>
                        </div>
                    </div>

                    <div className="todo__content">
                        <div className="todo__description">
                            {description}
                        </div>
                        <button className="todo__delete-btn" type="button">
                            <DeleteForeverIcon onClick={() => deleteTodo(_id)}/>
                        </button>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteTodos: (id) => dispatch(deleteTodos(id)),
    updatedTodos: (payload) => dispatch(updatedTodos(payload)),
});

export default connect(null, mapDispatchToProps)(ItemList);