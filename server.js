var express = require('express');
var app = express();

app.get('/hello', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
});

app.listen(5555);
console.log('Listening on port 5555');
