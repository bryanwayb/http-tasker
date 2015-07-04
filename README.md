[![Latest Release Version](https://img.shields.io/github/release/bryanwayb/http-tasker.svg)](https://github.com/bryanwayb/http-tasker/releases) [![Latests Development Version](https://img.shields.io/github/tag/bryanwayb/http-tasker.svg?label=dev)](https://github.com/bryanwayb/http-tasker/tags) [![Codacy Grade](https://img.shields.io/codacy/86865fef7370487e901b766a407c501c.svg)](https://www.codacy.com/app/bryanwayb/http-tasker) [![Open Issues](https://img.shields.io/github/issues/bryanwayb/http-tasker.svg)](https://github.com/bryanwayb/http-tasker/issues)

`http-tasker` is a very small and lightweight tasking service library utilizing the `http` module. It's primary use is to provide a shortcut for mapping URL paths to functions. Useful for API building, scheduling scripts, etc...

Installation
--

```bash
npm install http-tasker
```

Example
--
Use of the library is really simple:

```javascript
var httpTasker = require('http-tasker');
	httpTasker.createServer({
	'/test': function() { // Requests made to the path '/test' will trigger this
		// The initialization function - perform any setup here
		return function(method, query, requestBody) { // Return the function that does the processing
			return 'Response String'; // Return a response from here (not required)
		};
	}
}, function(e) { // Used for custom error formatting when a server error occurs
	return e; // For simplicity, return just the error string. Would be good to change this in use (or omit completely).
}).listen(1337, '127.0.0.1'); // Returns an instance of http.Server
```

Testing
--
The above example is configured as a `npmjs` testing script. Running

```bash
npm test
```

will start the HTTP server. By default the test is setup to run on `127.0.0.1:1337`, so to view the example task navigate to http://127.0.0.1:1337/test while the server is running.
