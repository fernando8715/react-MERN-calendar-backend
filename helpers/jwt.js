const jwt = require('jsonwebtoken');

const generarJsonWebToquen = (uid, name) => {

    return new Promise((resolve, reject) => {

        const payload = { uid, name }

        jwt.sign(payload, process.env.SECRET_PRIVATE_KEY, {
            expiresIn: '2h'
        }, (err, toquen) => {

            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            }

            resolve(toquen)
        })
    })
}

module.exports = {
    generarJsonWebToquen
}