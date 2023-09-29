
  // Your socket.io code here

  const socket = io('http://localhost:3000', {
    reconnection: false,
  });

  
  console.log(socket)
  socket.on('connect' , ()=>{
    console.log('connected event is fired')

  })
 socket.on('message' , (data)=>{
  console.log(data)
 })
 socket.on('id',(data)=>{
  console.log(data)
 })

