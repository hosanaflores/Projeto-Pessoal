function listar() {
    var fkRestaurante = sessionStorage.ID_USUARIO;

    fetch(`/restaurantes/buscarRestaurantePorId/${fkRestaurante}`, {
      method: "GET",
    })
      .then(function (resposta) {
        resposta.json().then((restaurantes) => {
          restaurantes.forEach((restaurante) => { //Cardapios -> Vetor que vem do banco, e o cardapio são os itens do vetor {json}
            listaRestaurantes.innerHTML += `<option value='${restaurante.idRestaurante}'>${restaurante.nome}</option>`;
            console.log(cardapio);
          });
        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }

  /* --------------------------------------------------------------------------- */

 