'use strict'



var express = require('express');
var app = express();
var mcache = require('memory-cache');

//app.set('view engine', 'jade');

var cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}

app.get('/', cache(10), (req, res) => {
  setTimeout(() => {
    res.render('index', { title: 'Hey', message: 'Hello there', date: new Date()})
  }, 5000) //setTimeout was used to simulate a slow processing request
})

app.get('/user/:id', cache(10), (req, res) => {
  setTimeout(() => {
    if (req.params.id == 1) {
      res.json({ id: 1, name: "John"})
    } else if (req.params.id == 2) {
      res.json({ id: 2, name: "Bob"})
    } else if (req.params.id == 3) {
      res.json({ id: 3, name: "Stuart"})
    }
  }, 3000) //setTimeout was used to simulate a slow processing request
})

app.use((req, res) => {
  res.status(404).send('') //not found
})

app.listen(process.env.PORT, function () {
  console.log(`Cache Server listening for incoming connection requests. ${process.env.PORT} ||6969`)
})




//translation 




var net = require('net');

var HOST = process.env.HOST||'127.0.0.1';
var PORT =  process.env.PORT||6969;


net.createServer(function(sock) {
    
    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) {
        
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to the socket, the client will receive it as data from the server
        sock.write(data);
        
    });
    
    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });
    
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
