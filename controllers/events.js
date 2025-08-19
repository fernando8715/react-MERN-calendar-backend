const {response} = require('express');
const Evento = require('../models/Evento');

const getEventos = (req, res = response)=> {

    
    
    return res.status(200).json({
        ok: true,
        msg: 'mostrar eventos',
    })
}

const crearEvento = async (req, res = response)=> {
    
    const evento = new Evento(req.body);
    
    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save();
        await evento.save();        

        return res.status(200).json({
            ok: true,
            evento: eventoGuardado,
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