////https connection
// const https = require('https').createServer({
//     key: fs.readFileSync('/etc/letsencrypt/live/'+conf.get("infra_domain")+'/privkey.pem'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/'+conf.get("infra_domain")+'/fullchain.pem'),
//     ca: fs.readFileSync('/etc/ec/certs/cloudca/cloudca-crt.pem'),
//     requestCert: true, 
//     rejectUnauthorized: true
// });
//http connection
const https = require('http').createServer();
const io = require('socket.io')(https);
const socket_port =8005
var MAP={}
https.listen(socket_port, () => console.log(`server listening on port: ${socket_port}`))

io.on('connection', (socket) => {
    console.log('connected')
    MAP[socket.handshake.query.edge_id]=socket.id;
    console.log("MAP",MAP);
    //send response to client which was connected 
    socket.emit("message","Response to specific client")
    //send response to all connected clients
    io.emit("message","Response to all client")

    //GET response from client
    socket.on("message",function(evt){
        console.log("evt",evt)
    })
})


//Disconnect server
io.on('disconnect', (evt) => {
   D && console.log('disconnected')
})