import React, { Component } from "react";
import { Router } from "react-router";

import Routes from "./routes";

class App extends Component {
  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}

export default App;
