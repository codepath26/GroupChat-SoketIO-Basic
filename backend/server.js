const app = require('express')();
const server = require('http').Server(app);
const path = require('path');
let roomno = 1 ;
const io = require('socket.io')(server);

//  here is the error bro
// let cnsp = io.of('/customnamespace');
// cnsp.on('connection', (socket)=>{
// socket.join(`room-${roomno}`);
// io.sockets.in(`room${roomno}`).emit('connectionroom' , "new you are inthe room")
//   socket.on('disconnect' ,()=>{
//     console.log('user disconnected')
//   })
// })

io.on('connection' ,(socket)=>{
  socket.join(`room-${roomno}`);
  io.sockets.in(`room-${roomno}`).emit('connectinroom' , "You are connected to room no -" + roomno);
  socket.on('disconnect' , ()=>{
    console.log('User is disconnected')
  })
})


app.get('/', (req, res) => {
  const option = {
    root: path.join(__dirname),
  };
  const filename = 'index.html';
  res.sendFile(filename, option);
});



server.listen(3000, () => {
  console.log("server ready on port 3000");
});
