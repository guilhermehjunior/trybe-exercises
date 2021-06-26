import React from 'react';
import TextArea from './TextArea';
import './LastJob.css'
import PropTypes from 'prop-types';

class LastJob extends React.Component {
   render() {
    const { estado, onChangeHandler, onMouseEnterHandler } = this.props;
    return (
      <fieldset className="fieldset-ultimo-emprego">
        <legend>Ultimo Emprego:</legend>
        <TextArea
          textAreaLabel="Resumo C.V.:"
          textAreaName="resumo"
          textAreaOnChange={ onChangeHandler }
          textAreaValue= { estado.resumo }
          textAreaLength={ 1000 }
        />
        <TextArea
          textAreaLabel="Cargo:"
          textAreaName="cargo"
          textAreaOnChange={ onChangeHandler }
          textAreaOnMouseEnter = { onMouseEnterHandler }
          textAreaValue= { estado.cargo }
          textAreaLength={ 40 }
        />
        <span>{ estado.info }</span>
        <TextArea
          textAreaLabel="Descrição do cargo"
          textAreaName="descricao"
          textAreaOnChange={ onChangeHandler}
          textAreaValue= { estado.descricao }
          textAreaLength={ 500 }
        />
      </fieldset>
    );
  }
}

LastJob.propTypes = {
  estado: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onMouseEnterHandler: PropTypes.func.isRequired,
}

export default LastJob;