import React from "react";
import { Fragment } from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      isFirstTime: true,
      title : 'test' 
    });
  }

  render() {
    return (
      <div>
        <p>{ this.state.title }</p>
        <span style={{ background: this.state.isFirstTime ? "green" : "red" }}>
          bonjour
        </span>
      </div>
    );
  }
}
