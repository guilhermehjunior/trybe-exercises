import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className='pokedexContainer'>
         <Pokemon  poke={pokemon} />
      </div>
    );
  }
}

export default Pokedex;