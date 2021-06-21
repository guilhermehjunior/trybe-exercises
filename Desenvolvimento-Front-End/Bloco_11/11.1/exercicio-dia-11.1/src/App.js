import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ol>
         {Task('tarefa1')}
         {Task('Tarefa2')}
         {Task('Essa eh a terceira tarefa')}
        </ol>
      </header>
    </div>
  );
}

export default App;
