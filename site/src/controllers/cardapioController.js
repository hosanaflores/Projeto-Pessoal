var cardapioModel = require("../models/cardapioModel");

function buscarCardapios(req, res) { // (req, res) estou recebendo um parametro e dando um nome pra ela 
    var fkRestaurante = req.params.fkRestaurante;

    cardapioModel.buscarCardapios(fkRestaurante).then((resultado) => {
      res.status(200).json(resultado);
    });
  }


// function listar(req, res) {
//     avisoModel.listar().then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

// function listarPorUsuario(req, res) {
//     var idUsuario = req.params.idUsuario;

//     avisoModel.listarPorUsuario(idUsuario)
//         .then(
//             function (resultado) {
//                 if (resultado.length > 0) {
//                     res.status(200).json(resultado);
//                 } else {
//                     res.status(204).send("Nenhum resultado encontrado!");
//                 }
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log(
//                     "Houve um erro ao buscar os avisos: ",
//                     erro.sqlMessage
//                 );
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

// function pesquisarDescricao(req, res) {
//     var descricao = req.params.descricao;

//     avisoModel.pesquisarDescricao(descricao)
//         .then(
//             function (resultado) {
//                 if (resultado.length > 0) {
//                     res.status(200).json(resultado);
//                 } else {
//                     res.status(204).send("Nenhum resultado encontrado!");
//                 }
//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

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

// function editar(req, res) {
//     var novaDescricao = req.body.descricao;
//     var idAviso = req.params.idAviso;

//     avisoModel.editar(novaDescricao, idAviso)
//         .then(
//             function (resultado) {
//                 res.json(resultado);
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );

// }

// function deletar(req, res) {
//     var idAviso = req.params.idAviso;

//     avisoModel.deletar(idAviso)
//         .then(
//             function (resultado) {
//                 res.json(resultado);
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

module.exports = {
    // listar,
    // listarPorUsuario,
    // pesquisarDescricao,
    cadastrar,
    buscarCardapios
    // editar,
    // deletar
}