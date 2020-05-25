import { v4 as uuidv4 } from "uuid";
import actionType from "./actionTypes.js";

export const showSuccess = (message, icon = "verifiedUser") => (dispatch) => {
  dispatch({
    type: actionType.SHOW_SUCCESS,
    payload: { message, icon, id: uuidv4() },
  });
};
export const showError = (message, icon = "verifiedUser") => (dispatch) => {
  dispatch({
    type: actionType.SHOW_ERROR,
    payload: { message, icon, id: uuidv4() },
  });
};

export const showWarning = (message, icon = "verifiedUser") => (dispatch) => {
  dispatch({
    type: actionType.SHOW_WARNING,
    payload: { message, icon, id: uuidv4() },
  });
};

export const showInfo = (message, icon = "verifiedUser") => (dispatch) => {
  dispatch({
    type: actionType.SHOW_INFO,
    payload: { message, icon, id: uuidv4() },
  });
};
