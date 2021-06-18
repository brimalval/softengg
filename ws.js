const WebSocket = require('ws');

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', function connection(ws) {
  ws.on('message', message => console.log(message));
});

module.exports = wss;
