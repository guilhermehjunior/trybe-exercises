import React from 'react';
import PersonalData from './PersonalData';
import LastJob from './LastJob';
import DadosConsolidados from './DadosConsolidades';

const INITIAL_STATE = {
  nome: '',
  email: '',
  emailOk: true,
  cpf:'',
  cidade:'',
  endereco:'',
  estado:'',
  moradia:'Apartamento',
  resumo: '',
  cargo: '',
  descricao: '',
  info: '',
  infoOnce: true,
  submited: false,
}

class Form extends React.Component {
  constructor() {
    super();

    this.changeHandle = this.changeHandle.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onClickButtonHandler = this.onClickButtonHandler.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.state = {
      nome: '',
      email: '',
      emailOk: true,
      cpf:'',
      cidade:'',
      endereco:'',
      estado:'',
      moradia:'Apartamento',
      resumo: '',
      cargo: '',
      descricao: '',
      info: '',
      infoOnce: true,
      submited: false,
    }
  }

  changeHandle(event) {
    const { target } = event;
    const { name } = target;
    const value = target.name === 'nome' ? target.value.toUpperCase() : target.value;
    this.setState({
      [name]: value,
    })
    if (name === 'cargo')
      this.setState({
        info:'' ,
      })
  }

  onMouseEnterHandler() {
    if (this.state.infoOnce) {
      this.setState({
        info: 'Preencha com Cuidado essa Informacao',
        infoOnce: false,
      });
    } 
  }

  onBlurHandler() {
    const startsWithNumber = /^\d+/.test(this.state.cidade);
    if (startsWithNumber) {
      this.setState({
        cidade:''
      });
    }
  }

  onClickButtonHandler(event) {
    event.preventDefault();
    const emailCerto = /^\w+@[a-z]+\.[a-z]+/i.test(this.state.email);
    if(emailCerto) {
      this.setState({
        emailOk: true,
        submited: true,
      });
    } else {
      console.log('arruma o email');
      this.setState({
        emailOk: false,
        submited: false,
      });
    }
  }

  resetForm() {
    this.setState(INITIAL_STATE);
  }
  render() {
    return (
      <form>
        <PersonalData 
        estado={ this.state } 
        onChangeHandler={ this.changeHandle }
        onBlurHandler = { this.onBlurHandler }
        />
        <LastJob 
        estado={ this.state } 
        onChangeHandler={ this.changeHandle } 
        onMouseEnterHandler = { this.onMouseEnterHandler }
        />
        { this.state.emailOk ? '' : <p>Favor digitar formato aceitavel de email</p>}
        <button 
        type="submit" 
        onClick={ this.onClickButtonHandler }
        >Submeter info</button>
        <button 
        type="button"
        onClick={ this.resetForm }
        >Reset</button>
        { this.state.submited ? <DadosConsolidados estado={ this.state } /> : '' }
      </form>
      );
        
  }

}

export default Form;