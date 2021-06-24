import Pokedex from './Components/Pokedex';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teste:0
    }
  }
  render() { 
    return (
      <div className="App">
        <h1>My Pokedex:</h1>
        <Pokedex />
      </div>
    );
  }
  
}

export default App;
