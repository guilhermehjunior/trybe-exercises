import React from 'react';
import './Pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { poke } = this.props;
    return (
    <div className='pokemonContainer'>
      <div>
        <p>{poke.name}</p>
        <p>{poke.type}</p>
        <p> Average Weight: { poke.averageWeight.value } { poke.averageWeight.measurementUnit }</p>
      </div>
      <div>
        <img src={ poke.image} alt={ poke.name}/>
      </div>
    </div>
    );
  }
}

Pokemon.propTypes = {
  poke: PropTypes.object,
}

export default Pokemon;