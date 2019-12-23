var http = require('http');
var fs = require('fs');
var url = require("url");

http.createServer(function(req,res){
	var q = url.parse(req.url,true);
	var fileName = '.' + q.pathname;

	if (fileName == './') {fileName = './index'}

        fileName = fileName + '.html';

	fs.readFile(fileName,function(error,data){
		if (error) {
            res.writeHead(404, {'content-type' : 'text/html'});
            console.log(error);
            return res.end('404 Not Found!');
		}
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(data);
        console.log("....incoming request" + req.url);
        return res.end();
})
}).listen(8080);

console.log('Server Listening on port....')