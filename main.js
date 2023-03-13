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

var box1 = document.querySelector('#box-1');
var box2 = document.querySelector('#box-2');

box2.style.display = "none";

if(box1) {
    box1.addEventListener('mouseenter', colorin);
    box1.addEventListener('mouseout', colorout);

}

function colorin() {
    box1.style.display = "none";
    box2.style.display="block";
}

function colorout() {
  box2.style.display = "none";
  box1.style.display="block";
    
}