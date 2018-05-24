import React from "react";
import Button from "../components/button";
import Header from "../components/header";
import baseStyles from "../styles/base-styles";
import Main from "./Main";

export default class App extends React.Component {
  render() {
    baseStyles();
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
