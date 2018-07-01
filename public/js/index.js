//Initiate a connection request
//Open a connection with web socket and keep that open
var socket = io();

socket.on('connect', ()=>{
  console.log('Connected to the Server');

  socket.emit('createMessage', {
    from:'browser1',
    text:'When is the party'
  });
});

socket.on('disconnect', ()=>{
  console.log('Disconnected');
});

//Custom Event

socket.on('newMessage', (message)=>{
  console.log('Message from server', message);
});
