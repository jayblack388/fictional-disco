import React from "react";
import { Route, Switch } from "react-router";

import Home from "./components/Home";

const Routes = () => (
  <div id="app-wrapper">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default Routes;
