import React from 'react';
import Pokemon from './Pokemon';
import data from '../data';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokedexContainer'>
         <Pokemon  poke={data[0]} />
      </div>
    );
  }
}

export default Pokedex;