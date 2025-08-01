/*
    Rutas de Auth
    host + /api/auth
*/


const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos')

const { crearUsuario, login, revalidarToken } = require('../controllers/auth');

const router = Router();



router.post(
    '/new', 
    [ // Middlewares
        check('name', 'El nombre del usuario es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener 6 caracteres').isLength({min:6}),
        validarCampos
    ], 
    crearUsuario);


router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min:6}),
        validarCampos
    ],
     login)


router.get('/renew', revalidarToken)

module.exports = router;