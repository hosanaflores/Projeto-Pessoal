var restaurantesModel = require("../models/restaurantesModel");

function buscarRestaurantes(req, res) { //BUSCANDO ENDEREÇOS
  
    restaurantesModel.buscarRestaurantes().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  
  module.exports = {
      buscarRestaurantes
  }