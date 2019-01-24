var exec = require('child_process').exec;
var command1 = 'ls'
exec(command1,function(err,stdout,stderr){
	console.log("stdout",stdout);//actual output
	console.log("stderr",stderr);//error
})
/*****************************************************/
var shell = require('shelljs');
var command2 = 'pwd';
shell.exec(command2);