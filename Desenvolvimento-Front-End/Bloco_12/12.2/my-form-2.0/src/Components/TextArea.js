import React from 'react';

class TextArea extends React.Component {
  render() {
    const { 
      textAreaName,
      textAreaLabel,
      textAreaValue,
      textAreaOnChange,
      textAreaLength,
      textAreaOnMouseEnter
    } = this.props;
    
    return (
      <label>
        { textAreaLabel }
        <textarea 
        name={ textAreaName } 
        value= { textAreaValue }
        onChange={ textAreaOnChange } 
        maxLength={ textAreaLength } 
        onMouseEnter ={ textAreaOnMouseEnter }
        required/>
      </label>
    );
  }
}

export default TextArea;