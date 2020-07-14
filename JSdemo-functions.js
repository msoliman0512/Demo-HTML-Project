function welcomeMsg(name, date) {
  alert("Hello " + name + " :D" + ", today is " + date);
}
function clickedMe(id) {
  alert("you clicked a " + document.getElementById(id));
}
function message(msg) {
  document.getElementById("output").innerHTML = msg + " event";
}
