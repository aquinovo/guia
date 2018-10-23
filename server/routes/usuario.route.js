const express = require('express');
const router = express.Router();

//Requerir los controladores que no se han creado.
const user_controller = require('../controllers/usuario.controller');

// Url de prueba para verificar que todos nuestros archivos se están comunicando correctamente.
router.get('/test', user_controller.test);
// Url para crear un usuario
router.post('/create',user_controller.user_create);
// Url para obtener todos los usuarios
router.get('/',user_controller.user_details);
// Url para obtener un usuario por id
router.get('/:id',user_controller.user_details_byId);
// Url para actualizar un usuario por id
router.put('/:id/update',user_controller.user_update);
// Url para eliminar un usuario por id
router.delete('/:id/delete',user_controller.user_delete);

module.exports = router;