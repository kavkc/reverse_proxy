import { WebSocket } from 'ws';

// Connect to the Nginx reverse proxy
const ws2 = new WebSocket('ws://localhost:8081/responder-2');

// Log messages received from the WebSocket servers
ws2.on('message', (message) => {
  console.log(`Received from server 2: ${message}`);
});

// Wait for the connections to be established
ws2.on('open', () => {
  // Send a message to server 1
  ws2.send('Hello server 1!');
});
