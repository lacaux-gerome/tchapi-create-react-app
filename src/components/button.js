import React from 'react';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.state = {
            counter: 0,
        }
    }

    render() {
        return (
            <button onClick={this.increment}>
                {this.props.name} salut à tous
                Compteur : {this.state.counter}
            </button>
        )
    }

    increment() {
        this.setState({counter: this.state.counter + 1})
    }
}