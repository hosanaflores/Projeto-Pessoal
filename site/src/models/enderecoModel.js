var database = require("../database/config");

function cadastrar(fkRestaurante, cep, rua, bairro, cidade, estado) { //Ta recebendo alguma coisa
    var instrucao = `
        INSERT INTO Endereco (fkRestaurante, cep, rua, bairro, cidade, estado) VALUES (${fkRestaurante}, '${cep}', '${rua}', '${bairro}', '${cidade}', '${estado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterar(fkRestaurante, cep, rua, bairro, cidade, estado, id) { //Ta recebendo alguma coisa
    var instrucao = `
       UPDATE Endereco
        SET fkRestaurante = ${fkRestaurante}, 
            cep = '${cep}', 
            rua = '${rua}', 
            bairro = '${bairro}', 
            cidade = '${cidade}', 
            estado = '${estado}'
        WHERE id = ${id};  
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(fkRestaurante) { //Ta recebendo alguma coisa
    var instrucao = ` SELECT * FROM Endereco WHERE fkRestaurante = ${fkRestaurante} `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar, 
    listar,
    alterar
}