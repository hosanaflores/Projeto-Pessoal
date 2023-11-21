var express = require("express");
var router = express.Router();

var restaurantesController = require("../controllers/restaurantesController");

router.post("/cadastrar/:fkCardapio", function (req, res) {
   restaurantesController.cadastrar(req, res);
});

router.get("/buscarRestaurantes/", function (req, res) { //Buscando restaurante pra mostrar no card (rotas)
  restaurantesController.buscarRestaurantes(req, res);
});

router.get("/operacaoMath/", function (req, res) { //Buscando restaurante pra mostrar no card (rotas)
  restaurantesController.operacaoMath(req, res);
});

module.exports = router;