import React from 'react';
import PersonalData from './Components/PersonalData';
import LastJob from './Components/LastJob';
import './App.css';

const INITIAL_STATE = {
    nome: '',
    email: '',
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


class App extends React.Component {
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
    this.setState({
      submited: true,
    })
  }

  resetForm() {
    this.setState(INITIAL_STATE);
  }

  render(){
    return (
      <div className="App">
        <h1>Fomulario para C.V:</h1>
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
          <button 
          type="submit" 
          onClick={ this.onClickButtonHandler }
          >Submeter info</button>
          <button 
          type="button"
          onClick={ this.resetForm }
          >Reset</button>
        </form>

        {this.state.submited ?
          <section className="dados-consolidados">
            <p>Nome: { this.state.nome }</p>
            <p>Email: { this.state.email }</p>
            <p>Cpf: { this.state.cidade }</p>
            <p>Endere: { this.state.endereco }</p>
            <p>Cidade: { this.state.cidade }</p>
            <p>Estado: { this.state.estado }</p>
            <p>Moradia: { this.state.moradia }</p>
            <p>Resumo: { this.state.resumo }</p>
            <p>Cargo: { this.state.cargo }</p>
            <p>Descrição: { this.state.descricao }</p>
          </section> : '' 
        } 
      </div>
    );
  }
}

export default App;
