var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var path = require('path');
var fs = require('fs');

app.post('/create/:name/:age', function(req, res) {

  let personObject = {
    "name": req.params.name,
    "age" : req.params.age
  }
  let storage = fs.readFileSync(path.join(__dirname + '/storage.json')).toString()
  storage += JSON.stringify(personObject)
  fs.writeFileSync(path.join(__dirname + '/storage.json'), storage)
  res.send("good")
});

app.get('/', function(req, res) {
  res.send(fs.readFileSync(path.join(__dirname + '/storage.json')).toString());
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
