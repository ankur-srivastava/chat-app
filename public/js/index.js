//Initiate a connection request
//Open a connection with web socket and keep that open
var socket = io();

socket.on('connect', ()=>{
  console.log('Connected to the Server');
});

socket.on('disconnect', ()=>{
  console.log('Disconnected');
});

//Custom Event

socket.on('newMessage', (message)=>{
  console.log('Message from server', message);
});

/*To handle acknowledgements add a third argument*/
socket.emit('createMessage', {
  from:'Client',
  text:'When is the party'
}, function(data){
  console.log(data);
});
