var endScroll = 0;
window.addEventListener("scroll", function () {
  var nav = document.getElementById("js-nav");
  var scroll = window.pageYOffset || document.body.scrollTop;
  var portfolio= document.getElementById("port");
  var about = document.getElementById("ab");
  var contact = document.getElementById("con");
  console.log(scroll);
  if (scroll > endScroll) {
    nav.classList.add("nav-size");
  }
  else{
    nav.classList.remove("nav-size");
    portfolio.classList.remove("menu-color");
  }

  if (scroll > 625) {
    portfolio.classList.add("menu-color");
    about.classList.remove("menu-color");
  }
  if (scroll > 1440) {
    portfolio.classList.remove("menu-color");
    about.classList.add("menu-color");
  }
  if (scroll > 1980) {
    about.classList.remove("menu-color");
    contact.classList.add("menu-color");
  }
  else {
    contact.classList.remove("menu-color");
  }
})

var input = document.getElementsByClassName("cont-input");
var label = document.getElementsByClassName("hidden-label");
var alert = document.getElementsByClassName("error-email");

function validar(indice,regex) {
  if (input[indice].value.length > 0) {
    label[indice].style.display="block";
  }
  if (!regex.test(input[indice].value)) {
    alert[indice].style.display="block";
  }
  if(input[indice].value.length == 0){
    label[indice].style.display="none";
    alert[indice].style.display="none";
  }
}

input[0].addEventListener("input", function () {
  validar(0,/([A-Z]{1}[a-zñáéíóú]\D+)$/);
})
input[1].addEventListener("input", function () {
  validar(1,/\S+@\S+\.\S+/);
})
input[2].addEventListener("input", function () {
  validar(2,/9[0-9]{8}/);
})
input[3].addEventListener("input", function () {
  validar(3,/([A-Z]{1}[a-zñáéíóú]\D+)$/);
})

document.getElementsByClassName("btn-enviar")[0].addEventListener("click",function (e) {
  e.preventDefault();
})
