import React from "react";
import styled from "styled-components";
import Button from "./button";
import Nav from "./nav";

// Create a Title component that'll render an <h1> tag with some styles
const Header = styled.div`
  font-size: 1.5em;
  height: 100px;
  width: 100%;
  text-align: center;
  background-color: red;
`;

export default class header extends React.Component {
  render() {
    return (
      <Header>
        THIS IS THE HEADER : 
        <Nav/>
      </Header>
    );
  }
}
