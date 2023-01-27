const http = require('http');

http.createServer( (request, resp) => {
    //console.log(request);

    //resp.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //resp.writeHead(200, {'Content-type': 'application/csv'});

    // const persona = {
    //     id:1,
    //     nombre: 'Jahel'
    // }

    resp.write('Hola mundo ');
    resp.end();

})
.listen(8081);

console.log('Escuchando el puerto', 8081);