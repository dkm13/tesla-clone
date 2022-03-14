function load() {
  hideMenu();
}

const menu = document.getElementById("opt-menu");
const background = document.querySelectorAll(".a");
function hideMenu() {
  var x = document.getElementById("opt-menu");
  x.style.display = "none";
  for (let i = 0; i < background.length; i++) {
    background[i].style.filter = "blur(0px)";
  }
}

function openMenu() {
  var x = document.getElementById("opt-menu");
  x.style.display = "block";

  for (let i = 0; i < background.length; i++) {
    background[i].style.filter = "blur(0.7px)";
  }
}
