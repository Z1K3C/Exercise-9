//Inicializo mi servidor usando express

const express = require('express');                     //Solicito Express
const app = express();                                  //Instancio a Express

//Settings
app.set('port',process.env.PORT || 3000);               //Declaro una variable con el numero del puerto

//Middlewares
app.use(express.json());                                //Uso el middleware para interpretar JSONs

//Routes URLs
app.use(require('./routess.js'));                       //Solicito las rutas de mi JS de routess

//Starting server
app.listen(app.get('port'), function(){
    console.log('server on port',app.get('port'));      //Imprimo en pantalla el status del servidor
});