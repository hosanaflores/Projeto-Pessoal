var database = require("../database/config")
 //LOGIN
function autenticar(email, senha) {
    var instrucao = `
        SELECT idRestaurante, cnpj, telefone, nomeFantasia, razaoSocial, email, senha, tipo FROM Restaurante WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//CADASTRO

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function enviar(cnpj, telefone, nome, razao, email, senha, tipo) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO restaurante (cnpj, telefone, nomeFantasia, razaoSocial, email, senha, tipo) VALUES ('${cnpj}', '${telefone}', '${nome}', '${razao}', '${email}', '${senha}', '${tipo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    enviar
};