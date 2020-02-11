import actionType from "./actionTypes.js";

export const showSuccess = (message) => dispatch => {
    dispatch({
        type: actionType.SHOW_SUCCESS,
        payload: message
    });
};
export const showError = (message) => dispatch => {
    dispatch({
        type: actionType.SHOW_ERROR,
        payload: message
    });
};

export const showWarning = (message) => dispatch => {
    dispatch({
        type: actionType.SHOW_WARNING,
        payload: message
    });
};

export const showInfo = (message) => dispatch => {
    dispatch({
        type: actionType.SHOW_INFO,
        payload: message
    });
};

