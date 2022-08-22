const Ficha = require('../models/fichaSolicitud.model');

function agregarFicha(req, res) {

 }

 function verFichas (req, res){
    Ficha.find({}, (err, fichas) => {
        return res.status(200).send({ fichas: fichas})
    })
}

module.exports = {
    agregarFicha,
    verFichas
};
