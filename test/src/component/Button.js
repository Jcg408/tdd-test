import React, { Component } from 'react';
import './../css/button.css';


class Button extends Component {
    state = { isShown: true }

    toggleIsShown = () => {
        this.setState (({isShown}) => ({ isShown: !isShown}));
    }

    render() { 
        const { isShown} =this.state;
        return ( 
            <div className='toggle'>
                <button onClick={this.toggleIsShown}>Press To Hide Text</button>
                {isShown && <div><h4>To be or not to be. That is the question.</h4></div>}
            </div>
         );
    }
}
 
export default Button;