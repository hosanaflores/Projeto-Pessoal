var express = require("express");
var router = express.Router();

var cardapioController = require("../controllers/cardapioController");

router.post("/cadastrar/:fkRestaurante", function (req, res) { //CADASTRANDO COM FK
    cardapioController.cadastrar(req, res);
});

router.get("/buscarCardapios/:fkRestaurante", function (req, res) { //Buscando nome dos MENU(CARDAPIOS) dos restaurantes (rotas)
    cardapioController.buscarCardapios(req, res);
  });
  
module.exports = router;