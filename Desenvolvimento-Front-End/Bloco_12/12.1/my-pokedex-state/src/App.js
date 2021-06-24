import React from 'react';
import Pokedex from './Components/Pokedex';
import './App.css';
import data from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandlerNext = this.clickHandlerNext.bind(this);
    this.clickHandlerFire = this.clickHandlerFire.bind(this);
    this.clickHandlerPsychic = this.clickHandlerPsychic.bind(this);
    this.state = {
      posicaoPokemon:0,
      showingPokemons: data.filter((pokemon) => pokemon.type === 'Fire'),
    }
  }

  clickHandlerNext() {
    this.setState((previousState) => (
      this.state.posicaoPokemon >= (this.state.showingPokemons.length - 1) ?
      { posicaoPokemon: 0} :
      { posicaoPokemon: previousState.posicaoPokemon + 1 } 
    ));
  }

  clickHandlerFire() {
    this.setState({
      showingPokemons: data.filter((pokemon) => pokemon.type === 'Fire'),
    });
  }

  clickHandlerPsychic() {
    this.setState({
      showingPokemons: data.filter((pokemon) => pokemon.type === 'Psychic')
    });
  }

  render() { 
    return (
      <div className="App">
        <h1>My Pokedex:</h1>
        <button onClick={ this.clickHandlerNext }>Next</button>
        <button onClick={ this.clickHandlerFire }>Fire</button>
        <button onClick={ this.clickHandlerPsychic }>Psychic</button>
        <Pokedex pokemon={ this.state.showingPokemons[this.state.posicaoPokemon] }/>
      </div>
    );
  }
  
}

export default App;
