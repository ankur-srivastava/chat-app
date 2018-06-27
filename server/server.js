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

var httpServer = http.createServer(app);
var io = socketIO(httpServer);

//app.listen(port, ()=>{
httpServer.listen(port, ()=>{
  console.log('Server is up at port', port);
});
