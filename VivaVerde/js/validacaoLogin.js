function logar(){
    var email = input_email.value;
    var senha = input_senha.value;


    if(email.indexOf('@') >= 0 && email.indexOf('.com') >= 0 || email.indexOf('.br') >= 0){
        div_mensagem.innerHTML = `<p class="success"> Email correto! <br> </p>`;
    }else{
        div_mensagem.innerHTML = `<p class="error"> Email incorreto! <br> </p>`;
    }

    if(senha.length >= 8){
        div_mensagem.innerHTML += `<p class="success"> Senha correta! <br> </p>`;
    }else{
        div_mensagem.innerHTML += `<p class="error"> Senha incorreta! <br> </p>`;
    }
}