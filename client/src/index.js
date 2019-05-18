import createHistory from "history/createBrowserHistory";
import React from "react";
import ReactDOM from "react-dom";
import "react-table/react-table.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./JB-Components.css";
import "./assets/fonts/icomoon/style.css";

const history = createHistory({});

ReactDOM.render(<App history={history} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
