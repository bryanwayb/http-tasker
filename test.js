var httpTasker = require('./index.js');

httpTasker.createServer({
	'/test': function() {
		// The initialization function. Perform task setup here. Returns the function that does the actual processing.
		return function(method, query, requestBody) {
			return 'Congrats! This task has been configured, loaded, and executed correctly';
		};
	}
}, function(e) { // Used for custom error formatting when a server error occurs
	return e;
}).listen(1337, '127.0.0.1');
