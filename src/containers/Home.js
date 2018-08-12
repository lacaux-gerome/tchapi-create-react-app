import React from "react";
import Button from "../components/button";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>jui la home</h1>
        <div>scroll me</div>
        <Button>bouton</Button>
      </div>
    );
  }
}
