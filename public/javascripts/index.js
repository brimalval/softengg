const ws = new WebSocket('ws://localhost:3000');
ws.onopen = function (event) {
    ws.send('Hello');
};
//# sourceMappingURL=index.js.map