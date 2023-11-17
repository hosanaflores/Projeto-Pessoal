var express = require("express");
var router = express.Router();


var pratosController = require("../controllers/restaurantesController");


router.post("/cadastrar/:fkCardapio", function (req, res) {
   restaurantesController.cadastrar(req, res);
});


/* ----------------------------------------------------------- */

router.get("/buscarCardapioPorId/:idRestaurante", function (req, res) {
  restaurantesController.buscarCardapioPorId(req, res);
});


module.exports = router;