const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

/*Use the path module to access public directory*/
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

app.get('/', (req,res)=>{

});
/*Using HTTP Server instead of express server*/
var httpServer = http.createServer(app);

/*
  Get the web socket server for client server communication
  This makes a set of libraries available at http://localhost:3000/socket.io/socket.io.js
  In index.html we make use of javascript functions available in socket.io/socket.io.js to open connection with server.
*/
var io = socketIO(httpServer);

/*When the client hits the server by accessing URL localhost:3000*/
io.on('connection', (socket)=>{
  console.log('new user connected');

  //When browser closes
  socket.on('disconnect', ()=>{
    console.log('Browser Closed');
  });

  //Custom event

  socket.on('createMessage', (message)=>{
    console.log('Message received from client', message);

    //Broadcast to all
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      date: new Date().getTime()
    });
  });

});

//app.listen(port, ()=>{
httpServer.listen(port, ()=>{
  console.log('Server is up at port', port);
});
