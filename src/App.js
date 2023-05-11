
import './styles/App.css';

import Board from './components/Board.js';
import Moves from './components/Moves.js';
import Header from './components/Header.js'
import * as React from 'react';

function App() {


  return (
      <div className="App">
          <Header />
          <div className="content">
              <Board />
              <Moves />
          </div>
      </div>
  );
}

export default App;
