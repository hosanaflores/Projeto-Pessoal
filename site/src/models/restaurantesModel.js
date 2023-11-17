var database = require("../database/config");

function buscarCardapioPorId(idRestaurante) { 
    var query = `select * from Cardapio where fkRestaurante = '${idRestaurante}'`;
  
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
       buscarCardapioPorId,
        // cadastrar,
  }