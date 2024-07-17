function verCardapio() {
  document.getElementById("meuModal").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
}

function fecharCardapio() {
  document.getElementById("meuModal").style.display = "none";
  meuModal.innerHTML = ``;
  document.querySelector("body").style.overflow = "scroll";
}
