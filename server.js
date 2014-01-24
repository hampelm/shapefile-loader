var express = require('express');
var shapefile = require('shapefile');

var app = express();

app.get('/data', function(req, res){

  var stream = shapefile.readStream('data/output.shp');

  res.setHeader('Content-Type', 'text/html');

  stream.on('feature', function(f) {
    console.log(f);
    res.write(JSON.stringify(f));
  });

  stream.on('end', function() {
    res.end();
  });
});

app.listen(5555);
console.log('Listening on port 5555');
