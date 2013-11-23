var express = require('express');
var app = express();

// Configure express server
app.configure(function() {
   app.use(express.static(__dirname + '/'));
});

// Routes
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/test.html');
});

app.listen(3000);
