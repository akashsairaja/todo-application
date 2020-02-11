import axios from 'axios';
import actionType from "./actionTypes.js";
import {startLoading, stopLoading} from '../loading/action';
import {showError, showSuccess, showWarning} from '../notifications/action';

const endPointUrl = "http://localhost:5000/api/todos";


export const getTodos = () => dispatch => {
    dispatch(startLoading());
    axios.get(endPointUrl).then(({data}) => {
        dispatch(stopLoading());
        dispatch({
            type: actionType.GET_TODOS_SUCCESS,
            payload: data.data
        });
    }).catch(err => {
        dispatch(stopLoading());
        dispatch({
            type: actionType.GET_TODOS_FAILURE,
        });
    })
};


export const addTodos = payload => dispatch => {
    dispatch(startLoading());
    axios.post(endPointUrl, payload).then(data => {
        dispatch(getTodos());
        dispatch(showSuccess("new Todos Added Successfully"));
        dispatch(stopLoading());
        dispatch({
            type: actionType.ADD_TODOS_SUCCESS,
            payload: [payload]
        });
    }).catch(err => {
        dispatch(stopLoading());
        dispatch(showError("unsuccessful process request, please check request Handlers"));
        dispatch({
            type: actionType.ADD_TODOS_FAILURE
        });
    });
};

export const deleteTodos = (id) => dispatch => {
    dispatch(startLoading());
    axios.delete(endPointUrl, {data: {id}}).then(data => {
        dispatch(showError("Todo Deleted Successfully"));
        dispatch(getTodos());
        dispatch(stopLoading());
        dispatch({
            type: actionType.DELETE_TODOS_SUCCESS,
        });
    }).catch(err => {
        dispatch(stopLoading());
        dispatch(showError("unsuccessful process request, please check request Handlers"));
        dispatch({
            type: actionType.DELETE_TODOS_FAILURE
        });
    });
};


export const updatedTodos = (payload) => dispatch => {
    dispatch(startLoading());
    axios.put(endPointUrl, payload).then(data => {
        dispatch(showWarning("Todo Updated Successfully"));
        dispatch(getTodos());
        dispatch(stopLoading());
        dispatch({
            type: actionType.UPDATE_TODOS_SUCCESS,
        });
    }).catch(err => {
        dispatch(stopLoading());
        dispatch(showError("unsuccessful process request, please check request Handlers"));
        dispatch({
            type: actionType.UPDATE_TODOS_FAILURE
        });
    });
};

export const filterTodos = (priority) => dispatch => {
    dispatch(startLoading());
    axios.patch(endPointUrl, {priority}).then(({data}) => {
        dispatch(stopLoading());
        dispatch({
            type: actionType.FILTER_TODOS_SUCCESS,
            payload: data.data
        });
    }).catch(err => {
        dispatch(stopLoading());
        dispatch(showError("unsuccessful process request, please check request Handlers"));
        dispatch({
            type: actionType.FILTER_TODOS_FAILURE
        });
    });
};