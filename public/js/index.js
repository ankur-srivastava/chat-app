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
  var text = message.from+':'+message.text;
  var node = document.createElement("LI");
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.getElementById("messages").appendChild(node);
});

/*To handle acknowledgements add a third argument*/
function sendMessage(){
  var formText = document.getElementById('messageText').value;
  if(formText != ''){
    socket.emit('createMessage', {
      from: 'User',
      text: formText
    });
  }else{
    alert('Enter a Valid Value');
  }
}
