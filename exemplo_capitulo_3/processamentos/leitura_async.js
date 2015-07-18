//Importa o módugo de manipulação de arquivos
var fs = require('fs');

var leituraAsync = function(arquivo){
	console.log("Fazendo leitura assíncrona");
	var inicio = new Date().getTime(); //Obtém a hora de inicio da leitura.
	fs.readFile(arquivo);
	var fim = new Date().getTime();	//Obtém a hora de término da leitura.
	console.log("Bloqueio assíncrono: " + (fim - inicio) + " ms");	
};

module.exports = leituraAsync;