
import './App.css';

import Board from './components/Board';

import * as React from 'react';

function App() {

const useWebSockets = () => {
  React.useEffect(() => {
    const websocket = new WebSocket('wss://echo.websocket.org/');

    websocket.onopen = () => {
      console.log('connected');
    }

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
    }
  
    return () => {
      websocket.close()
    }
  }, [])
}

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
