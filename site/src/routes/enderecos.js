var express = require("express");
var router = express.Router();

var enderecoController = require("../controllers/enderecoController");

router.post("/cadastrar/:fkRestaurante", function (req, res) { //CADASTRANDO COM FK
   enderecoController.cadastrar(req, res);
});

module.exports = router;