
/*Abrir cardápio*/
function verCardapio(){
        document.getElementById('meuModal').style.display = 'flex';
}

/*Fechar cardápio*/ 
function fecharCardapio(){
    document.getElementById('meuModal').style.display = 'none';
    meuModal.innerHTML = ``; /* para limpar*/
}