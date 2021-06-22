import React from 'react';
import Pokemon from './Pokemon';
import data from '../data';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokedexContainer'>
        { data.map((pokemon) => <Pokemon key= {pokemon.id} poke={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;