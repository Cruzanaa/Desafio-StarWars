
var modal = document.getElementById("Modal");

var botaoModal = document.querySelector('.BotaoPlaneta');

var fechar = document.getElementsByClassName("close")[0];

botaoModal.onclick = function() {
  modal.style.display = "block";
}
fechar.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
