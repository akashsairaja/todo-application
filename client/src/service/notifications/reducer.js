import initialState from './initialState.js';
import actionType from "./actionTypes.js";

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SHOW_INFO:
            return {
                message: action.payload,
                level: "info",
                icon: "verifiedUser"
            };
        case actionType.SHOW_ERROR:
            return {
                message: action.payload,
                level: "error",
                icon: "verifiedUser"
            };
        case actionType.SHOW_SUCCESS:
            return {
                message: action.payload,
                level: "success",
                icon: "verifiedUser"
            };
        case actionType.SHOW_WARNING:
            return {
                message: action.payload,
                level: "warning",
                icon: "verifiedUser"
            };
        default:
            return state
    }
};

export default notificationReducer;


