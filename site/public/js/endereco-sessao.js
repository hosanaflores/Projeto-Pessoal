function cadastrar() { //CADASTRANDO COM FK
    var fkRestaurante = sessionStorage.ID_USUARIO;
    var cep = document.getElementById("cep").value;
    var rua = document.getElementById("rua").value;
    var bairro = document.getElementById("bairro").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("uf").value;

    console.log(cep + rua + bairro + cidade + estado);

    fetch(`/enderecos/cadastrar/${fkRestaurante}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cepServer: cep,
            ruaServer: rua,
            bairroServer: bairro,
            cidadeServer: cidade,
            estadoServer: estado
        })
    })

    .then(function (resposta) { //CARD DE REDIRECIONAMENTO
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          cardErro.style.display = "block";

          mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso! Redirecionando para tela de Cardápio...";

          setTimeout(() => {
            window.location = "./cardapio.html";
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


function listarEnderecos() { 
  var fkRestaurante = sessionStorage.ID_USUARIO;
  console.log(fkRestaurante);
  fetch(`/enderecos/listar/${fkRestaurante}`, {
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
          var listaEnderecos = document.getElementById('listaEnderecos');
          listaEnderecos.innerHTML = "";
          resposta.forEach(element => {
            listaEnderecos.innerHTML += `
              <li class="list-group-item">
                <div class="card mb-3">
                  <div class="card-body">
                    <h5 class="card-title">Endereço</h5>
                    <p class="card-text"><strong>CEP:</strong> ${element.cep}</p>
                    <p class="card-text"><strong>Rua:</strong> ${element.rua}</p>
                    <p class="card-text"><strong>Bairro:</strong> ${element.bairro}</p>
                    <p class="card-text"><strong>Cidade:</strong> ${element.cidade}</p>
                    <p class="card-text"><strong>Estado:</strong> ${element.estado}</p>
                    <div class="botoes">
                      <button onclick="openEditModal(${element.id})" class="btnUpdateModal">Editar</button>
                      <button onclick="deleteAddress(${element.id})" class="btnDeleteModal">Deletar</button>
                    </div>
                  </div>
                </div>
              </li>`;
          });
        });
  
      } else {
        throw "Houve um erro ao tentar listar os endereços!";
      }
    })
    .catch(function (erro) {
      console.log(`#ERRO: ${erro}`);
      // Tratar o erro conforme necessário
    });

  return false;
}

function openEditModal(id) {
  Swal.fire({
    title: 'Editar Endereço',
    html: `
      <label for="cep">CEP</label>
      <input id="cep" class="swal2-input" value="">

      <label for="rua">Rua</label>
      <input id="rua" class="swal2-input" value="">

      <label for="bairro">Bairro</label>
      <input id="bairro" class="swal2-input" value="">

      <label for="cidade">Cidade</label>
      <input id="cidade" class="swal2-input" value="">

      <label for="estado">Estado</label>
      <input id="estado" class="swal2-input" value="">
    `,
    showCancelButton: true,
    confirmButtonText: 'Salvar',
    cancelButtonText: 'Cancelar',
    customClass: {
      confirmButton: 'my-confirm-button',
      cancelButton: 'my-cancel-button'
  },
    backdrop: false,
    preConfirm: () => {
      return {
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value
      }
    }
  }).then((result) => {
    console.log("o que é:"+result)
    if (result.isConfirmed) {
      console.log("Novos dados do endereço:", result.value);
      fetch(`/enderecos/alterar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cepServer: result.value.cep,
          ruaServer: result.value.rua,
          bairroServer: result.value.bairro,
          cidadeServer: result.value.cidade,
          estadoServer: result.value.estado,
          idServer: id
        })
      })
      .then(function (resposta) {
        console.log("Resposta da atualização:", resposta);
        if (resposta.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Endereço atualizado com sucesso!'
          });
          listarEnderecos();
        } else {
          throw new Error('Houve um erro ao tentar atualizar o endereço.');
        }
      })
      .catch(function (erro) {
        console.error("Erro ao atualizar endereço:", erro);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Houve um erro ao tentar atualizar o endereço.'
        });
      });
    }
  });
}


function deleteAddress(id) {
  console.log("Deletar endereço com ID:", id);
  fetch(`/enderecos/deletar/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(function (resposta) {
    console.log("Resposta da deleção:", resposta);
    if (resposta.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Endereço deletado com sucesso!'
      });
      listarEnderecos();
    } else {
      throw new Error('Houve um erro ao tentar deletar o endereço.');
    }
  })
  .catch(function (erro) {
    console.error("Erro ao deletar endereço:", erro);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Houve um erro ao tentar deletar o endereço.'
    });
  });

  listarEnderecos();
}


// function listarEnderecos() { 
//   var fkRestaurante = sessionStorage.ID_USUARIO;
//   console.log(fkRestaurante);
//   fetch(`/enderecos/listar/${fkRestaurante}`, {
//       method: "GET",
//       headers: {
//           "Content-Type": "application/json"
//       },
//   })
//   .then(function (resposta) { //CARD DE REDIRECIONAMENTO
//       console.log("resposta: ", resposta);

//       if (resposta.ok) {
//         resposta.json().then(function (resposta){
//           console.log(resposta);
//           listaEnderecos.innerHTML = "";
//           resposta.forEach(element => {
//             listaEnderecos.innerHTML += `
//               <li class="list-group-item">
//                         <div class="card mb-3">
//                             <div class="card-body">
//                                 <h5 class="card-title">Endereço</h5>
//                                 <p class="card-text"><strong>CEP:</strong> ${element.cep}</p>
//                                 <p class="card-text"><strong>Rua:</strong> ${element.rua}</p>
//                                 <p class="card-text"><strong>Bairro:</strong> ${element.bairro}</p>
//                                 <p class="card-text"><strong>Cidade:</strong> ${element.cidade}</p>
//                                 <p class="card-text"><strong>Estado:</strong> ${element.estado}</p>
//                                 <div class ="botoes">
//                                   <button onclick="update(${element.id})" class="btnUpdateModal">Editar</button>
//                                   <button onclick="deleted(${element.id})" class="btnDeleteModal">Deletar</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </li>`
//           });
//         })
  
//       } else {
//         throw "Houve um erro ao tentar realizar o cadastro!";
//       }
//     })
//     .catch(function (resposta) {
//       console.log(`#ERRO: ${resposta}`);
//       finalizarAguardar();
//     });

//   return false;
// }

// function update (fkRestaurante){
//   var fkRestaurante = sessionStorage.ID_USUARIO;
//   var cep = document.getElementById("cep").value;
//   var rua = document.getElementById("rua").value;
//   var bairro = document.getElementById("bairro").value;
//   var cidade = document.getElementById("cidade").value;
//   var estado = document.getElementById("uf").value;

//   console.log(cep + rua + bairro + cidade + estado);

//   fetch(`/enderecos/alterar/${fkRestaurante}`, {
//       method: "PUT",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//           cepServer: cep,
//           ruaServer: rua,
//           bairroServer: bairro,
//           cidadeServer: cidade,
//           estadoServer: estado,
//           idServer: sessionStorage.ID_USUARIO
//       })
//   })
//   .then(function (resposta) { //CARD DE REDIRECIONAMENTO
//       console.log("resposta: ", resposta);
//       if (resposta.ok) {
//         resposta.json().then(function (resposta){
//           console.log(resposta);
//           listaEnderecos.innerHTML = "";
//           resposta.forEach(element => {
//             formEnderecos.innerHTML += `
//          //conteudo aqui
//             `
//           });
//         })
  
//       } else {
//         throw "Houve um erro ao tentar realizar o cadastro!";
//       }
//     })
//     .catch(function (resposta) {
//       console.log(`#ERRO: ${resposta}`);
//       finalizarAguardar();
//     });

//   return false;
// }

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





// function deleted (id){
//   var id = sessionStorage.ID_USUARIO;
//   console.log(cep + rua + bairro + cidade + estado);
//   fetch(`/enderecos/deletar/${id}`, {
//       method: "PUT",
//       headers: {
//           "Content-Type": "application/json"
//       },
//   })
//   .then(function (resposta) { //CARD DE REDIRECIONAMENTO
//       console.log("resposta: ", resposta);

//       if (resposta.ok) {
//         cardErro.style.display = "block";

//         mensagem_erro.innerHTML =
//           "Cadastro realizado com sucesso! Redirecionando para tela de Cardápio...";

//         setTimeout(() => {
//           window.location = "./cardapio.html";
//         }, "2000");

//       } else {
//         throw "Houve um erro ao tentar realizar o cadastro!";
//       }
//     })
//     .catch(function (resposta) {
//       console.log(`#ERRO: ${resposta}`);
//       finalizarAguardar();
//     });

//   return false;

// }

// function deleted(productId) {
//   Swal.fire({
//       title: "Tem certeza?",
//       text: "Você não poderá reverter isso!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Sim, deletar!"
//   }).then((result) => {
//       if (result.isConfirmed) {
//           fetch(`/enderecos/${productId}`, {
//                   method: 'DELETE',
//                   headers: {
//                       'X-CSRF-TOKEN': '{{ csrf_token() }}',
//                       'Content-Type': 'application/json'
//                   }
//               })
//               .then(response => response.json())
//               .then(data => {
//                   Swal.fire({
//                       title: "Deletado!",
//                       text: "Seu arquivo foi deletado.",
//                       icon: "success"
//                   }).then(() => {
//                       window.location.href = "{{ route('index') }}";
//                   });
//               })
//               .catch(error => {
//                   console.error('Erro:', error);
//                   Swal.fire({
//                       title: "Erro!",
//                       text: "Algo deu errado.",
//                       icon: "error"
//                   });
//               });
//       }
//   });
// }

function abrirMeuModalEnderecos() {  //Lista de endereços
  document.getElementById("meuModalEnderecos").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
}

function fecharMeuModalEnderecos() {
  document.getElementById("meuModalEnderecos").style.display = "none";
  meuModal.innerHTML = ``;
  document.querySelector("body").style.overflow = "scroll";
}
