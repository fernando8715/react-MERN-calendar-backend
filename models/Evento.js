const { Schema, model } = require('mongoose');

const EventoSchema = new Schema({
    title: {
        type: String,
        require: true,
    },

    note: {
        type: String,
        require: true,
    },

    start: {
        type: Date,
        require: true,
    },

    end: {
        type: Date,
        require: true,
    },

    // ? Obtener la referencia del id del usuario
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },

})

module.exports = model('Evento', EventoSchema);