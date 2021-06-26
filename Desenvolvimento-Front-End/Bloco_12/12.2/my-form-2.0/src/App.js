import React from 'react';
import PersonalData from './Components/PersonalData';
import LastJob from './Components/LastJob';
import './App.css';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Fomulario para C.V:</h1>
        <form>
          <PersonalData />
          <LastJob />
        </form>
      </div>
    );
  }
}

export default App;
