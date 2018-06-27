const path = require('path');
const express = require('express');

/*Use the path module to access public directory*/
const publicPath = path.join(__dirname, '../public');
const port = 3000;

var app = express();
app.use(express.static(publicPath));

app.get('/', (req,res)=>{
  //res.sendFile(publicPath+'/index.html');
});

app.listen(port, ()=>{
  console.log('Server is up at port', port);
});
