import React from 'react';
import PersonalData from './Components/PersonalData';
import './App.css';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Fomulario para C.V:</h1>
        <PersonalData />
      </div>
    );
  }
}

export default App;
