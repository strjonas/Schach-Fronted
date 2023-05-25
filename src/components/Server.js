
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import WebSocket from 'react-websocket';


export default function Server() {

    let refWebSocket = useRef(null);

 function handleData(data) {
    console.log('Received:', data);
  }

  function handleOpen() {
    console.log('WebSocket connection established');
    
    sendMessage('Hello, WebSocket server!');
  }

  function handleClose() {
    console.log('WebSocket connection closed');
  }

  function sendMessage(message) {
    refWebSocket.sendMessage(message);
  }

  
    return (
        
      <div>
        <div></div>
        <button onClick={() => sendMessage("e2e4")}></button>
        <WebSocket
          url="ws://localhost:8080/websocket"
          onMessage={handleData}
          onOpen={handleOpen}
          onClose={handleClose}
          reconnect={true}
          debug={true}
          ref={(ref) => (refWebSocket = ref)}
        />
      </div>
    );
  

}
