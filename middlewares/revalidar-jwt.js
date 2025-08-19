const { response } = require('express');
const jsw = require('jsonwebtoken')


const revalidarJWT = (req, res = response, next) => {

    //* x-token en los headers
    const token = req.header('x-token')

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'fallo la validacion del token'
        })
    }

    try {
        
        const payload = jsw.verify(
            token,
            process.env.SECRET_PRIVATE_KEY,
        )

        // * poder acceder al uid y name llamando el req
        req.uid = payload.uid;
        req.name = payload.name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token invalido'
        })
    }


        next();
}

module.exports = {
    revalidarJWT
}