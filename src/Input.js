import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
    }

    render() {
        return (
            <>
            <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} className='input' onChange={this.props.onChange} maxLength={this.props.maxl}></input>
            </>
        );
    }
}

export default Input;