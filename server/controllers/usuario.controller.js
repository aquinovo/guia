const Usuario = require("../models/usuario.model");

// Versión simple, sin validación ni saneamiento.
exports.test = function (req, res){
	res.send('Controlador de prueba');
};

//Crear un usuario y guardarlo a la BD
exports.user_create = function(req,res){
	let usuario = new Usuario ({
		nombre: req.body.nombre,
		email: req.body.email,
		contraseña: req.body.contraseña,
		sexo: req.body.sexo,
		avatar: req.body.avatar,
		fecha_registro: req.body.fecha_registro,
		ciudad: req.body.ciudad,
		estado: req.body.estado,
		medallas: req.body.medallas, 
	});
	usuario.save( function (err){
		if(err){
			return next(err);
		}
		res.send('Usuario creado correctamente.');
	});
};
//Mostrar un usuario por id
exports.user_details= function (req, res){
	Usuario.find(req.params.id, function(err, usuario){
		if(err)
			return next(err);
		res.send(usuario);
	});
};

//Mostrar un usuario por id
exports.user_details_byId= function (req, res){
	Usuario.findById(req.params.id, function(err, usuario){
		if(err)
			return next(err);
		res.send(usuario);
	});
};

//Actualizar un usuario por id
exports.user_update = function (req,res){
	Usuario.findByIdAndUpdate(req.params.id, {$set: req.body },function(err,product){
		if(err)
			return next(err);
		res.send('Usuario actualizado.')
	});
};

//Eliminar un usuario por id
exports.user_delete = function (req,res){
	Usuario.findByIdAndRemove(req.params.id, function(err){
		if(err) 
			return next(err);
		res.send('Usuario eliminado');
	});
};