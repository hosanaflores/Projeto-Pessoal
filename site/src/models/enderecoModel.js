var database = require("../database/config");

// SELECT DO BANCO PARA TRAZER O NOME DOS CARDAPIOS NO MEU MODAL
// function buscarEnderecos(fkRestaurante) { //(nome) ta recebendo alguma coisa
//     var query = `
            
//     SELECT Endereco.idEndereco, Endereco.cep, Endereco.rua, Endereco.bairro, Endereco.cidade, Endereco.estado FROM Endereco 
//     JOIN Restaurante 
//     ON idRestaurante = fkRestaurante
//     WHERE fkRestaurante =  ${fkRestaurante};
    
//         `;
      
//         return database.executar(query);
//       }
    

function cadastrar(fkRestaurante, cep, rua, bairro, cidade, estado) {
    // console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucao = `
        INSERT INTO Endereco (fkRestaurante, cep, rua, bairro, cidade, estado) VALUES (${fkRestaurante}, '${cep}', '${rua}', '${bairro}', '${cidade}', '${estado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
   // buscarEnderecos
}