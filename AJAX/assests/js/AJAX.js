
// $load() Method :- The jQuery load() method is a simple, but powerful AJAX method. The load() method loads data from a server and puts the returned data into the selected element.
// Syntax :- $(selector).load(URL,data,callback);
$(document).ready(function () {
    $("button").click(function () {
        $("#div1").load("jQuery\AJAX\assests\files\demo_test.txt");
    });
});

