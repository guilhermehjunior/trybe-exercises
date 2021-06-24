import React from 'react';

class Button extends React.Component {
  render() {
    const { text, handler } = this.props;
    return(
      <button onClick={ handler }>{ text }</button>
    );
  }
}

export default Button;