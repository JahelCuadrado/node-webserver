const express = require('express');  //TODO 0: Importar express
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//TODO require hbs Handlebars
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

//Servir contenido estatico
app.use(express.static('public'));


//TODO 1: Crear rutas en express

//ruta principal
app.get(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Jahel',
    titulo: 'Soy yooo'
  })
});



//ruta generic
app.get('/generic', (req, res) => {
  res.render('partials/generic')
});

//ruta elements
app.get('/elements', (req, res) => {
  res.render('partials/elements');
});

//ruta hola-mundo
app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su respectiva ruta')
});

//cualquier ruta no especificada
app.get('*', (req, res) => {
  res.render('partials/404'); //Enviar un html
});

//Declaramos el puerto en el que está el servidor
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })