var express = require('express');
var app     = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());//To receive json contents

const fileUpload = require('express-fileupload');//To receive file contents
app.use(fileUpload());

var port = 4000;

app.post('/api',function(req,res){
	console.log("req_body",req.body);
	console.log("Multipart_files",req.files);
	res.status(200).send("POST call success!");
})

app.get('/:path',function(req,res){
	console.log('req_params',req.params);
	res.status(200).send("GET call success!")
})

app.delete('/:path',function(req,res){
	console.log('req_params',req.params);
	res.status(200).send("DELETE call success!")
})

app.put('/:path',function(req,res){
	console.log('req_params',req.params);
	res.status(200).send("PUT call success!")
})

app.listen(port);
console.log('server listening on port '+port);