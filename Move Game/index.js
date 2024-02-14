var h1 = document.getElementById("heading");
var container = document.getElementById("container-js");

setInterval(function () {
  if (h1.innerHTML == "Left") {
    container.style.justifyContent = "center";
    container.style.alignItems = "flex-start";
    container.style.backgroundColor = "orange";
    h1.innerHTML = "Top";
  } else if (h1.innerHTML == "Top") {
    container.style.alignItems = "center";
    container.style.justifyContent = "flex-end";
    container.style.backgroundColor = "red";
    h1.innerHTML = "Right";
  } else if (h1.innerHTML == "Right") {
    container.style.justifyContent = "center";
    container.style.alignItems = "flex-end";
    container.style.backgroundColor = "green";
    h1.innerHTML = "Bottom";
  } else {
    container.style.backgroundColor = "teal";
    h1.innerHTML = "Left";
    container.style.justifyContent = "flex-start";
    container.style.alignItems = "center";
  }
}, 1000);
