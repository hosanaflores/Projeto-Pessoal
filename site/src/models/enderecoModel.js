var database = require("../database/config");

function cadastrar(fkRestaurante, cep, rua, bairro, cidade, estado) {
    // console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucao = `
        INSERT INTO Endereco (idEndereco, fkRestaurante, cep, rua, bairro, cidade, estado) VALUES (${fkRestaurante}, ${fkRestaurante}, '${cep}', '${rua}', '${bairro}', '${cidade}', '${estado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
}