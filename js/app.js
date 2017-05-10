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
