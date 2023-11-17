var restaurantesModel = require("../models/restaurantesModel");

function buscarCardapioPorId(req, res) {
    var idRestaurante = req.params.idRestaurante;
  
    pratosModel.buscarCardapioPorId(idRestaurante).then((resultado) => {
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
      buscarCardapioPorId
  
  }