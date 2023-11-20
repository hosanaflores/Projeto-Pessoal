var express = require("express");
var router = express.Router();

var enderecoController = require("../controllers/enderecoController");

router.post("/cadastrar/:fkRestaurante", function (req, res) { //CADASTRANDO COM FK
   enderecoController.cadastrar(req, res);
});

// router.get("/buscarEnderecos/:fkRestaurante", function (req, res) { //Buscando endereco nos CARDS (rotas)
//    enderecoController.buscarEnderecos(req, res);
//  });
 
 

module.exports = router;