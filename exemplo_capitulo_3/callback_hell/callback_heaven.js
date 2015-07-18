var fs = require('fs');

//Realiza a leitura de arquivos de um diretório sem realizar o encadeamento de funções assíncronas sucessivas.
var lerDiretorio = function(){
	fs.readdir(__dirname, function(erro, diretorio){
		if(erro) return erro;
		diretorio.forEach(function(arquivo){
			ler(arquivo);
		});
	})	
};

var ler = function(arquivo){
	var path = './' + arquivo;
	fs.stat(path, function(erro, stat){
		if(erro) return erro;
		if(stat.isFile()){
			console.log('%s %d bytes', arquivo, stat.size);
		}
	});	
};

lerDiretorio();