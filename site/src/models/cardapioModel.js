var database = require("../database/config");

// SELECT DO BANCO PARA TRAZER O NOME DOS CARDAPIOS NO MEU MODAL
function buscarCardapios(fkRestaurante) { //(nome) ta recebendo alguma coisa
var query = `
        
    SELECT Cardapio.idCardapio, Cardapio.nome FROM Restaurante 
			JOIN Cardapio
            ON fkRestaurante = idRestaurante
            WHERE ${fkRestaurante} = idCardapio;

    `;
  
    return database.executar(query);
  }


function cadastrar(fkRestaurante, nome) { // PARA CADASTRAR NO MEU BANCO DE DADOS
    var instrucao = `
        INSERT INTO Cardapio (idCardapio, fkRestaurante, nome) VALUES (${fkRestaurante}, ${fkRestaurante}, '${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    buscarCardapios
}
