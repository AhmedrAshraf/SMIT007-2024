// ===, !==, >, >=, <, <=
// ||, &&

// var totalMarks = +prompt("Enter Your Total Marks", 10);

// if (totalMarks >= 8) {
//   console.log("Your Got A+");
// }
// else if (totalMarks >= 5) {
//   console.log("Your Got A");
// }
// else if(totalMarks >= 3){
//     console.log("You Got B");
// }
// else {
//     console.log("You Failed");
// }

// var color1 = prompt("Enter Any Color");

// if (color1 == "red" || color1 == "orange" || color1 == "black") {
//   console.log("this is my favorite color");
// } else {
//   console.log("it's okay");
// }

// const age = +prompt("Enter Your Age");
// const marks = +prompt("Enter Your Marks");

// var result = "";

// if (age >= 18 && marks >= 8) {
//   result = "You Can Vote";
// } else {
//   if (age < 18) {
//     result = "You Can't Vote, becasue your age not meet the requirements";
//   } else if (marks < 8) {
//     result = "You Can't Vote, becasue your marks not meet the requirements";
//   }
// }

// console.log("🚀 ~ result:", result)

// var cities = ["Karachi", "Lahore", "Islamabad"];

// for (var count = 0; count <= 2; count++) {
//   console.log(cities[count]);
// }

// var table = +prompt("Enter Your Table");

// for (var count = 1; count < 11; count++) {
//   console.log(table + " x " + count + " = " + count*table);
// }

var text = document.getElementById("heading");
// text.style.color = "red"
// text.style.backgroundColor = "blue"

setInterval(function () {
  if (text.innerHTML === "Left") {
    text.innerHTML = "Right";
  } else {
    text.innerHTML = "Left";
  }
}, 1000);
