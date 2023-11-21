var express = require("express");
var router = express.Router();


var pratosController = require("../controllers/pratosController");


router.post("/cadastrar/:fkCardapio", function (req, res) { //Cadastrando pratos com fkCardapio 
    pratosController.cadastrar(req, res);
});


router.get("/buscarPratos/:fkCardapio", function (req, res) { //Buscando nome dos MENU(CARDAPIOS) dos restaurantes (rotas)
    pratosController.buscarPratos(req, res);
  });

module.exports = router;