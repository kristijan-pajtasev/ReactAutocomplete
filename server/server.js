var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var messages = [];

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/*
app.post('/send', function(req, res){
  var message = {
  	message: req.body.message,
  	sender: req.body.sender,
  	created: new Date().getTime()
  }
  messages.push(message);
  res.send({ status: "success", payload: message });
});

app.get("/messages", function(req, res) {
	res.send({ status: "success", messages: messages.sort(function(a, b) { return a.created > b.created; }) });
});
*/
app.listen(3000);