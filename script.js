function load() {
  hideMenu();
}

const menu = document.getElementById("opt-menu");

function hideMenu() {
  var x = document.getElementById("opt-menu");
  x.style.display = "none";
}

function openMenu() {
  var x = document.getElementById("opt-menu");
  x.style.display = "block";
}
