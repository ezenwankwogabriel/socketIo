const path = require('path');
const http = require('http');
const express	= require('express');
const socketIO = require('socket.io');

// import index from  './../public/index.html'

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function(socket){
	console.log('user connected');

		socket.emit('newEmail', {from: 'gabby@mailinator.com', text: 'dont fuck urself today', createdAt: 123})
		socket.on('createEmail', function(createEmail){
			console.log(createEmail)
		})





		socket.on('disconnect', function(){
		console.log('disconnected connected')
	});


});





server.listen(port, ()=>{
	console.log(`Server is up on ${port}`)
})
 

