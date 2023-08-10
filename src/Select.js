import React from 'react';
import './Select.css';
const settings = ['inexgroup','multispace'];

class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    returnOptionTags() {
        const optionElements = settings.map((option, index) => (
            <option key={index}>{option}</option>
        ));
        return optionElements;
    }

    render() {
        const optionElements = this.returnOptionTags();
        return (
            <>
            <select id="select" onChange={this.props.onChange}>
                {optionElements}
            </select>
            </>
        );
    }
}

export default Select;