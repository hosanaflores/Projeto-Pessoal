var express = require("express");
var router = express.Router();

var enderecoController = require("../controllers/enderecoController");

router.post("/cadastrar/:fkRestaurante", function (req, res) { //CADASTRANDO COM FK
   enderecoController.cadastrar(req, res);
});

router.put("/alterar/:fkRestaurante", function(req, res){
   enderecoController.alterar(req, res);
});

router.get("/listar/:fkRestaurante", function(req, res){
   enderecoController.listar(req, res);
});

module.exports = router;