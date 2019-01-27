//npm install edit-json-file
var editJSONFile = require('edit-json-file');
var path = editJSONFile('file.json')
var read = require('read');

console.log("Enter 1 for ADD data into the file");
console.log("Enter 2 for REMOVE data from the file");
read({prompt:'Enter Your choice',silent:false},function(err,choice){
	switch(choice){
		case '1':
			read({prompt:"Enter the key",silent:false},function(err,key){
				read({prompt:'Enter the value1 ',silent:false},function(err,value1){
					read({prompt:'Enter the value2',silent:false},function(err,value2){
						path.set(key,{'value1':value1,'value2':value2});//to add values into the json file
						path.save();//to save changes
						console.log("The entry "+key+" is successfully added in to the file");
					});
				});
			});
			break;
		case '2':
			var data = path.get();//to get informations from the json file 
			console.log("List of keys in file");
			for(var d in data ){
				console.log(d);
			}
			read({prompt:'Enter any one key to REMOVE',silent:false},function(err,key){
				path.unset(key);//to remove data entry from the file
				path.save();//to save changes
				console.log(" The entry "+key+" is successfully removed from the file");
			});
			break;
		default :
			console.log("Enter the right choice");
			break;
	}
})
		