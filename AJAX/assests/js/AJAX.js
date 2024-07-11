
// $load() Method :- The jQuery load() method is a simple, but powerful AJAX method. The load() method loads data from a server and puts the returned data into the selected element.
// Syntax :- $(selector).load(URL,data,callback);
$(document).ready(function () {
    $("button").click(function () {
        $("#click").load('https://jsonplaceholder.typicode.com/posts');
    });
});

// GET - Requests data from a specified resource
// POST - Submits data to be processed to a specified resource

//$.get() Method :- The $.get() method requests data from the server with an HTTP GET request.

// Syntax:-$.get(URL,callback);
/*The required URL parameter specifies the URL you wish to request.
The optional callback parameter is the name of a function to be executed if the request succeeds.
The following example uses the $.get() method to retrieve data from a file on the server:*/

$(document).ready(function () {
    $("#btn").click(function () {
        $.get("https://jsonplaceholder.typicode.com/posts", function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});

// $.post() Method :- The $.post() method requests data from the server using an HTTP POST request.

// Syntax  :- $.post(URL,data,callback);
//The required URL parameter specifies the URL you wish to request.
$(document).ready(function () {
    $("post_mt").click(function () {
        $.post("https://jsonplaceholder.typicode.com/posts",
            {
                name: "Donald Duck",
                city: "Duckburg"
            },
            function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            });
    });
});