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


// function listar() {
//     var fkRestaurante = sessionStorage.ID_USUARIO;

//     fetch(`/pratos/buscarCardapioPorId/${fkRestaurante}`, {
//       method: "GET", //pegar
//     })
//       .then(function (resposta) {
//         resposta.json().then((cardapios) => {
//           cardapios.forEach((cardapio) => { //Cardapios -> Vetor que vem do banco, e o cardapio são os itens do vetor {json}
//             // listaCardapios.innerHTML += `<option value='${cardapio.idCardapio}'>${cardapio.nome}</option>`;
//             console.log(cardapio);
//           });
//         });
//       })
//       .catch(function (resposta) {
//         console.log(`#ERRO: ${resposta}`);
//       });
//   }


