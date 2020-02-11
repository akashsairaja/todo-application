import initialState from './initialState.js';
import todoActionTypes from './actionTypes.js';

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case todoActionTypes.FILTER_TODOS_SUCCESS:
        case todoActionTypes.GET_TODOS_SUCCESS:
            return {
                todos: action.payload,
                completedTodos: action.payload.filter(obj => obj.completed),
                unCompletedTodos: action.payload.filter(obj => !obj.completed)
            };
        case todoActionTypes.GET_TODOS_FAILURE:
        case todoActionTypes.FILTER_TODOS_FAILURE:
            return {
                todos: [],
                completedTodos: [],
                unCompletedTodos: []
            };
        case todoActionTypes.ADD_TODOS_SUCCESS:
            return state;
        case todoActionTypes.ADD_TODOS_FAILURE:
            return state;
        default:
            return state
    }
};

export default todoReducers;


