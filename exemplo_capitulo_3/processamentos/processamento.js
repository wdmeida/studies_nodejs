//Importa os módulos e define as váriáveis utilizadas no teste.

var http = require('http');
var fs = require('fs');
var leituraAsync = require('./leitura_async');
var leituraSync = require('./leitura_sync');
var arquivo = "./node.exe";
var stream = fs.createWriteStream(arquivo);
var download = "http://nodejs.org/dist/latest/node.exe";

//Realiza o download do arquivo.
http.get(download, function(res){
	console.log("Fazendo download do Node.js");
	res.on('data', function(data){
		stream.write(data);
	});
	
	//Realiza o teste de leitura assíncrona e síncrona do arquivo baixado.
	res.on('end', function(){
		stream.end();
		console.log("Download finalizado!");
		leituraAsync(arquivo);
		leituraSync(arquivo);
	});
});