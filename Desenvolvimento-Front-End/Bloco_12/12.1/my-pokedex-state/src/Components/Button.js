import React from 'react';

class Button extends React.Component {
  render() {
    const { text, handler, status } = this.props;
    return(
      <button disabled={ status } onClick={ handler }>{ text }</button>
    );
  }
}

export default Button;