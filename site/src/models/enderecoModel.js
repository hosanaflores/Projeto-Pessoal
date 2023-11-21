var database = require("../database/config");

function cadastrar(fkRestaurante, cep, rua, bairro, cidade, estado) { //Ta recebendo alguma coisa
    var instrucao = `
        INSERT INTO Endereco (fkRestaurante, cep, rua, bairro, cidade, estado) VALUES (${fkRestaurante}, '${cep}', '${rua}', '${bairro}', '${cidade}', '${estado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
}