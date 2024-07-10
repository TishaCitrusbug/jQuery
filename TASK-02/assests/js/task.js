$(document).ready(function(){
    // Step 1: Select the element using its ID
let $myDiv = $('#myDiv');

// Step 2: Change the text content of the selected element
$myDiv.text('New Text');

// Step 3: Add a CSS class to the selected element
$myDiv.addClass('highlight');

// Step 4: Attach an event listener to the selected element
$myDiv.on('click', function() {
  // Step 5: Inside the event handler function, perform an action
  $('#hiddenDiv').fadeIn(500); // Show the hidden element with a fade-in effect
});
});