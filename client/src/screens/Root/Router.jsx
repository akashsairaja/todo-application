import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const TodoApp = React.lazy(() => import("../index"));

const Router = () => (
  <Suspense
    fallback={
      <div className="preloader">
        <div className="centered loader loader-1">
          <div className="loader-outter" />
          <div className="loader-inner" />
        </div>
      </div>
    }
  >
    <Switch>
      <Route path="/" exact component={TodoApp} />
    </Switch>
  </Suspense>
);

export default Router;
