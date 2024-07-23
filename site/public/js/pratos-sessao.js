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
    .then(function (resposta) { //CARD DE REDIRECIONAMENTO
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
          "Cadastro de Pratos realizado com sucesso!";

        setTimeout(() => {
          window.location = "./dashboard.html";
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


function listarPratos() { 
  var fkRestaurante = sessionStorage.ID_USUARIO;

  console.log(fkRestaurante);

  fetch(`/pratos/buscarPratos/${fkRestaurante}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      },
  })
  .then(function (resposta) { //CARD DE REDIRECIONAMENTO
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        resposta.json().then(function (resposta){
          console.log(resposta);
          listaPratos.innerHTML = "";
          resposta.forEach(element => {
            listaPratos.innerHTML += `
             <li class="list-group-item">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Pratos</h5>
                                <p class="card-text"><strong>CEP:</strong> ${element.nomePrato}</p>
                                <p class="card-text"><strong>Rua:</strong> ${element.preco}</p>
                                  <p class="card-text"><strong>Tipo:</strong> ${element.tipo}</p>
                                  <div class="botoes">
                                   <button onclick="update(${element.id})" class="btnUpdateModal">Editar</button>
                                   <button onclick="deleted(${element.id})" class="btnDeleteModal">Deletar</button>
                                </div>
                            </div>
                        </div>
                    </li>`
          });
        })
  
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


function update(id) {
  Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'my-confirm-button',
        cancelButton: 'my-cancel-button'
    },
      backdrop: false
  }).then((result) => {
      if (result.isConfirmed) {
          deletar(id);
      }
  });
}

function deleted(id) {
  Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'my-confirm-button',
        cancelButton: 'my-cancel-button'
    },
    backdrop: false
  }).then((result) => {

      if (result.isConfirmed) {
          deletar(id);
      }
  });
}

  function abrirMeuModalPratos() {
    document.getElementById("meuModalPratos").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
  }
  
  function fecharMeuModalPratos() {
    document.getElementById("meuModalPratos").style.display = "none";
    meuModal.innerHTML = ``;
    document.querySelector("body").style.overflow = "scroll";
  }
  