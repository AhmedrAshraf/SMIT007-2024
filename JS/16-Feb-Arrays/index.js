var table = +prompt("Enter Table", 2)

for (var count = 1; count <= 11; count++) {
  document.write("<p class='tableRow'>" + table + " x " + count + " = ", table * count + "</p>");
}

function generateTable(){
  var table = document.getElementById("table")
  var counts = document.getElementById("counts")

  for (var count = 1; count <= counts.value; count++) {
    document.write("<p class='tableRow'>" + table.value + " x " + count + " = ", table.value * count + "</p>");
  }
}
