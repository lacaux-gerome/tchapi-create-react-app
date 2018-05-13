import React from 'react'
import Button from '../components/button'
import Header from './header'
import baseStyles from '../styles/base-styles'


export default class App extends React.Component {
    render() {
        baseStyles();
        return (
            <div>
                <Header/>
                <Button name="bob"/>
            </div>
        );
    }
}