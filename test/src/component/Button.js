import React, { Component } from 'react';


class Button extends Component {
    state = { isShown: true }

    toggleIsShown = () => {
        this.setState (({isShown}) => ({ isShown: !isShown}));
    }

    render() { 
        const { isShown} =this.state;
        return ( 
            <div>
                <button onClick={this.toggleIsShown}>Toggle</button>
                {isShown && <div>Text</div>}
            </div>
         );
    }
}
 
export default Button;