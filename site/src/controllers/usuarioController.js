var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) { //PARA LOGAR
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resposta) {
                     if (resposta.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(200).json(resposta);
                    }
                
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


//CADASTRAR
function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var cnpj = req.body.cnpjServer;
    var telefone = req.body.telefoneServer;
    var nome = req.body.nomeServer;
    var razao = req.body.razaoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var tipo = req.body.tipoServer;


    // Faça as validações dos valores
    if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Sua nome está undefined!");
    } else if (razao == undefined) {
        res.status(400).send("Sua Razão está undefined!");
    }else if(email == undefined){
        res.status(400).send("Seu Email está undefined!");
    } else if(senha == undefined) {
        res.status(400).send("Seu Email está undefined!");
    }else if(tipo == undefined){
        res.status(400).send("O tipo do restaurante está undefined");
    }else{

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.enviar(cnpj, telefone, nome, razao, email, senha, tipo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    enviar
}