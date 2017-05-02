const fs = require('fs');

fs.appendFile('greetings.txt', 'Hello world!', function(err){
	if(err){
		console.log('unable to write file');
	}
});