import React from 'react'
import Login from '../components/login'
import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Header = styled.div`
  font-size: 1.5em;
  height: 100px;
  width: 100%;
  text-align: center;
  background-color: white;
`;

export default class header extends React.Component {
    render() {
        return (
            <Header>
                <div>
                    <img src="" alt=""/>
                </div>
                <Login/>
            </Header>
        );
    }
}