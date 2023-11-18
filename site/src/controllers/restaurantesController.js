var restaurantesModel = require("../models/restaurantesModel");



function buscarRestaurantes(req, res) {
  
    restaurantesModel.buscarRestaurantes().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  
  module.exports = {
      // listar,
      // listarPorUsuario,
      // pesquisarDescricao,
      // cadastrar,
      // editar,
      // deletar
      // buscarPorNome,
      buscarRestaurantes,
      // buscarCardapioPratos
  
  }