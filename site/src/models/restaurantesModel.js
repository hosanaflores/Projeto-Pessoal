var database = require("../database/config");

function buscarRestaurantes() { 
    var query = `select * from Restaurante`;
  
    return database.executar(query);
  }
  
  
  module.exports = {
      // listar,
      // listarPorUsuario,
      // pesquisarDescricao,
      // cadastrar,
      // editar,
      // deletar
      // buscarPorCnpj,
       buscarRestaurantes
        // cadastrar,
  }