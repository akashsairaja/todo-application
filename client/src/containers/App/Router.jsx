import React from 'react';
import Landing from "../index";
import {Switch, Route} from "react-router-dom";

const Router = () => (
    <Switch>
        <Route path="/" exact component={Landing}/>
    </Switch>
);


export default Router;