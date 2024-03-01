// var result = +prompt("Enter Your Result");
// if (result <= 10) {
//   if (result == 10) {
//     alert("You'r 1st");
//   } else if (result >= 8) {
//     alert("You Got A");
//   } else if (result >= 5) {
//     alert("You Got B");
//   } else if (result >= 3) {
//     alert("You Got C");
//   } else {
//     alert("You Failed!");
//   }
// } else {
//   alert("Hamnay kab diya");
// }

// Notification.requestPermission();

var steps = document.getElementById("steps");

function counter() {
  var hours = new Date().getHours();
  var minute = new Date().getMinutes();
  var second = new Date().getSeconds();
  var miliSecond = 0;
    setInterval(function () {
    miliSecond++;
    if (miliSecond == 100) {
      miliSecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    steps.innerHTML = `${(hours % 12) || 12}:${minute}:${second}:${miliSecond}`;
  }, 10);
}

function blinkText() {
  if (steps.style.display == "none") {
    steps.style.display = "";
  } else {
    steps.style.display = "none";
  }
}
