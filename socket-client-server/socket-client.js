var edge_id ='062bfafcd4e6516c';
var port=8005;
////https connection
// var socket = require('socket.io-client')('https://'+domain_conf.get('secure_host_url')+':'+port+'?edge_id='+edge_id,{
// 	key: fs.readFileSync(conf.get("enact_path")+'/client-key.pem'),
//     cert: fs.readFileSync(conf.get("enact_path")+'/enact-crt.pem')
// })
//http connection
var socket = require('socket.io-client')('http://localhost:'+port+'?edge_id='+edge_id);


socket.on('disconnect', ()=> {
    console.log('=== end chatting ===');
});
  
socket.on('connect', () => {
console.log('=== start chatting ===');
})

socket.on('message', (body) => {
    console.log("message",body)
})

