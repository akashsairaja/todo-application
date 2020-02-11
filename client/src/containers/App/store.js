import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import loaderReducer from '../../service/loading/reducer';
import todoReducers from '../../service/todos/reducer';
import notificationReducer from '../../service/notifications/reducer';


const reducer = combineReducers({
    loaderReducer,
    todoReducers,
    notificationReducer
});


const store = createStore(reducer,
    compose(applyMiddleware(thunk))
);
export default store;
