//importar librerias
//Express es una aplicación web flexible de Node.JS que tiene muchas características para aplicaciones web y móviles.
const express = require('express');
//Body parser es un paquete que se puede utilizar para manejar solicitudes JSON.
const bodyParser = require('body-parser');
//Mongoose es un ODM (object data modeling) de mongoDB para Node.JS.
const mongoose = require('mongoose');
var path = require('path');

//importar rutas
//ruta para la collecion de usuario
var router = require('./routes/routes.js')
const usuario = require('./routes/usuario.route');

//inicializar la aplicaccion express
var app = express();

//Use de archivos ejs para tener plantillas EN FRONT-END
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

//Conexion a la base de datos MongoDB
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
// Usamos el método connect para conectarnos a nuestra base de datos
//mongoose.connect('mongodb+srv://aquino:sassuke123@clusterguia-5yasn.mongodb.net/test?retryWrites=true',  { useNewUrlParser: true})
mongoose.connect('mongodb://aquinovo:aquino123@ds131763.mlab.com:31763/guia',  { useNewUrlParser: true})
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos se ha realizado correctamente")
    })
    // Si no se conecta correctamente escupimos el error
    .catch(err => console.log(err));


//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({ extend: false}));
app.use(bodyParser.json());

//Agreagar rutas
app.use('/', router);
app.use('/usuarios',usuario);

module.exports=app;