const { response } = require('express')
const { validationResult } = require('express-validator')

const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: 'false',
            errors: errors.mapped(),
        })
    }


    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    })
}


const login = (req, res = response) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        })
    }

    res.status(200).json({
        ok: true,
        msg: 'login'
    })
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'revalidar toquen'
    })
}


module.exports = {
    crearUsuario,
    login,
    revalidarToken,
}