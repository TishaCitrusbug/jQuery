
//Get Content and Attributes :- jQuery contains powerful methods for changing and manipulating HTML elements and attributes.
/*

Get Content - text(), html(), and val()
Three simple, but useful, jQuery methods for DOM manipulation are:

text() - Sets or returns the text content of selected elements
html() - Sets or returns the content of selected elements (including HTML markup)
val() - Sets or returns the value of form fields

*/

//The example of text() and html() :- 
/*$(document).ready(function () {
    $("#btn1").click(function () {
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function () {
        alert("HTML: " + $("#test").html());
    });
});

//The example of val() :- 
$(document).ready(function () {
    $("button").click(function () {
        alert("Value: " + $("#test1").val());
    });
});

//Get Attributes - attr() :- The jQuery attr() method is used to get attribute values.
$(document).ready(function () {
    $("button").click(function () {
        alert($("#w3s").attr("href"));
    });
});*/



//Set Content and Attributes :- 
/*

Set Content - text(), html(), and val()
We will use the same three methods from the previous page to set content:

text() - Sets or returns the text content of selected elements
html() - Sets or returns the content of selected elements (including HTML markup)
val() - Sets or returns the value of form fields

*/

//The example of text(), html() and val() :- 
$(document).ready(function () {
    $("#btn1").click(function () {
        $("#test3").text("Hello world!");
    });
    $("#btn2").click(function () {
        $("#test4").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function () {
        $("#test5").val("Dolly Duck");
    });
});

//A Callback Function for text(), html(), and val() :- All of the three jQuery methods above: text(), html(), and val(), also come with a callback function. The callback function has two parameters: the index of the current element in the list of elements selected and the original (old) value. You then return the string you wish to use as the new value from the function.
$(document).ready(function () {
    $("#btn4").click(function () {
        $("#test6").text(function (i, origText) {
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")";
        });
    });

    $("#btn5").click(function () {
        $("#test7").html(function (i, origText) {
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")";
        });
    });
});

//Set Attributes - attr() :- The jQuery attr() method is also used to set/change attribute values.
$(document).ready(function () {
    $("button").click(function () {
        $("#w3s1").attr("href", "https://www.w3schools.com/jquery/");
    });
});

//A callback function - attr() :-
$(document).ready(function () {
    $("button").click(function () {
        $("#w3s2").attr("href", function (i, origValue) {
            return origValue + "/jquery/";
        });
    });
});

// Add Elements:-
/*

append() - Inserts content at the end of the selected elements
prepend() - Inserts content at the beginning of the selected elements
after() - Inserts content after the selected elements
before() - Inserts content before the selected elements

*/

//append() method :- 
$(document).ready(function () {
    $("#btn5").click(function () {
        $("p").append(" <b>Appended text</b>.");
    });

    $("#btn6").click(function () {
        $("ol").append("<li>Appended item</li>");
    });
});

//prepend() Method :- 
$(document).ready(function () {
    $("#btn7").click(function () {
        $("p").prepend("<b>Prepended text</b>. ");
    });
    $("#btn8").click(function () {
        $("ol").prepend("<li>Prepended item</li>");
    });
});

// After And Before method :- 
$(document).ready(function () {
    $("#btn9").click(function () {
        $("img").before("<b>Before</b>");
    });

    $("#btn10").click(function () {
        $("img").after("<i>After</i>");
    });
});

// Remove Elements :-

/*

remove() - Removes the selected element (and its child elements)
empty() - Removes the child elements from the selected element

*/

// remove() method :- 
$(document).ready(function () {
    $("button").click(function () {
        $("#div1").remove();
    });
});

//empty() method :- 
$(document).ready(function () {
    $("#emp").click(function () {
        $("#div2").empty();
    });
});

// Filter the Elements to be Removed :- The jQuery remove() method also accepts one parameter, which allows you to filter the elements to be removed. The parameter can be any of the jQuery selector syntaxes.
// The following example removes all <p> elements with class="test":  
$(document).ready(function () {
    $("button").click(function () {
        $("p").remove(".test");
    });
});


// CSS Classes :- 
/*

addClass() - Adds one or more classes to the selected elements
removeClass() - Removes one or more classes from the selected elements
toggleClass() - Toggles between adding/removing classes from the selected elements
css() - Sets or returns the style attribute

*/

// addClass():- 
$(document).ready(function () {
    $("button").click(function () {
        //$("h1, h2, p").addClass("blue");
        //$("div").addClass("important");
        $("div").addClass("important blue");
    });
});

//removeClass() :- 
$(document).ready(function () {
    $("#but").click(function () {
        $("h1, h2, p").removeClass("pink");
    });
});

//Toggle class() :-
$(document).ready(function () {
    $("button").click(function () {
        $("h3, h4").toggleClass("purple");
    });
});


// CSS() Method :- The css() method sets or returns one or more style properties for the selected elements.
/*
Return a CSS Property :- 

To return the value of a specified CSS property, use the following syntax:
css("property name");
 */
$(document).ready(function () {
    $("button").click(function () {
        alert("Background color = " + $("p").css("background-color"));
    });
});

/* Set a CSS Property :-

To set a specified CSS property, use the following syntax:
css("property name","value");
*/
$(document).ready(function () {
    $("button").click(function () {
        $(".get").css("background-color", "yellow");
    });
});

/* Set Multiple CSS Properties :- 

To set multiple CSS properties, use the following syntax:
css({"property name":"value","property name":"value",...}); 
*/
$(document).ready(function () {
    $("button").click(function () {
        $(".mul").css({ "background-color": "purple", "font-size": "200%" });
    });
});