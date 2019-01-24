var read =require('read');

read({prompt :'Enter Your Name:',silent:false},function(err,name){
	read({prompt:'Enter the password',silent:true},function(err,password){
		console.log("Name",name);
		console.log('password',password);
	})
});