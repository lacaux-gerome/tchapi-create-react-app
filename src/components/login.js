import React from 'react';
import {Fragment} from 'react';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            isFirstTime: true
        });
    }

    render() {
        return (
            <span style={{background: this.state.isFirstTime ? 'green' : 'red'}}>bonjour</span>
        )
    }
}