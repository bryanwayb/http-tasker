var http = require('http');
var url = require('url');

exports.createServer = function(tasks, onError) {
	var taskProcessors = [];

	return http.createServer(function(request, response) {
		try {
			var parsedUrl = url.parse(request.url, true);
			var taskAction = decodeURIComponent(parsedUrl.pathname).trim();
			
			if(!(taskAction in tasks))
			{
				throw 'Requested task \'' + taskAction + '\' does not exist';
			}
			else if(!(taskAction in taskProcessors))
			{
				taskProcessors[taskAction] = tasks[taskAction]();
			}
			
			var requestBody = '';
			request.on('data', function (data) {
				requestBody += data;
			});
			
			request.on('end', function () {
				response.writeHead(200);
				response.end(taskProcessors[taskAction](request, response, parsedUrl, requestBody));
			});
		}
		catch(e) {
			response.writeHead(500);
			response.end(onError === undefined ? undefined : onError(request, response, e));
		}
	});
};
