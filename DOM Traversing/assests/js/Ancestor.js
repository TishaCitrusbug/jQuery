//Traversing - Ancestors
/*
With jQuery you can traverse up the DOM tree to find ancestors of an element.
An ancestor is a parent, grandparent, great-grandparent, and so on.
 */

//Methods of traversing Ancestors :- parent(), parents(), parentsUntil() 

//parent() Method :- The parent() method returns the direct parent element of the selected element. This method only traverse a single level up the DOM tree.
$(document).ready(function () {
    $("span").parent().css({ "color": "red", "border": "2px solid red" });
});

//parents() Method :- The parents() method returns all ancestor elements of the selected element, all the way up to the document's root element (<html>).
// $(document).ready(function () {
// $("li").parents().css({ "color": "red", "border": "2px solid red" });
// });

//parentsUntil() Method :- The parentsUntil() method returns all ancestor elements between two given arguments.
// $(document).ready(function () {
// $("span").parentsUntil("div").css({ "color": "red", "border": "2px solid red" });
// });
