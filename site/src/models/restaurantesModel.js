var database = require("../database/config");

function buscarRestaurantes() { // SELECT DO BANCO PARA TRAZER O NOME DOS RESTAURANTES NO MEU CARD
    var query = `select * from Restaurante`;
  
    return database.executar(query);
  }
  
  module.exports = {
       buscarRestaurantes
  }