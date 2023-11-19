var express = require("express");
var router = express.Router();

var cardapioController = require("../controllers/cardapioController");

// router.get("/listar", function (req, res) {
//     cardapioController.listar(req, res);
// });

// router.get("/listar/:idUsuario", function (req, res) {
//     cardapioController.listarPorUsuario(req, res);
// });

// router.get("/pesquisar/:descricao", function (req, res) {
//     cardapioController.pesquisarDescricao(req, res);
// });

router.post("/cadastrar/:fkRestaurante", function (req, res) { //CADASTRANDO COM FK
    cardapioController.cadastrar(req, res);
});



router.get("/buscarCardapios/:fkRestaurante", function (req, res) { //Buscando nome dos MENU(CARDAPIOS) dos restaurantes (rotas)
    cardapioController.buscarCardapios(req, res);
  });
  

// router.put("/editar/:idcardapio", function (req, res) {
//     cardapioController.editar(req, res);
// });

// router.delete("/deletar/:idcardapio", function (req, res) {
//     cardapioController.deletar(req, res);
// });

module.exports = router;