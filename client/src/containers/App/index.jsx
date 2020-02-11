import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import NotificationContainer from '../components/Notification';
import Loader from '../components/Loader';

import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../scss/main.scss'

import store from './store';

const App = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <NotificationContainer/>
                <Loader>
                    <Router/>
                </Loader>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
