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
    console.log("trig1");
  } else {
    div1.style.display = "none";
    div2.style.display = "block";
    toRent.classList.add('is_active');
    toBuy.classList.remove('is_active');
    toBuy.classList.add('to-buy');
    console.log("trig2");

  }
}


document.getElementById("to-buy").addEventListener("click", toggleDivs);
document.getElementById("to-rent").addEventListener("click", toggleDivs);



var box2 = document.querySelector('#box-2');
//box2.style.display = "none";
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


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");
console.log(btn)

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
   


