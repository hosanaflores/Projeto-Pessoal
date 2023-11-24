var database = require("../database/config");

function buscarTiposPratos() { // SELECT DO BANCO PARA TRAZER MINHA QUANTIADADE DE PRATOS E OS NOMES DELES
    var tipoPrato = `
        SELECT COUNT(tipo)  AS quantidadeTipos, tipo AS nomeTipo FROM Pratos 
		    GROUP BY tipo;
                         `;
  
    return database.executar(tipoPrato);
  }

  function buscarPrecos() { // SELECT DO BANCO PARA TRAZER MINHA QUANTIADADE DE PRATOS E OS NOMES DELES
    var precos = ` SELECT MIN(preco) AS precoMinimo, MAX(preco) AS precoMaximo, ROUND(AVG(preco),2) AS precoMedio FROM Pratos;`;
  
    return database.executar(precos);
  }


  module.exports = {
       buscarTiposPratos,
       buscarPrecos
  }