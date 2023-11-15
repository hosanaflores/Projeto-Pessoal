function logar(){
    
    var email = input_email.value;
    var senha = input_senha.value;


    if(email.indexOf('@') < 0 && email.indexOf('.com') < 0){
        div_mensagem.innerHTML = `<p class="error"> Email incorreto! <br> </p>`;
    }

    if(senha.length < 8){
        div_mensagem.innerHTML += `<p class="error"> Senha deve ter mais de 8 digitos! <br> </p>`;
    }


    //PARA LOGAR NO SISTEMA
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.status == 200) {

            resposta.json().then(json => {
                console.log(json[0].nomeFantasia); //vetor, pegando o nomeFantasia do primeiro item
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id; 
                
                window.location.href = "../dashboard/dashboard.html";
                // apenas para exibir o loading
            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");
            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    
}
