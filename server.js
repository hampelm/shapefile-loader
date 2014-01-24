var express = require('express');
var shapefile = require('shapefile');

var app = express();

app.get('/data', function(req, res){
  var stream = shapefile.readStream('data/output.shp');

  // Todo: use socket.io instead
  res.setHeader('Content-Type', 'application/json');

  stream.on('feature', function(f) {
    res.write(JSON.stringify(f));
  });

  stream.on('end', function() {
    res.end();
  });
});

app.listen(5555);
console.log('Listening on port 5555');
