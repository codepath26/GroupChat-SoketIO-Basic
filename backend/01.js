const app = require('express')();
const server = require('http').Server(app);
const path = require('path');
let users = 0 ;
const io = require('socket.io')(server);
// this is use for the preserved namespace '/'
// io.on('connection', (socket) => {
//   console.log("user is joined");
//    users++;

//    //this is for the all user but
//   //  io.sockets.emit('broadcast' , {message :`${users} users connected`   })

//   // this is for
//   socket.emit('newuserconnect',{message : 'Welcome User...'})
//   socket.broadcast.emit('newuserconnect',{message :`${users} users connected`})
//   socket.on('disconnect', () => {
//     users--;
//     socket.broadcast.emit('newuserconnect',{message :`${users} users connected`})
//     // io.sockets.emit('broadcast' ,{message :`${users} users connected`   })
//     console.log("user is disconnected");
//   });
// });





//  for the custom namespace 
let cnsp = io.of('/customnamespace');
cnsp.on('connection', (socket)=>{
  users++;
  socket.emit('newuserconnect' , {message : "welcome buddy.."})
  socket.broadcast.emit('newuserconnect',{message : `${users} users connected`})
  socket.on('disconnect' ,()=>{
    users--;
    socket.broadcast.emit('newuserconnect',{message : `${users} users connected`})
    console.log('user disconnected')
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
