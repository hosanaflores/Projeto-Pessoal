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

}