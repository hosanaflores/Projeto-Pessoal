var cardapioModel = require("../models/cardapioModel");

function buscarCardapios(req, res) { // (req, res) estou recebendo um parametro e dando um nome pra ela 
    var fkRestaurante = req.params.fkRestaurante;

    cardapioModel.buscarCardapios(fkRestaurante).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

function cadastrar(req, res) { // PARA CADASTRAR MEU CARDAPIO COM FK (idRestaurante)
    var fkRestaurante = req.params.fkRestaurante;
    var nome = req.body.nomeServer;
 

    if (fkRestaurante == undefined) {
        res.status(400).send("O fkRestaurante está indefinido!");
    } else if (nome == undefined) {
        res.status(403).send("O nome do cardápio está indefinido!");
    } else {
        cardapioModel.cadastrar(fkRestaurante, nome)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    buscarCardapios
}