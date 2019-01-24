var dns = require('dns');

var hostname = 'localhost'

dns.lookup(hostname,function(err,ipaddress){
	console.log('ipaddress',ipaddress);
})