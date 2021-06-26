import React from 'react';

class TextArea extends React.Component {
  render() {
    const { 
      textAreaName,
      textAreaLabel,
      textAreaValue,
      textAreaOnChange,
      textAreaLength 
    } = this.props;
    
    return (
      <label>
        { textAreaLabel }
        <textarea 
        name={ textAreaName } 
        value= { textAreaValue }
        onChange={ textAreaOnChange } 
        maxLength={ textAreaLength } 
        required/>
      </label>
    );
  }
}

export default TextArea;