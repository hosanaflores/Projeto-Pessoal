function cadastrar() {
    var fkCardapio = sessionStorage.ID_USUARIO;
    var nomePrato = input_pratos.value;
    var tipo = select_tipo.value;
    var preco = input_preco.value;

    fetch(`/pratos/cadastrar/${fkCardapio}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomePrato,
            tipoServer: tipo,
            precoServer: preco
        })
    })

}


function listarPratos(fkCardapio) { //Para listar os pratos com MENU (teste)

    fetch(`/pratos/buscarPratos/${fkCardapio}`, {
      method: "GET", //pegar
    })
      .then(function (resposta) {
        console.log(resposta);
        resposta.json().then((pratos) => {

          var tamanho = pratos.length;
          for(var contador = 0; contador < tamanho; contador++){
            var pratoAtual = pratos[contador];

            lista_pratos.innerHTML += `
            
            <div class="conteudo-pratos">
                <span class="nomePrato">${pratoAtual.nomePrato}</span>
                <img src="./assets/imagens/lineCardapio.svg" class="tipo">
                <span class="preco">R$ ${pratoAtual.preco}</span>
            </div>

            `;
    
            console.log(pratos);
          }

         
        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
      
  }

