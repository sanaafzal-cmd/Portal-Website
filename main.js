function toggleDivs() {
  var div1 = document.getElementById("buy-toggle");
  var div2 = document.getElementById("rent-toggle");

  var toBuy = document.getElementById('to-buy');
  var toRent = document.getElementById('to-rent');

  if (div1.style.display === "none") {
    div1.style.display = "block";
    toBuy.classList.add('is_active');
    toRent.classList.remove('is_active');
    toRent.classList.add('to-buy');
    div2.style.display = "none";
  } else {
    div1.style.display = "none";
    div2.style.display = "block";
    toRent.classList.add('is_active');
    toBuy.classList.remove('is_active');
    toBuy.classList.add('to-buy');

  }
}


document.getElementById("to-buy").addEventListener("click", toggleDivs);
document.getElementById("to-rent").addEventListener("click", toggleDivs);

// var box1 = document.querySelector('#box-1');
// var box2 = document.querySelector('#box-2');

// box2.style.display = "none";

// if(box1) {
//     box1.addEventListener('mouseenter', colorin);
//     box1.addEventListener('mouseout', colorout);

// }

// function colorin() {
//     box1.style.display = "none";
//     box2.style.display="block";
// }

// function colorout() {
//   box2.style.display = "none";
//   box1.style.display="block";
    
// }

var box2 = document.querySelector('#box-2');
box2.style.display = "none";
$(document).ready(function()
{ $("#box-1").mouseover(function()
{
   $("#box-1").css("display", "none");
   $("#box-2").css("display", "block");
  });
  $("#box-2").mouseout(function()
  { $("#box-1").css("display", "block"); 
    $("#box-2").css("display", "none"); 
  
   });});

   

  