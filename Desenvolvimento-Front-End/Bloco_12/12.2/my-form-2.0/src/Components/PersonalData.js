import React from 'react';
import Input from './Input';
import inputsPessoais from '../inputsPessoais';
import './PersonalData.css';

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
      <fieldset className="fieldset-dados-pessoais">
        <legend>Dados Pessoais:</legend>
         { inputsPessoais.map((input)=>
         <Input 
         inputLabel={ input.label }
         inputType={ input.type }
         inputName={ input.name }
         inputOnChange={ this.changeHandle }
         inputValue={ this.state.nome } 
         inputMaxLength={ input.maxLength }
         /> 
         ) } 
      </fieldset>
    );
  }
}

export default PersonalData;