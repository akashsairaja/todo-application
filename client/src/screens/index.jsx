import React from "react";
import { connect, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import Loader from "../components/Loader";
import TodoList from "../components/Item";
import TodoInput from "../components/Input";

import { getTodos } from "../service/todos/action";

const mapStateToProps = (state) => ({
  unCmplTodos: state.todoReducers.unCmplTodos,
  cmplTodos: state.todoReducers.cmplTodos,
});

const TodoApp = ({ cmplTodos, unCmplTodos }) => {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    showAllTasks: false,
    showPendingTasks: true,
    showCompletedTasks: true,
  });

  React.useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleStatus = (status) => {
    if (status === "pending") {
      setState({
        ...state,
        showAllTasks: false,
        showPendingTasks: true,
        showCompletedTasks: false,
      });
    } else if (status === "completed") {
      setState({
        ...state,
        showAllTasks: false,
        showPendingTasks: false,
        showCompletedTasks: true,
      });
    } else {
      setState({
        ...state,
        showAllTasks: true,
        showPendingTasks: false,
        showCompletedTasks: false,
      });
    }
  };

  return (
    <Container fluid className="todo-app">
      <Row>
        <Col
          md={12}
          lg={12}
          xl={12}
          className="d-flex justify-content-center my-2"
        >
          <h3 className="mt-5">Todo Application</h3>
        </Col>

        <Col md={3} lg={3} xl={2}>
          <TodoInput handleStatus={handleStatus} />
        </Col>
        <Loader>
          <Col md={9} xl={10}>
            {(state.showPendingTasks || state.showAllTasks) && (
              <TodoList todos={unCmplTodos} />
            )}
            <div className="todo-app__divider">
              <div className="todo-app__divider-line" />
              <p className="todo-app__divider-title">Done</p>
              <div className="todo-app__divider-line" />
            </div>
            {(state.showCompletedTasks || state.showAllTasks) && (
              <TodoList todos={cmplTodos} />
            )}
          </Col>
        </Loader>
      </Row>
    </Container>
  );
};
export default connect(mapStateToProps, null)(TodoApp);
