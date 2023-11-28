function listarMath() {

    fetch(`/restaurantes/operacaoMath/`, {
      method: "GET", //pegar
    })
      .then(function (resposta) {
        resposta.json().then((restaurantes) => {

            var vegetariano = 0;
            var vegano = 0;
            var misto = 0
            var tamanho = restaurantes.length;

          for(var contador = 0; contador < tamanho; contador++){
            var restauranteAtual = restaurantes[contador];

            if(restauranteAtual.tipo == "vegetariano"){
                vegetariano += 1;
            }else if(restauranteAtual.tipo == "vegano"){
                vegano += 1;
            }else{
                misto +=1
            }
            
        }

                var resultadoVegetariano = vegetariano * 100 / tamanho;
                var resultadoVegano = vegano * 100 / tamanho;
                var resultadoMisto = misto * 100 / tamanho;
            
                //TABELA DA OPERAÇÃO MAETAMÁTICA
                tabela_matematica.innerHTML = `
                            <tr>
                                <th class="restaurantes">Restaurantes</th>
                                <th>Vegetariano</th>
                                <th>Vegano</th>
                                <th>Misto</th>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td>${resultadoVegetariano.toFixed(2) +" %"}</td>
                                <td>${resultadoVegano.toFixed(2) +" %"}</td>
                                <td>${resultadoMisto.toFixed(2) +" %"}</td>
                            </tr>
                            `;
         
        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
      
  }
