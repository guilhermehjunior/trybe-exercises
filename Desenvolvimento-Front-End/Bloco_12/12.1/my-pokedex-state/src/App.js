import React from 'react';
import Pokedex from './Components/Pokedex';
import './App.css';
import data from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      posicaoPokemon:0
    }
  }

  clickHandler() {
    this.setState((previousState) => (
      this.state.posicaoPokemon >= (data.length - 1) ?
      { posicaoPokemon: 0} :
      { posicaoPokemon: previousState.posicaoPokemon + 1 } 
    ));
  }

  render() { 
    console.log(this.state.posicaoPokemon);
    console.log(data);
    return (
      <div className="App">
        <h1>My Pokedex:</h1>
        <button onClick={this.clickHandler}>Next</button>
        <Pokedex pokemon={ data[this.state.posicaoPokemon] }/>
      </div>
    );
  }
  
}

export default App;
