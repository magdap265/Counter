import React from 'react';
import './Button.css';


class Button extends React.Component {
    render(){
        return(
            <button onClick = {this.props.click}>{this.props.value}</button>
        )
    }
}

export default Button;
