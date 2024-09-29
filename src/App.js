import logo from './logo.svg';
import './App.css';
import { Message } from './components/message';
import { useState } from 'react';
import { CommenstList } from './components/commentsList';


function App() {
  const [steate, setState] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Message counter={steate} setCounter={setState} text="Push button to increase counter" />
        <CommenstList />
      </header>
    </div>
  );
}

export default App;
