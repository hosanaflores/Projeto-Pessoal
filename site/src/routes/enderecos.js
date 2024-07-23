var express = require("express");
var router = express.Router();

var enderecoController = require("../controllers/enderecoController");

router.get("/listar/:fkRestaurante", function(req, res){
   enderecoController.listar(req, res);
});

router.post("/cadastrar/:fkRestaurante", function (req, res) { //CADASTRANDO COM FK
   enderecoController.cadastrar(req, res);
});

router.put("/alterar/:id", function(req, res){
   enderecoController.alterar(req, res);
});

router.delete("/deletar/:fkRestaurante", function(req, res){
   enderecoController.deletar(req, res);
});


module.exports = router;