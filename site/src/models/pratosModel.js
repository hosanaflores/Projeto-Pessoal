var database = require("../database/config");

function cadastrar(fkCardapio, nomePrato, tipo, preco) {
    // console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucao = `
        INSERT INTO Pratos (fkCardapio, nomePrato, tipo, preco) VALUES (${fkCardapio}, '${nomePrato}', '${tipo}', ${preco});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
/* ----------------------------------------------------------------- */



function buscarCardapioPorId(idRestaurante) { 
  var query = `select * from Cardapio where fkRestaurante = '${idRestaurante}'`;

  return database.executar(query);
}


module.exports = {
    // listar,
    // listarPorUsuario,
    // pesquisarDescricao,
    cadastrar,
    // editar,
    // deletar
    // buscarPorCnpj,
     buscarCardapioPorId,
      cadastrar,
}