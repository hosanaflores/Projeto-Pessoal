function cadastrar() { //CADASTRANDO COM FK
    var fkRestaurante = sessionStorage.ID_USUARIO;
    var nome = input_cardapio.value;

    fetch(`/cardapios/cadastrar/${fkRestaurante}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nome
        })
    })
    .then(function (resposta) { //CARD DE REDIRECIONAMENTO
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
          "Cadastro realizado com sucesso! Redirecionando para tela de Pratos...";

        setTimeout(() => {
          window.location = "./pratos.html";
        }, "2000");

  
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      finalizarAguardar();
    });

  return false;

}


function listarCardapio(fkRestaurante) {

    fetch(`/cardapios/buscarCardapios/${fkRestaurante}`, {
      method: "GET", //pegar
    })
      .then(function (resposta) {
        console.log(resposta);
        resposta.json().then((cardapios) => {

          var tamanho = cardapios.length;
          for(var contador = 0; contador < tamanho; contador++){
            var cardapioAtual = cardapios[contador];

            meuModal.innerHTML = `

            <div class="conteudo-modal" id="lista_pratos">

               <span class="especialidades">Especialidades</span>

                <span class="cardapio">${cardapioAtual.nome}</span>

                <div class="div-button">
                    <button onclick="fecharCardapio()" class="botao-modal">X</button>
                </div>
        
                <img src="./assets/imagens/cardapioCafe.jpg">

            </div>

            `;
    
            console.log(cardapios);
          }

         
        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

  }
