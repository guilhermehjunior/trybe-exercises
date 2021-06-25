import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { 
      inputLabel, 
      inputType, 
      inputName, 
      inputOnChange, 
      inputValue, 
      inputMaxLength,
      inputChecked, 
      inputRequired 
    } = this.props;
    
    return(
      <label htmlFor={ inputName }>
        { inputLabel }
        <input
        type={ inputType }
        name={ inputName }
        onChange={ inputOnChange }
        value={ inputValue }
        maxLength={ inputMaxLength }
        checked= { inputChecked }
        required= { inputRequired }
        />
      </label>
    );
  }
}

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputOnChange: PropTypes.func.isRequired
}

export default Input;