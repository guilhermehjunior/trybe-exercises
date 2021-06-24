import React from 'react';
import Pokemon from './Components/Pokemon';
import './App.css';
import data from './data';
import Button from './Components/Button';

const types = data.map((pokemon) => pokemon.type);
const uniqueTypes = [...new Set(types)];
// Set cria um novo objeto sem repeticoes do array

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandlerNext = this.clickHandlerNext.bind(this);
    this.clickHandlerType = this.clickHandlerType.bind(this);
    this.clickHandlerAll= this.clickHandlerAll.bind(this);
    this.state = {
      posicaoPokemon:0,
      showingPokemons: data,
      disableButton: false,
    }
  }

  clickHandlerNext() {
    this.setState((previousState) => (
      this.state.posicaoPokemon >= (this.state.showingPokemons.length - 1) ?
      { posicaoPokemon: 0} :
      { posicaoPokemon: previousState.posicaoPokemon + 1 } 
    ));
  }

  clickHandlerType(type) {
    const pokemonsByType = data.filter((pokemon) => pokemon.type === type);
    this.setState({
      showingPokemons: pokemonsByType,
      posicaoPokemon:0,
      disableButton: pokemonsByType.length === 1 ? true : false,
    });
  }

  clickHandlerAll() {
    this.setState({
      showingPokemons: data,
      posicaoPokemon:0,
    });
  }

  render() { 
    return (
      <div className="App">
        <h1>My Pokedex:</h1>
        <section className="button-container">
          { uniqueTypes.map((type) => <Button status={false} key={type} text={type} handler={() => this.clickHandlerType(type)} />) }
          <Button status={false} text='All' handler = { this.clickHandlerAll }/>
        </section>
        <Button status={this.state.disableButton} text='Next' handler = { this.clickHandlerNext }/>
        <section className="pokemon-container">
          <Pokemon poke={ this.state.showingPokemons[this.state.posicaoPokemon] }/>
        </section>
      </div>
    );
  }
  
}

export default App;
