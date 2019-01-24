var data = {info1 : {name : 'anu',id:106},info2:{name: 'ramana',id:108},info3:{name:'madhu',id:890}}


var name1 = 'info1';
for(apps in data){
	console.log('apps',data[apps]);
	console.log('apps_name',data[apps].name);
	console.log('apps_id',data[apps].id);
}