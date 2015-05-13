`http-tasker` is a very small and lightweight tasking service library utilizing the `http` module. It's primary use is to provide a shortcut for mapping URL paths to functions. Useful for API building, scheduling scripts, etc...

Installation
--
    $ npm install http-tasker

Example
--
Use of the library is really simple:

    var httpTasker = require('http-tasker');
	httpTasker.createServer({
		'/test': function() { // Requests made to the path '/test' will trigger this
			// The initialization function - perform any setup here
			return function(query, requestBody) { // Return the function that does the processing
				return 'Response String'; // Return a response from here (not required)
			};
		}
	}, function(e) { // Used for custom error formatting when a server error occurs
    	return e; // For simplicity, return just the error string. Would be good to change this in use (or omit completely).
    }).listen(1337, '127.0.0.1'); // Returns an instance of http.Server

Testing
--
The above example is configured as a `npmjs` testing script. Running

    npm test

will start the HTTP server. By default the test is setup to run on `127.0.0.1:1337`, so to view the example task navigate to http://127.0.0.1:1337/test while the server is running.