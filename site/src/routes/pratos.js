var express = require("express");
var router = express.Router();


var pratosController = require("../controllers/pratosController");


router.post("/cadastrar/:fkCardapio", function (req, res) {
    pratosController.cadastrar(req, res);
});


/* ----------------------------------------------------------- */

// router.get("/buscarCardapioPorId/:idRestaurante", function (req, res) {
//   pratosController.buscarCardapioPorId(req, res);
// });


module.exports = router;