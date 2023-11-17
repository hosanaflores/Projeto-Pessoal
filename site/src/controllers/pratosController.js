var pratosModel = require("../models/pratosModel");

function cadastrar(req, res) {
    var fkCardapio = req.params.fkCardapio;
    var nomePrato = req.body.nomeServer;
    var tipo = req.body.tipoServer;
    var preco = req.body.precoServer;

    if (fkCardapio == undefined) {
        res.status(400).send("O fkCardapio está indefinido!");
    } else if (nomePrato == undefined) {
        res.status(403).send("O nome do cardápio está indefinido!");
    } else if (tipo == undefined) {
        res.status(403).send("O tipo de cardápio está indefinido!");
    } else if (preco == undefined) {
        res.status(403).send("O preço está indefinido!");
    } else {
        pratosModel.cadastrar(fkCardapio, nomePrato, tipo, preco)
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



/* -------------------------------------------------------------------------------- */

// function buscarCardapioPorId(req, res) {
//   var idRestaurante = req.params.idRestaurante;

//   pratosModel.buscarCardapioPorId(idRestaurante).then((resultado) => {
//     res.status(200).json(resultado);
//   });
// }



module.exports = {
    // listar,
    // listarPorUsuario,
    // pesquisarDescricao,
    cadastrar,
    // editar,
    // deletar
    // buscarPorNome,
    // buscarCardapioPorId

}