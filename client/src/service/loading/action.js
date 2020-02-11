import actionType from "./actionTypes.js";

export const startLoading = () => dispatch => {
    dispatch({
        type: actionType.ENABLE_LOADER
    });
};
export const stopLoading = () => dispatch => {
    dispatch({
        type: actionType.DISABLE_LOADER
    });
};

