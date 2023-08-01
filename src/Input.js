import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <>
            <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} className='input'></input>
            </>
        );
    }
}

export default Input;