import './App.css';
import Tasks from './components/Tasks';

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// };

const compromissos = ['Estudar', 'Jogar', 'Ler', 'Escovar os dentes'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ol>
         <Tasks value='tarefa1'/>
         <Tasks value='Tarefa2'/>
         {compromissos.map((compromisso) => <Tasks value = {compromisso} />)}
         {/* {Task('tarefa1')}
         {Task('Tarefa2')}
         {Task('Essa eh a terceira tarefa')} 
         {compromissos.map((compromisso) => Task(compromisso))} */}
        </ol>
      </header>
    </div>
  );
}

export default App;
