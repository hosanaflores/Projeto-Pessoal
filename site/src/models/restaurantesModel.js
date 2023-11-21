var database = require("../database/config");

function buscarRestaurantes() { // SELECT DO BANCO PARA TRAZER O NOME DOS RESTAURANTES NO MEU CARD
    var query = `

    SELECT Restaurante.idRestaurante, Restaurante.nomeFantasia, Endereco.idEndereco, Endereco.cep, Endereco.rua, Endereco.bairro, Endereco.cidade, Endereco.estado FROM Restaurante
    JOIN Endereco
    ON idRestaurante = fkRestaurante
    ORDER BY Restaurante.nomeFantasia;
    `;
  
    return database.executar(query);
  }


  function operacaoMath(){
     var matematica = `SELECT * FROM Restaurante;`;
     return database.executar(matematica);

  }
  
  module.exports = {
       buscarRestaurantes,
       operacaoMath
  }