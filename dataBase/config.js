const mongoose = require('mongoose');


const dbConection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN);

        console.log('db online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexión a la base de datos')
    }
}

module.exports = {
    dbConection
}
