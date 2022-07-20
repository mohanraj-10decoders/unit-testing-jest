import './App.css';
import Counter from './Counter';
import Todos from './ToDos';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter />
        <Todos />
      </header>
    </div>
  );
}

export default App;
