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
                    <span class="endereco">Rua de Vegetal de Brocólis</span>
                </div>
    
            </div>
                <button  onclick="verCardapio()" class="botao-estilo">Veja Cardápio</button>
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
      
  //   fetch(`/restaurantes/buscarRestaurantes/`, {
  //     method: "GET", //pegar
  //   })
  //     .then(function (resposta) {
  //       resposta.json().then((cardapios) => {
  //         cardapios.forEach((cardapio) => { //Cardapios -> Vetor que vem do banco, e o cardapio são os itens do vetor {json}
  //           listaCardapios.innerHTML += `
      //<option value='${cardapio.idCardapio}'>${cardapio.nome}</option>
            
  //           `;
  //           console.log(cardapio);
  //         });
  //       });
  //     })
  //     .catch(function (resposta) {
  //       console.log(`#ERRO: ${resposta}`);
  //     });



  // <div class="container-card" id="listaRestaurantes">
  //       <div class="conteudo-card">
  //           <div class="titulo-endereco">
  //               <span class="titulo">1 Card</span>
  //               <span class="endereco">Rua de Vegetal de Brocólis</span>
  //           </div>

  //       </div>
  //           <button  onclick="verCardapio()" class="botao-estilo">Veja Cardápio</button>
  //       </div>


  }


 