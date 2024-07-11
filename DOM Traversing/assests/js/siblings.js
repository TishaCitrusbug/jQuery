// Sibling Methods () :- siblings(), next(), nextAll(), nextUntil(), prev(), prevAll(), prevUntil()

$(document).ready(function(){

    $('#child-c~#abcd').css('background','black'); //The siblings() method returns all sibling elements of the selected element. ~ this sign used for siblings from one parent 
    //$('#child-c').next().css('background','black'); //The next() method returns the next sibling element of the selected element.
    //$('#child-c').nextAll().css('background','black'); //The nextAll() method returns all next sibling elements of the selected element.
   //$('#child-c').nextUntil('.test').css('background','black'); // The nextUntil() method returns all next sibling elements between two given arguments.
   // $('#child-c').prev().css('background','black'); 
   // $('#child-c').prevAll().css('background','black');
   // $('#child-c').prevUntil('.test').css('background','black');
    
});