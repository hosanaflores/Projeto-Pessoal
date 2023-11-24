var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/buscarTiposPratos/", function (req, res) { 
    graficosController.buscarTiposPratos(req, res);
  });
  
router.get("/buscarPrecos/", function (req, res) { 
    graficosController.buscarPrecos(req, res);
  }); 

module.exports = router;