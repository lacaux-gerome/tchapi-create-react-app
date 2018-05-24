import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}
