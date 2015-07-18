var fs = require('fs');

//Usa chamadas de funções encadeadas para realizar a leitura de um diretório. (Exemplo de cono não fazer)
fs.readdir(__dirname, function(erro, contents){
	if(erro){ throw erro; }
	contents.forEach(function(content){
		var path = './' + content;
		fs.stat(path, function(erro, stat){
			if(erro){ throw erro; }
			if(stat.isFile()){
				console.log('%s %d bytes', content, stat.size);
			}
		});
	});
});