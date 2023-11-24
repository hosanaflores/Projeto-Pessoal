var graficosModel = require("../models/graficosModel");


function buscarTiposPratos(req, res) { 
  
    graficosModel.buscarTiposPratos().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  function buscarPrecos(req, res) { 
  
    graficosModel.buscarPrecos().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  module.exports = {
      buscarTiposPratos,
      buscarPrecos
  }