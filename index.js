const express = require('express');
require('dotenv').config();


// * crear servidor express
const app = express();

// ? Directorio publico
app.use(express.static('public'));

// * mostrar la informacion o parseo del body
app.use(express.json());

// ! rutas
// todo: auth // crear, login, renova token
app.use('/api/auth', require('./routes/auth'));
// todo: CRUD: eventos

// * escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
    
});