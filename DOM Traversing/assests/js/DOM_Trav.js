//Traversing - Ancestors
/*
With jQuery you can traverse up the DOM tree to find ancestors of an element.
An ancestor is a parent, grandparent, great-grandparent, and so on.
 */

//Methods of traversing Ancestors :- parent(), parents(), parentsUntil() 

//parent() Method :- The parent() method returns the direct parent element of the selected element. This method only traverse a single level up the DOM tree.
// $(document).ready(function () {
// $("span").parent().css({ "color": "red", "border": "2px solid red" });
// });

//parents() Method :- The parents() method returns all ancestor elements of the selected element, all the way up to the document's root element (<html>).
// $(document).ready(function () {
// $("li").parents().css({ "color": "red", "border": "2px solid red" });
// });

//parentsUntil() Method :- The parentsUntil() method returns all ancestor elements between two given arguments.
$(document).ready(function () {
    $("span").parentsUntil("div").css({ "color": "red", "border": "2px solid red" });
});

// Traversing - Descendants 
/*
With jQuery you can traverse down the DOM tree to find descendants of an element.
A descendant is a child, grandchild, great-grandchild, and so on.
*/

// Method of traversing Descendants :- children(), find()

// Children() method :- The children() method returns all direct children of the selected element.
// $(document).ready(function () {
    // $("div").children().css({ "color": "red", "border": "2px solid red" });
    // $("div").children("p.first").css({"color": "red", "border": "2px solid red"}); when we want only first child then we are doing like p.first
// });

//find() Method :- The find() method returns descendant elements of the selected element, all the way down to the last descendant.
$(document).ready(function () {
    $("div").find("*").css({ "color": "red", "border": "2px solid red" }); // when we want all element to find
});
