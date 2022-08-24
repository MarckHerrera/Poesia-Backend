const express = require('express');
const controladorFicha = require('../controllers/fichaSolicitud.controller');

/* Middlewares */
const api = express.Router();

/* Rutas */
api.post('/solicitudFicha', controladorFicha.agregarFicha);
api.get('/verFichas', controladorFicha.verFichas);
api.get('/eliminarFichas/:idFicha', controladorFicha.eliminarFichas);

module.exports = api;