const { response } = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario')
const { generarJsonWebToquen } = require('../helpers/jwt')

const crearUsuario = async (req, res = response) => {

    const { email, password } = req.body;

    // * validar que no exista un usuario con el mismo email ingresado
    try {
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese email'
            })
        }

        // * proceso de creacion de un nuevo usuario

        usuario = new Usuario(req.body);

        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        const toquen = await generarJsonWebToquen(usuario.id, usuario.name);

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            toquen
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}


const login = async (req, res = response) => {

    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });

        // * verificar que el email ingresado corresponda con el email registrado en la base de datos
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'No hay usuarios registrados con el email ingresado'
            })
        }

        // * validar que el password ingresado sea correcto 

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña invalida'
            })
        }

        const toquen = await generarJsonWebToquen(usuario.id, usuario.name);

        res.status(200).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            toquen
        })

    } catch {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}


const revalidarToken = async (req, res = response) => {

    const uid = req.uid;
    const name = req.name;

    // * Generar token
    const token = await generarJsonWebToquen(uid, name);

    res.json({
        ok: true,
        msg: 'revalidar toquen',
        token
    })
}



module.exports = {
    crearUsuario,
    login,
    revalidarToken,
}