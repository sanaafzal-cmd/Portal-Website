// $(document).ready(function(){
//     $('#toggle-service').hover(function(){
//         $('#visit-service').show();
//     }, function(){
//         $('#toggle-service').hide();
//     }
//     );
// });


// $(document).ready(function() {
//     $('#box1').hover(function() {
//       $('#box2').show();
//       $('#box1').hide();
//     }, function() {
//       $('#box1').show();
//       $('#box2').hide();
//     });
    
//     $('#box2').hover(function() {
//       $('#box1').show();
//       $('#box2').hide();
//     }, function() {
//       $('#box2').show();
//       $('#box1').hide();
//     });
//   });

// Get the div element
// var myDiv = document.getElementById("box1");
// var myDiv2 = document.getElementById('box2');

// // Add an event listener for when the mouse enters the div
// myDiv.addEventListener("mouseenter", function() {
//   // Show the div by setting the display property to "block"
//   myDiv.style.display = "none";
//   myDiv2.style.display = "block";

// });

// // Add an event listener for when the mouse leaves the div
// myDiv.addEventListener("mouseleave", function() {
//   // Hide the div by setting the display property to "none"
//   myDiv2.style.display = "none";
//   myDiv.style.display = "block";

// });
  

function toggleDiv() {
    var div1 = document.querySelector('#box1');
    var div2 = document.querySelector('#box2');
    
    if (div1.style.display === 'block') {
      div1.style.display = 'none';
      div2.style.display = 'block';
      
    } else {
      div1.style.display = 'block';
      div2.style.display = 'none';
    }
  }
    