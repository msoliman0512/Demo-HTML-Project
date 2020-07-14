function welcomeMsg(name) {
  alert("Hello " + name + " :D");
}
function clickedMe(id) {
  alert("you clicked a " + document.getElementById(id));
}
function message(msg) {
  document.getElementById("output").innerHTML = msg + " event";
}
function displayDate() {
  document.getElementById("output").innerHTML = Date();
}
