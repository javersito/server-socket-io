var cool = require('cool-ascii-faces');
var express = require('express');
var socketIO = require('socket.io');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/socket-runing', function(request, response) {
  //response.send(cool());
console.log("entro aqui...");
socketIO.on('connection', function (socket) 
{   
	 socket.on('sendqr', function (data) 
     {
       console.log(data);
       alert(data);
    });
});

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});