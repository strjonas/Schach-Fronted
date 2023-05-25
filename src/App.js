
import './styles/App.css';

import Board from './components/Board.js';
import Server from './components/Server.js';
import * as React from 'react';

function App() {

  let serverURL = "http://localhost:8080/hello"
  

  return (
    <div className="App">
      <Server/>
      <Board />
    </div>
  );
}

export default App;
