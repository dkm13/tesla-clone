function load() {
  hideMenu();
}

const menu = document.getElementById("opt-menu");
const backgrounds = document.querySelectorAll(".a");

function hideMenu() {
  var x = document.getElementById("opt-menu");
  x.style.display = "none";
  for (let i = 0; i < backgrounds.length; i++) {
    backgrounds[i].style.filter = "blur(0px) brightness(100%)";
  }
}

function openMenu() {
  var x = document.getElementById("opt-menu");
  x.style.display = "block";
  for (let i = 0; i < backgrounds.length; i++) {
    backgrounds[i].style.filter = "blur(2.6px) brightness(80%)";
  }
}
