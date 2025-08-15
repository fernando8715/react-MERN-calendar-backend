const {response} = require('express');
const Evento = require('../models/Evento');

const getEventos = (req, res = response)=> {

    
    
    return res.status(200).json({
        ok: true,
        msg: 'mostrar eventos',
    })
}

const crearEvento = (req, res = response)=> {
    
    // console.log(req.body);

    try {
        
        return res.status(200).json({
            ok: true,
            msg: 'usuario creado exitosamente'
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No fue posible crear el evento'
        })
    }

}

const actualizarEvento = (req, res = response)=> {

    try {
        
        return res.status(200).json({
            ok: true,
            msg: 'evento actualizado exitosamente'
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No fue posible actualizar el evento'
        })
    }
}

const eliminarEvento = (req, res = response)=> {

    try {
        
        return res.status(200).json({
            ok: true,
            msg: 'Evento eliminado con exito'
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No fue posible eliminar el evento'
        })
    }

}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}