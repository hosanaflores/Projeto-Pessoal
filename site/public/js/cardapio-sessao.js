function cadastrar() {
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

}

