import React from 'react';
import Pokedex from './Components/Pokedex';
import './App.css';
import data from './data';
import Button from './Components/Button';

const types = data.map((pokemon) => pokemon.type);
const uniqueTypes = [...new Set(types)];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandlerNext = this.clickHandlerNext.bind(this);
    this.clickHandlerType = this.clickHandlerType.bind(this);
    this.clickHandlerPsychic = this.clickHandlerPsychic.bind(this);
    this.clickHandlerAll= this.clickHandlerAll.bind(this);
    this.state = {
      posicaoPokemon:0,
      showingPokemons: data,
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
    this.setState({
      showingPokemons: data.filter((pokemon) => pokemon.type === type),
      posicaoPokemon:0,
    });
  }

  clickHandlerPsychic() {
    this.setState({
      showingPokemons: data.filter((pokemon) => pokemon.type === 'Psychic'),
      posicaoPokemon:0,
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
        {uniqueTypes.map((type) => <Button key={type} text={type} handler={() => this.clickHandlerType(type)} />)}
        <Button text='Next' handler = { this.clickHandlerNext }/>
        <Button text='All' handler = { this.clickHandlerAll }/>
        <Pokedex pokemon={ this.state.showingPokemons[this.state.posicaoPokemon] }/>
      </div>
    );
  }
  
}

export default App;
