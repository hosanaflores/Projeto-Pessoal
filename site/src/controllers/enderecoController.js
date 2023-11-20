var enderecoModel = require("../models/enderecoModel");

// function buscarEnderecos(req, res) { // (req, res) estou recebendo um parametro e dando um nome pra ela BUSCANDO ENDEREÇOS
//     var fkRestaurante = req.params.fkRestaurante;
  
//     enderecoModel.buscarEnderecos(fkRestaurante).then((resultado) => {
//       res.status(200).json(resultado);
//     });
//   }
  


function cadastrar(req, res) { // PARA CADASTRAR MEU CARDAPIO COM FK (idRestaurante)
    var fkRestaurante = req.params.fkRestaurante;
    var cep = req.body.cepServer;
    var rua = req.body.ruaServer;
    var bairro = req.body.bairroServer;
    var cidade = req.body.cidadeServer;
    var estado = req.body.estadoServer;

    if (fkRestaurante == undefined) {
        res.status(400).send("O fkRestaurante está indefinido!");
    } else if (cep == undefined) {
        res.status(403).send("O seu CEP está indefinido!");
    } else if (rua == undefined) {
        res.status(403).send("A sua rua está indefinido!");
    } else if (bairro == undefined) {
        res.status(403).send("O seu bairro está indefinido!");
    } else if (cidade == undefined) {
        res.status(403).send("A sua cidade está indefinido!");
    } else if (estado == undefined) {
        res.status(403).send("O seu estado está indefinido!");
    } else {
        enderecoModel.cadastrar(fkRestaurante, cep, rua, bairro, cidade, estado)
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
    cadastrar
    // buscarEnderecos
}