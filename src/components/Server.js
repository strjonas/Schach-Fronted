
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';


export default function Server() {
    const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io('ws://localhost:8080'); // Replace with your server URL

    socketRef.current.on('connect', () => {
      console.log('Connected to the server');
      socketRef.current.emit('subscribe', '/topic/greetings'); // Replace 'channel1' with the desired channel name
    });

    socketRef.current.on('message', (channel, message) => {
      console.log(`Received message on channel ${channel}:`, message);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleClick = () => {
    socketRef.current.emit('message', '/app/hello', 'Hello from the client!'); // Replace 'channel1' with the desired channel name
  };

  return (
    <div><button onClick={handleClick}>Send Hello</button>Server</div>
  )
}
