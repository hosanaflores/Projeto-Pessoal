var enderecoModel = require("../models/enderecoModel");

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

function listar (req, res){
    var fkRestaurante = req.params.fkRestaurante;

    if (fkRestaurante == undefined) {
        res.status(400).send("O fkRestaurante está indefinido!");
    } else {
        enderecoModel.listar(fkRestaurante)
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

function alterar (req, res){
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
    } else if (id == undefined) {
        res.status(403).send("O seu ID está indefinido!");
    } else {
        enderecoModel.alterar(fkRestaurante, cep, rua, bairro, cidade, estado, id)
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
    listar,
    alterar
}