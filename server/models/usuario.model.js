const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definicion de la esquema de usuario
let UserSchema = new Schema({
	nombre: {type: String, required: true},
	email: {type: String, required: true},
	contraseña: {type: String, required: true},
	sexo: {type: String, required: true},
	avatar: {type: String, required: true},
	fecha_registro: {type: Date, required: true},
	ciudad: {type: String, required: true},
	estado: {type: String, required: true},
	medallas: {type: Array, required: true}, 
});

//Exportar el modelo
module.exports = mongoose.model('Usuario',UserSchema);