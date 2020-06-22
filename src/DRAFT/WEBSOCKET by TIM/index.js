var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const fs = require('fs');

app.get('/', (req, res) => {
  fs.readFile('innerhtml.html', 'utf-8', (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('myfile does not exist');
        return;
      }
  
      throw err;
    }


    res.send(fd);
  });
  
  
});

const allMess = [];

io.on('connection', (socket) => {
	console.log('a user connected');
	const history = [...allMess];
	history.length = 20;
	socket.emit('chat message', history.map(_=>`<li>${_}</li>`).join(''));
	
	socket.on('chat message', (message) => {
		//console.log('chat message', message);
		allMess.push(message);
		socket.broadcast.emit('chat message', `<li>${message}</li>`);
	});
	
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});