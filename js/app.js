var endScroll = 0;
window.addEventListener("scroll", function () {
  var nav = document.getElementById("js-nav");
  var scroll = window.pageYOffset || document.body.scrollTop;
  if (scroll > endScroll) {
    nav.classList.add("nav-size");
  }
  else{
    nav.classList.remove("nav-size");
  }
})

var input = document.getElementsByClassName("cont-input");
var label = document.getElementsByClassName("hidden-label");

function validar(indice,regex) {
  if (input[indice].value.length > 0) {
    label[indice].style.display="block";
  }
  else {
    label[indice].style.display="none";
  }
}

input[0].addEventListener("input", function () {
  validar(0);
})
input[1].addEventListener("input", function () {
  validar(1);
})
input[2].addEventListener("input", function () {
  validar(2);
})
input[3].addEventListener("input", function () {
  validar(3);
})
