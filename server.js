var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(4000, function() {
  console.log('Express server is on port 4000');
})