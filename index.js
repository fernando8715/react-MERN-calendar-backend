const path = require('path')

const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { dbConection } = require('./dataBase/config');


// * crear servidor express
const app = express();

// * conexion a la base de datos
dbConection();

// * CORS
app.use(cors())

// ? Directorio publico
app.use(express.static('public'));

// * mostrar la informacion o parseo del body
app.use(express.json());

// ! rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// ! ruta statica
app.use('{/*splat}', (req, res) => {
    res.sendFile(path.join( __dirname, 'public/index.html'));
})


// * escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);

});