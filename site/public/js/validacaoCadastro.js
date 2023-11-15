//Variaveis globais para ser acessado pelas 2 funções

var cnpj = input_cnpj.value;
var telefone = input_telefone.value;
var nome = input_nome.value;
var razao = input_razaoSocial.value;
var email = input_email.value;
var senha = input_senha.value;
var tipo = select_tipo.value;
var confirmacao = input_confirmacao.value;

var dadosValidos; //Variavél auxiliar criado para quando for true, irei pro fetch

function cadastrar(){ //Função para cadastrar os campos

    //Váriavel para guardar minhas validações 
   dadosValidos = 
    cnpj.indexOf('.') >= 0 && cnpj.indexOf('-') >= 0
    && telefone.length == 11
    && nome.length >= 8
    && razao.length > 3
    && email.indexOf('@') >= 0 && email.indexOf('.com') || email.indexOf('.br') >= 0
    && senha.length >= 8
    && confirmacao == senha && confirmacao.length > 1;
   
   //criar variavel pra armazenar as validações e tirar o return

 cnpj = input_cnpj.value;
 telefone = input_telefone.value;
 nome = input_nome.value;
 razao = input_razaoSocial.value;
 email = input_email.value;
 senha = input_senha.value;
 tipo = select_tipo.value;
 confirmacao = input_confirmacao.value;

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
        input_cnpj.style.border = "0"; //Fica sem borda
    }else{
        input_cnpj.style.border = "2px solid 	#FF7F50";
    }

    if(telefone.length == 11){
        input_telefone.style.border = "0";
    }else{
        input_telefone.style.border = "2px solid 	#FF7F50";
    }
    
    if(nome.length >= 8){
        input_nome.style.border = "0";
    }else{
        input_nome.style.border = "2px solid 	#FF7F50";
    }
    
    if(razao.length > 3){
        input_razaoSocial.style.border = "0";
    }else{
        input_razaoSocial.style.border = "2px solid 	#FF7F50";
    }

    if(email.indexOf('@') >= 0 && email.indexOf('.com') || email.indexOf('.br') >= 0){
        input_email.style.border = "0";
    }else{
        input_email.style.border = "2px solid 	#FF7F50";
    }

    if(senha.length >= 8){
        input_senha.style.border = "0";
    }else{
        input_senha.style.border = "2px solid 	#FF7F50";
    }

    if(confirmacao == senha && confirmacao.length > 1){
        input_confirmacao.style.border = "0";
    }else{
        input_confirmacao.style.border = "2px solid 	#FF7F50";
    }

} 

function enviar(){ //Função do botão de cadastrar
      // Enviando o valor da nova input

      if(dadosValidos){
      fetch("/usuarios/cadastrar", { //chamando função da routes
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      cnpjServer: cnpj,
      telefoneServer: telefone,
      nomeServer: nome,
      razaoServer: razao,
      emailServer: email,
      senhaServer: senha,
      tipoServer: tipo
        }),
    })
}

}