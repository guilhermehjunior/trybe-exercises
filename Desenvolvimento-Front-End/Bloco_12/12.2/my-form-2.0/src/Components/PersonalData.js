import React from 'react';
import Input from './Input';
import inputsPessoais from '../inputsPessoais';
import './PersonalData.css';


const states = [
  { AC: 'Acre' },
  { AL: 'Alagoas' },
  { AP: 'Amapá' },
  { AM: 'Amazonas' },
  { BA: 'Bahia' },
  { CE: 'Ceará' },
  { DF: 'Distrito Federal' },
  { ES: 'Espírito Santo' },
  { GO: 'Goías' },
  { MA: 'Maranhão' },
  { MT: 'Mato Grosso' },
  { MS: 'Mato Grosso do Sul' },
  { MG: 'Minas Gerais' },
  { PA: 'Pará' },
  { PB: 'Paraíba' },
  { PR: 'Paraná' },
  { PE: 'Pernambuco' },
  { PI: 'Piauí' },
  { RJ: 'Rio de Janeiro' },
  { RN: 'Rio Grande do Norte' },
  { RS: 'Rio Grande do Sul' },
  { RO: 'Rondônia' },
  { RR: 'Roraíma' },
  { SC: 'Santa Catarina' },
  { SP: 'São Paulo' },
  { SE: 'Sergipe' },
  { TO: 'Tocantins' },
];

class PersonalData extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandle = this.changeHandle.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf:'',
      cidade:'',
      endereco:'',
      estado:'',
      moradia:'Apartamento',
    }
  }

  changeHandle(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <fieldset className="fieldset-dados-pessoais">
        <legend>Dados Pessoais:</legend>
         { inputsPessoais.map((input)=>
         <Input key={ input.name }
         inputLabel={ input.label }
         inputType={ input.type }
         inputName={ input.name }
         inputOnChange={ this.changeHandle }
         inputValue={ this.state[input.name] } 
         inputMaxLength={ input.maxLength }
         /> 
         ) } 
        <select name="estado" onChange={ this.changeHandle }>
          {states.map((estado)=> {
            const [ siglaENome ] = Object.entries(estado);
          return (
            <option key={siglaENome[0]} value={ siglaENome[0] }>
              { siglaENome[1] }
            </option>
          );
          })}
        </select>
        <Input
          checked
          inputLabel="Apartamento"
          inputType="radio"
          inputName="moradia"
          inputOnChange={ this.changeHandle }
          inputValue="Apartamento"
         /> 
         <Input
          inputLabel="Casa"
          inputType="radio"
          inputName="moradia"
          inputOnChange={ this.changeHandle }
          inputValue="Casa"
         /> 
        
      </fieldset>
    );
  }
}

export default PersonalData;