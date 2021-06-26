import React from 'react';
import TextArea from './TextArea';
import './LastJob.css'

class LastJob extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandle = this.changeHandle.bind(this);

    this.state = {
      resumo: '',
      cargo: '',
      descricao: '',
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
      <fieldset className="fieldset-ultimo-emprego">
        <legend>Ultimo Emprego:</legend>
        <TextArea
          textAreaLabel="Resumo C.V.:"
          textAreaName="resumo"
          textAreaOnChange={ this.changeHandle }
          textAreaValue= { this.state.resumo }
          textAreaLength={ 1000 }
        />
        <TextArea
          textAreaLabel="Cargo:"
          textAreaName="cargo"
          textAreaOnChange={ this.changeHandle }
          textAreaValue= { this.state.cargo }
          textAreaLength={ 40 }
        />
        <TextArea
          textAreaLabel="Descrição do cargo"
          textAreaName="descricao"
          textAreaOnChange={ this.changeHandle }
          textAreaValue= { this.state.descricao }
          textAreaLength={ 500 }
        />
      </fieldset>
    );
  }
}

export default LastJob;