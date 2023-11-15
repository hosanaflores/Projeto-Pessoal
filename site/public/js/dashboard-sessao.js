// Validação da Sessão da minha dashboard
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var mensagem_usuario = document.getElementById("mensagem_usuario");

    if (email != null && nome != null) {
        mensagem_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}