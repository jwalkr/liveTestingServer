// // 'use strict'



// // var express = require('express');
// // var app = express();
// // var mcache = require('memory-cache');

// // //app.set('view engine', 'jade');

// // var cache = (duration) => {
// //   return (req, res, next) => {
// //     let key = '__express__' + req.originalUrl || req.url
// //     let cachedBody = mcache.get(key)
// //     if (cachedBody) {
// //       res.send(cachedBody)
// //       return
// //     } else {
// //       res.sendResponse = res.send
// //       res.send = (body) => {
// //         mcache.put(key, body, duration * 1000);
// //         res.sendResponse(body)
// //       }
// //       next()
// //     }
// //   }
// // }

// // app.get('/', cache(10), (req, res) => {
// //   setTimeout(() => {
// //     res.render('index', { title: 'Hey', message: 'Hello there', date: new Date()})
// //   }, 5000) //setTimeout was used to simulate a slow processing request
// // })

// // app.get('/user/:id', cache(10), (req, res) => {
// //   setTimeout(() => {
// //     if (req.params.id == 1) {
// //       res.json({ id: 1, name: "John"})
// //     } else if (req.params.id == 2) {
// //       res.json({ id: 2, name: "Bob"})
// //     } else if (req.params.id == 3) {
// //       res.json({ id: 3, name: "Stuart"})
// //     }
// //   }, 3000) //setTimeout was used to simulate a slow processing request
// // })

// // app.use((req, res) => {
// //   res.status(404).send('') //not found
// // })

// // app.listen(process.env.PORT, function () {
// //   console.log(`Cache Server listening for incoming connection requests. ${process.env.PORT} ||8000`)
// // })




// //translation 







// // net.createServer(function(sock) {
    
// //     // We have a connection - a socket object is assigned to the connection automatically
// //     console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
// //     // Add a 'data' event handler to this instance of socket
// //     sock.on('connect', function(data) {
// //         const token = `<?xml version="1.0" encoding="ISO-8859-1"?> <cookie VALUE="UXCKB1TAIS7XT6"/>`
// //         const serverInfo = Buffer.from(data)
// //         console.log(serverInfo)
// //         console.log('DATA ' + sock.remoteAddress + ': ' + data);
// //         // Write the data back to the socket, the client will receive it as data from the server
// //        console.log('written token' + token)
// //         sock.write(token);
// //         sock.destroy()
       
        
// //     });
    
// //     // Add a 'close' event handler to this instance of socket
// //     sock.on('end', function(data) {
// //         console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
// //     });
    
// // }).listen(PORT, HOST);

// // console.log('Server listening on ' + HOST +':'+ PORT);



// ///1111111
// // const token = `<?xml version="1.0" encoding="ISO-8859-1"?> <cookie VALUE="UXCKB"/>`
// // const server = net.createServer((server) => {
// //   console.log('client connected')
// //   server.on('end' , () => {
    
// //     console.log('client disconnected')
// //   })

// //   server.on('connections' , function(data){

// //     console.log(data);
// //     console.log(data)
    
// //     console.log(server.write(token))
// //   })
  
// //   // server.pipe(server)
// // })



// // server.on('error' , (err) => {
// //   throw err;
// // })

// // server.listen(8000 , () => {
// //   console.log('server bound')
// // })





// // var net = require('net');

// // var HOST = process.env.HOST||'127.0.0.1';
// // var PORT =  process.env.PORT|8000;



// // var server = net.createServer(function(socket) {
// //   socket.setTimeout(3000)
// //   const token = `<?xml version="1.0" encoding="ISO-8859-1"?> <cookie VALUE="UXCKB1TAIS7XT6"/>`

// //   socket.on('data' , function(data){
// //      console.log('Received Data'+ data)
// //      socket.write(token)
// //      socket.destroy()
// //   })

// //   socket.on('timeout' , () => {
// //     console.log('socket Timeount')
// //     socket.end()
// //   })
  
	
// // });

// // server.listen( PORT , HOST);


// const token = `<?xml version="1.0" encoding="ISO-8859-1"?> <cookie VALUE="UXCKB1TAIS7XT6"/>`
// var net = require('net');

// var HOST = process.env.HOST||'127.0.0.1';
// var PORT =  process.env.PORT||8000;


// //333333

// // net.createServer(function(sock) {
    
// //     // We have a connection - a socket object is assigned to the connection automatically
// //     console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
// //     // Add a 'data' event handler to this instance of socket
// //     sock.on('data', function(data) {
        
// //         console.log('DATA ' + sock.remoteAddress + ': ' + data);
// //         console.log(data.length);
// //         console.log(data.toString());
// //         sock.write(token);
// //         sock.destroy();
 


        
// //     });
    
// //     // Add a 'close' event handler to this instance of socket
// //     // sock.on('close', function(data) {
// //     //     console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
// //     // });
    
// // }).listen(PORT, HOST);

// // console.log('Server listening on ' + HOST +':'+ PORT);


// net.createServer(function(sock) {
    
//   // We have a connection - a socket object is assigned to the connection automatically
//   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
  
//   // Add a 'data' event handler to this instance of socket
//   sock.on('data', function(data) {
      
//       console.log('DATA ' + sock.remoteAddress + ': ' + data);
//       // Write the data back to the socket, the client will receive it as data from the server
//       sock.write(token);
//       sock.destroy();
      
//   });
  
//   // Add a 'close' event handler to this instance of socket
//   sock.on('close', function(data) {
//       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
//   });
  
// }).listen(PORT, HOST);

// console.log('Server listening on ' + HOST +':'+ PORT);

// //121212121

const net = require('net')
const port = 8000
const host = '127.0.0.1'


const server = net.createServer()

server.listen(port , host, () => {
  console.log('Tcp server is running on port' + port + '.')
})

let sockets = []

server.on('connection' , function(sock){
   const token = `<?xml version="1.0" encoding="ISO-8859-1"?> <cookie VALUE="UXCKB1TAIS7XT6"/>`

  console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

  sockets.push(sock)

  sock.on('data' , function(data){
    console.log('DATA ' + sock.remoteAddress + ': ' + data);

    sockets.forEach(function(sock , index , array){
      sock.write(token);
      sock.destroy()
    })
  })

  sock.on('close' , function(data){
    let index = sockets.findIndex(function(o){
      return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort
    })
    if(index !== -1) sockets.splice(index , 1)
    console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
  })
})