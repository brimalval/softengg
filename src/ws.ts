const socket = require('ws');

const websocket_server = new socket.Server({ noServer: true });

websocket_server.on('connection', function connection(socket) {
  socket.on('message', message => console.log(message));
});

module.exports = websocket_server;
