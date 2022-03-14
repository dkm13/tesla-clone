function load() {
  hideMenu();
}

const body = document.body;
function hideMenu() {
  var x = document.getElementById("opt-menu");
  x.style.display = "none";
}

function openMenu() {
  var x = document.getElementById("opt-menu");
  x.style.display = "block";
}
