/*
    Rutas de Eventos
    '/api/events'
*/


const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, actualizarEvento, eliminarEvento, crearEvento, } = require('../controllers/events');
const { revalidarJWT } = require('../middlewares/revalidar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');


const router = Router();

// la funcion de use permite que todas las rutas definidas debajo de esta linea pasen por la validadion establecida en el middleware
router.use(revalidarJWT);

// obtener los eventos
router.get('/', getEventos);

// crear evento
router.post('/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        check('end', 'La fecha de termino es obligatoria').custom(isDate),
        validarCampos,
    ],
    crearEvento
);

// actualizar evento
router.put('/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    actualizarEvento
);

// borrar un evento
router.delete('/:id', eliminarEvento);

module.exports = router;