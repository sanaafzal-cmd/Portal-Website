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
   

// // Login with Email Modal

var modalE = document.getElementById('loginWithEmail');

var btnE = document.getElementById('lge');

btnE.onclick = function() {
  modalE.style.display = "block";
  modal.style.display = 'none';
}
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modalE.style.display = "none";
}

// Get the <span> element that goes back to previous modal
var goBack1 = document.getElementsByClassName("go-back")[0];
goBack1.onclick = function(){
  modal.style.display = "block";
  modalE.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalE) {
    modalE.style.display = "none";
  }
}

// // Set Password

var modalP = document.getElementById('setPassword');

var btnP = document.getElementById('next-modal');

btnP.onclick = function() {
  modalP.style.display = "block";
  modalE.style.display = 'none';
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modalP.style.display = "none";
}

// Get the <span> element that goes back to previous modal
var goBack2 = document.getElementsByClassName("go-back")[1];
goBack2.onclick = function(){
  modalE.style.display = "block";
  modalP.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalP) {
    modalP.style.display = "none";
  }
}

// OTP

var modalO = document.getElementById('otpReceived');

var btnO = document.getElementById('create-password');

btnO.onclick = function() {
  modalO.style.display = "block";
  modalP.style.display = 'none';
}

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modalO.style.display = "none";
}

// Get the <span> element that goes back to previous modal
var goBack3 = document.getElementsByClassName("go-back")[2];
goBack3.onclick = function(){
  modalP.style.display = "block";
  modalO.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalO) {
    modalO.style.display = "none";
  }
}

//Welcome POPUP

var modalW = document.getElementById('popupWelcome');

var btnW = document.getElementById('resend-code');

btnW.onclick = function() {
  modalW.style.display = "block";
  modalO.style.display = 'none';
}

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close")[4];

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modalW.style.display = "none";
}

// Get the <span> element that goes back to previous modal
var goBack4 = document.getElementsByClassName("go-back")[3];
goBack4.onclick = function(){
  modalO.style.display = "block";
  modalW.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalW) {
    modalW.style.display = "none";
  }
}





