// Traversing - Descendants 
/*
With jQuery you can traverse down the DOM tree to find descendants of an element.
A descendant is a child, grandchild, great-grandchild, and so on.
*/

// Method of traversing Descendants :- children(), find()

// Children() method :- The children() method returns all direct children of the selected element.
$(document).ready(function () {
     $("div").children().css({ "color": "red", "border": "2px solid red" });
    // $("div").children("p.first").css({"color": "red", "border": "2px solid red"}); when we want only first child then we are doing like p.first
});

//find() Method :- The find() method returns descendant elements of the selected element, all the way down to the last descendant.
// $(document).ready(function () {
    // $("div").find("*").css({ "color": "red", "border": "2px solid red" }); // when we want all element to find
// });
