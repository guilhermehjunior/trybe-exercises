const head = document.getElementById("header-container");
head.style.backgroundColor = "lightgreen";

const urgente = document.getElementsByClassName("emergency-tasks");
urgente[0].style.backgroundColor = "lightpink";
const naoUrgente = document.getElementsByClassName("no-emergency-tasks");
naoUrgente[0].style.backgroundColor = "lightyellow";

const titulosUrgentes = document.querySelectorAll(".emergency-tasks h3");
titulosUrgentes[0].style.backgroundColor = "purple";
titulosUrgentes[1].style.backgroundColor = "purple";

const titulosNaoUrgentes = document.querySelectorAll(".no-emergency-tasks h3");
titulosNaoUrgentes[0].style.backgroundColor = "black";
titulosNaoUrgentes[1].style.backgroundColor = "black";

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "darkgreen";
