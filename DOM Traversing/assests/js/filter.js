$(document).ready(function () {

    //$('p').first().css('background', 'black'); //The first() method returns the first element of the specified elements.
    // $('p').last().css('background', 'black'); //The last() method returns the last element of the specified elements.
    // $('ul li').eq(2).css('background', 'black');//The eq() method returns an element with a specific index number of the selected elements.
    // $('p').filter('.test').css('background', 'black'); //The filter() method lets you specify a criteria. Elements that do not match the criteria are removed from the selection, and those that match will be returned.
    // $('p').not('.test').css('background', 'black');//The not() method returns all elements that do not match the criteria. Tip: The not() method is the opposite of filter().
    $('ul li').slice(2).css('background', 'pink'); // slicing start the given index number 
});