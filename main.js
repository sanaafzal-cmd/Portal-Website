function toggleDivs() {
  var div1 = document.getElementById("buy-toggle");
  var div2 = document.getElementById("rent-toggle");
  if (div1.style.display === "none") {
    div1.style.display = "block";
    div2.style.display = "none";
  } else {
    div1.style.display = "none";
    div2.style.display = "block";
  }
}

document.getElementById("to-buy").addEventListener("click", toggleDivs);
document.getElementById("to-rent").addEventListener("click", toggleDivs);