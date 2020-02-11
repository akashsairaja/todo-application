import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import TodoList from './components/Item';
import TodoInput from './components/Input';
import {connect} from 'react-redux';
import {getTodos} from '../service/todos/action';


const TodoApp = ({completedTodos, unCompletedTodos, isLoading, getTodos}) => {

    const [showAllTasks, setShowAllTasks] = useState(false);
    const [showPendingTasks, setPendingTasks] = useState(true);
    const [showCompletedTasks, setShowCompletedTasks] = useState(true);

    useEffect(() => {
        getTodos();
    }, [getTodos]);

    useEffect(() => {
    }, [unCompletedTodos, completedTodos]);


    const handleStatus = (status) => {
        if (status === "pending") {
            setPendingTasks(true);
            setShowCompletedTasks(false);
            setShowAllTasks(false);
        } else if (status === "completed") {
            setPendingTasks(false);
            setShowCompletedTasks(true);
            setShowAllTasks(false);
        } else {
            setShowAllTasks(true);
            setPendingTasks(false);
            setShowCompletedTasks(false);
        }
    };
    return (
        <React.Fragment>
            <Container fluid={true} className="todo-app">
                <Row>
                    <Col md={{size: 5, offset: 6}}>
                        <h3 className="page-title mt-5">Todo Application</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xl={2}>
                        <TodoInput handleStatus={handleStatus}/>
                    </Col>
                    <Col md={9} xl={10}>

                        {showPendingTasks || showAllTasks ? <React.Fragment>
                            {
                                unCompletedTodos.map((obj, idx) => {
                                    return <TodoList key={idx} obj={obj}/>
                                })
                            }
                        </React.Fragment> : ""
                        }
                        {<div className="todo-app__divider">
                            <div className="todo-app__divider-line"/>
                            <p className="todo-app__divider-title">Done</p>
                            <div className="todo-app__divider-line"/>
                        </div>}
                        {showCompletedTasks || showAllTasks ? <React.Fragment>
                            {
                                completedTodos.map((obj, idx) => {
                                    return <TodoList key={idx} obj={obj}/>
                                })
                            }
                        </React.Fragment> : ""
                        }
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};


const mapDispatchToProps = dispatch => ({
    getTodos: () => dispatch(getTodos()),
});

const mapStateToProps = state => ({
    isLoading: state.loaderReducer.isLoading,
    todoList: state.todoReducers.todos,
    unCompletedTodos: state.todoReducers.unCompletedTodos,
    completedTodos: state.todoReducers.completedTodos,
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);