
// Get the modal
var modal = document.getElementById("Modal");

// Get the button that opens the modal
var botaoModal = document.querySelector('.BotaoPlaneta');
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var fechar = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
botaoModal.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
fechar.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
