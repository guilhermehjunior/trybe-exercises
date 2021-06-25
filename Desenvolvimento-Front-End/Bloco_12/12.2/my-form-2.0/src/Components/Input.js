import React from 'react';

class Input extends React.Component {
  render() {
    const { inputLabel, inputType, inputName, inputOnChange, inputValue, inputMaxLength } = this.props;
    return(
      <label htmlFor={ inputName }>
        { inputLabel }
        <input
        type={ inputType }
        name={ inputName }
        onChange={ inputOnChange }
        value={ inputValue }
        maxLength={ inputMaxLength }
        />
      </label>
    );
  }
}

export default Input;