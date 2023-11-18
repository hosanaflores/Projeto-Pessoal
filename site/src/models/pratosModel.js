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
    // console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucao = `
        INSERT INTO Pratos (fkCardapio, nomePrato, tipo, preco) VALUES (${fkCardapio}, '${nomePrato}', '${tipo}', ${preco});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
/* ----------------------------------------------------------------- */



// function buscarCardapioPorId(idRestaurante) { 
//   var query = `select * from Cardapio where fkRestaurante = '${idRestaurante}'`;

//   return database.executar(query);
// }


module.exports = {
    // listar,
    // listarPorUsuario,
    // pesquisarDescricao,
    cadastrar,
    buscarPratos
    // editar,
    // deletar
    // buscarPorCnpj,
    //  buscarCardapioPorId
}