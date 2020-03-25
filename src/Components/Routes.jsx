import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./HomeComponent";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
