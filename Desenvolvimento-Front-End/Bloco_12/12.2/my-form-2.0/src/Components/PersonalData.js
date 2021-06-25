import React from 'react';
import Input from './Input';

class PersonalData extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandle = this.changeHandle.bind(this);

    this.state = {
      nome: '',

    }
  }

  changeHandle(event) {
    const { target } = event;
    const { name } = target;
    const value = target.checked === true ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <fieldset>
        <Input 
        inputLabel="Nome:"
        inputType="text"
        inputName="nome"
        inputOnChange={ this.changeHandle } />
      </fieldset>
    );
  }
}

export default PersonalData;