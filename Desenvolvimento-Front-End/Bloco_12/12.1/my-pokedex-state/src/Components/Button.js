import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    const { text, handler, status } = this.props;
    return(
      <button className="button" disabled={ status } onClick={ handler }>{ text }</button>
    );
  }
}

export default Button;