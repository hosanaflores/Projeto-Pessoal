function listar() {

    fetch(`/restaurantes/buscarRestaurantes/`, {
      method: "GET", //pegar
    })
      .then(function (resposta) {
        resposta.json().then((restaurantes) => {

          var tamanho = restaurantes.length;
          for(var contador = 0; contador < tamanho; contador++){
            var restauranteAtual = restaurantes[contador];

            listaRestaurantes.innerHTML += `
            
            <div class="container-card" id="teste">
            <div class="conteudo-card">
            <div class="titulo-endereco">
            <span class="titulo">${restauranteAtual.nomeFantasia}</span>
                    <span class="rua"> Rua: ${restauranteAtual.rua}</span>
                    <span class="bairro">Bairro: ${restauranteAtual.bairro}</span>
                    <span class="cidade">Cidade: ${restauranteAtual.cidade}</span>
                    <span class="estado">Estado: ${restauranteAtual.estado}</span>
                    <span class="cep">CEP: ${restauranteAtual.cep}</span>
                </div>
    
            </div>
                <button onclick="listarCardapio(${restauranteAtual.idRestaurante}), verCardapio(), setTimeout(() => listarPratos(${restauranteAtual.idRestaurante}), 100)"class="botao-estilo">Veja Cardápio</button>
            </div>
            
            `;
    
            //console.log(restaurantes[0].nomeFantasia);
            console.log(restaurantes);
          }

         
        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
      
  }


 