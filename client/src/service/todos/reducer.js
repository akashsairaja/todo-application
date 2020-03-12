import initialState from './initialState.js';
import todoActionTypes from './actionTypes.js';

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case todoActionTypes.FILTER_TODOS_SUCCESS:
        case todoActionTypes.GET_TODOS_SUCCESS:
            return {
                todos: action.payload,
                CmplTodos: action.payload.filter(obj => obj.completed),
                unCmplTodos: action.payload.filter(obj => !obj.completed)
            };
        case todoActionTypes.GET_TODOS_FAILURE:
        case todoActionTypes.FILTER_TODOS_FAILURE:
            return {
                todos: [],
                CmplTodos: [],
                unCmplTodos: []
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


