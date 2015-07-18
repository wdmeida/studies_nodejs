var http = require('http');

//Cria um servidor em node ouvindo conexões na porta 3000.
var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello World!</h1>");
	response.end();
});

server.listen(3000, function(){
	console.log('Servidor Hello World rodando!');
});