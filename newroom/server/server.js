
  // Your socket.io code here
  const http = require('http');
  const server = http.createServer();
  const io = require('socket.io')(server ,{
    cors : {
    origin : ['http://127.0.0.1:5501']
  },
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
io.on('connection', (socket) => {
  socket.emit('id' , socket.id)
  console.log(`A client connected with ID: ${socket.id}`);
  socket.send('you are connnected bro')

});

