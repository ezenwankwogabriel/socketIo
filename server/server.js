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

//socket.emit emits an event to a single connection
//io.emit emits an event to every single connection
io.on('connection', function(socket){
	console.log('user connected');


		socket.on('createEmail', (message)=>{
			console.log(message)
			io.emit('newMessage', {
				from: message.from,
				text: message.text, 
				createdAt: new Date().getTime()
			})
		})


		socket.on('disconnect', function(){
		console.log('disconnected connected')
	});


});





server.listen(port, ()=>{
	console.log(`Server is up on ${port}`)
})
 

