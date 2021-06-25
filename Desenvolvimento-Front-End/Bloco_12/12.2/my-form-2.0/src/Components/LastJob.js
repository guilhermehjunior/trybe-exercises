import React from 'react';
import TextArea from './TextArea';

class LastJob extends React.Component {
  constructor(props) {
    super();

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
      <fieldset>
        <TextArea
          textAreaLabel="Resumo C.V.:"
          textAreaName="resumo"
          textAreaOnChange={ this.changeHandle }
          textAreaLength={ 1000 }
        />
      </fieldset>
    );
  }
}