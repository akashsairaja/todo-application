import initialState from './initialState.js';
import actionType from "./actionTypes.js";

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ENABLE_LOADER:
            return {
                isLoading: true
            };
        case actionType.DISABLE_LOADER:
            return {
                isLoading: false
            };
        default:
            return state
    }
};

export default loaderReducer;


