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
  // initialize the p tag
  document.getElementById("output").innerHTML = Date();
  // find the element
  x = document.getElementById("output");
  //x.style.display = "block";

  //option 2: change the class
  x.className = "show"; // more convenient
}

function hideDate() {
  // find the element
  x = document.getElementById("output");
  //x.style.display = "none";

  //option 2: change the class
  x.className = "hide"; // more convenient
}
