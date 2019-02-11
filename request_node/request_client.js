var request = require('request');
var fs = require('fs');

var postData = {
	'file':fs.createReadStream('sample.txt'),
	'id'  :101
}

var id = 1000;

//Post 
request.post({url:"http://localhost:4000/api",formData:postData},function optionalcallback(err,http_request,body){
	if(err) console.log("Communication error",err);
	if(body){
		console.log("server response",body);
	}
})

//Get

request.get({url:"http://localhost:4000/"+id},function optionalcallback(err,http_request,body){
	if(err) console.log("error",err);
	if(body) console.log('response',body);
})

//Delete
request.delete({url:"http://localhost:4000/"+id},function optionalcallback(err,http_request,body){
	if(err) console.log("error",err);
	if(body) console.log('response',body);
})

//
request.put({url:"http://localhost:4000/"+id},function optionalcallback(err,http_request,body){
	if(err) console.log("error",err);
	if(body) console.log('response',body);
})
