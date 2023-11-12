// div_cnpjErrado.innerHTML = `O cnpj deve ter - e .`;
// div_telefoneErrado.innerHTML = `O telefone deve ter 11 digitos`;
// div_nomeErrado.innerHTML = `Nome deve ter mais que 3 digitos`;
// div_razaoErrado.innerHTML = `Razão Social deve ter mais que 3 digitos`;
// div_emailErrado.innerHTML = `Email deve conter @ e .`;
// div_senhaErrada.innerHTML = `Senha deve possuir 8 digitos ou mais`;
// div_confirmarErrado.innerHTML = `A confirmação de senha deve estar idêntica`;


function cadastrar(){
    var cnpj = input_cnpj.value;
    var telefone = input_telefone.value;
    var nome = input_nome.value;
    var razao = input_razaoSocial.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var confirmacao = input_confirmacao.value;


    // LIMPANDO AS DIVS 
    div_cnpj.innerHTML = ``;
    div_tel.innerHTML = ``;
    div_nome.innerHTML = ``;
    div_razao.innerHTML = ``;
    div_email.innerHTML = ``;
    div_senha.innerHTML = ``;
    div_confirmar.innerHTML = ``;


    div_cnpjErrado.innerHTML = ``;
    div_telefoneErrado.innerHTML = ``;
    div_nomeErrado.innerHTML = ``;
    div_razaoErrado.innerHTML = ``;
    div_emailErrado.innerHTML = ``;
    div_senhaErrada.innerHTML = ``;
    div_confirmarErrado.innerHTML = ``;



    if(cnpj.indexOf('.') >= 0 && cnpj.indexOf('-') >= 0){
        input_cnpj.style.border = "0";
        // div_cnpj.innerHTML = `<p class="success">CNPJ válido <br> </p>`;
    }else{
        input_cnpj.style.border = "2px solid 	#FF7F50";
        // div_cnpjErrado.innerHTML = `<p class="error">CNPJ inválido <br> </p>`;
    }



    if(telefone.length == 11){
        input_telefone.style.border = "0";
        // div_telefone.innerHTML = `<p class="success">Telefone válido</p>`
    }else{
        input_telefone.style.border = "2px solid 	#FF7F50";
        // div_telefoneErrado.innerHTML = `<p class="error">Telefone inválido</p>`;
    }
    

    if(nome.length >= 8){
        input_nome.style.border = "0";
        // div_nome.innerHTML = `<p class="success">Nome válido <br> </p>`;
    }else{
        
        input_nome.style.border = "2px solid 	#FF7F50";
        // div_nomeErrado.innerHTML = `<p class="error">Nome inválido <br> </p>`;
    }
    
    
    if(razao.length > 3){
        input_razaoSocial.style.border = "0";
        //  div_razao.innerHTML = `<p class="success">Razão Social válido!</p>`
    }else{
        input_razaoSocial.style.border = "2px solid 	#FF7F50";
        // div_razaoErrado.innerHTML = `<p class="error">Razão Social inválido!</p>`;
    }


    if(email.indexOf('@') >= 0 && email.indexOf('.com') || email.indexOf('.br') >= 0){
        input_email.style.border = "0";
        // div_email.innerHTML = `<p class="success">Email válido <br> </p>`;
    }else{
        input_email.style.border = "2px solid 	#FF7F50";
        // div_emailErrado.innerHTML = `<p class="error">Email inválido <br> </p>`;
    }


    if(senha.length >= 8){
        input_senha.style.border = "0";
        // div_senha.innerHTML = `<p class="success">Senha correta <br> </p>`;
    }else{
        input_senha.style.border = "2px solid 	#FF7F50";
        // div_senhaErrada.innerHTML = `<p class="error">Senha incorreta <br> </p>`
    }


    if(confirmacao == senha && confirmacao.length > 1){
        input_confirmacao.style.border = "0";
        // div_confirmar.innerHTML = `<p class="success">Confirmação correta! <br> </p>`;
    }else{
        input_confirmacao.style.border = "2px solid 	#FF7F50";
        // div_confirmarErrado.innerHTML = `<p class="error">Confirmaçao deve estar idêntica a senha! </p>`;
    }

} 