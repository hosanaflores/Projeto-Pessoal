var database = require("../database/config");

// SELECT DO BANCO PARA TRAZER O NOME DOS CARDAPIOS NO MEU MODAL
function buscarPratos(fkCardapio) { //(nome) ta recebendo alguma coisa
    var query = `
            
    SELECT Cardapio.nome, Pratos.nomePrato, Pratos.tipo, Pratos.preco FROM Pratos
    JOIN Cardapio 
    ON fkCardapio = idCardapio
    WHERE ${fkCardapio} = idCardapio;

        `;
      
        return database.executar(query);
      }
    
function cadastrar(fkCardapio, nomePrato, tipo, preco) {
    var instrucao = `
        INSERT INTO Pratos (fkCardapio, nomePrato, tipo, preco) VALUES (${fkCardapio}, '${nomePrato}', '${tipo}', ${preco});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPratos(fkCardapio) {
    var instrucao = ` SELECT * FROM Pratos WHERE fkCardapio = ${fkCardapio};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    buscarPratos,
    listarPratos
}