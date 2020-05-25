import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NotificationContainer from "../../components/Notification";

import Router from "./Router";

import "../../scss/main.scss";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NotificationContainer />
      <Router />
    </BrowserRouter>
  </Provider>
);

export default App;
