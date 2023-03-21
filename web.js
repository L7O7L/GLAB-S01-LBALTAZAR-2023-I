var http = require('http');
fs = require('fs');

http.createServer(function(req, res){

    if (req.url == '/servicios.html') {

        fs.readFile('./servicios.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/nosotros.html') {

        fs.readFile('./nosotros.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }

    if (req.url == '/contactenos.html') {

        fs.readFile('./contactenos.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/catalogo_clientes.html') {

        fs.readFile('./catalogo_clientes.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/') {

        fs.readFile('./inicio.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }

}).listen(8080);


