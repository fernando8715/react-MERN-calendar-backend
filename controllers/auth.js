const { response } = require('express');

const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body; 
    
    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    })
}


const login = (req, res = response) => {
    

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