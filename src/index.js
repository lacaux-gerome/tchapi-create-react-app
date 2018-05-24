import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { hot } from 'react-hot-loader'

const test = ReactDOM.render(<App />, document.getElementById("root"));

export default hot(module)(test)