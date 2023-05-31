import { WebSocket } from 'ws';

// Connect to the Nginx reverse proxy
const ws1 = new WebSocket('ws://localhost:8080/responder-1');

// Log messages received from the WebSocket servers
ws1.on('message', (message) => {
  console.log(`Received from server 1: ${message}`);
});

// Wait for the connections to be established
ws1.on('open', () => {
  // Send a message to server 1
  ws1.send('Hello server 1!');
});
