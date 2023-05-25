
import React, { useState, useEffect, useRef } from 'react';
import WebSocket from 'react-websocket';


export default function Server({onMessage, refWebSocket}) {

    //let refWebSocket = useRef(null);

 function handleData(data) {
    onMessage(data);
    console.log('Received:', data);
  }

  function handleOpen() {
    console.log('WebSocket connection established');
    
  }

  function handleClose() {
    console.log('WebSocket connection closed');
  }

  function sendMessage(message) {
    refWebSocket.sendMessage(message);
  }

  
    return (
        
      <div>

      </div>
    );
  

}
