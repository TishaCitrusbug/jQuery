/*

Mouse Events	    Keyboard Events	        Form Events	        Document/Window Events
click	            keypress	            submit	            load
dblclick	        keydown	                change	            resize
mouseenter	        keyup	                focus	            scroll
mouseleave	 	                            blur	            unload

*/

//Mouse Events :- 
//$(document).ready() :- The $(document).ready() method allows us to execute a function when the document is fully loaded.

//click :- 
$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });
});

//dblClick :- 
$(document).ready(function () {
    $("p").dblclick(function () {
        $(this).hide();
    });
});

//Mouse Enter :- 
$(document).ready(function () {
    $("#p1").mouseenter(function () {
        alert("You entered p1!");
    });
});

//Mouse Leave :- 
$(document).ready(function () {
    $("#p2").mouseleave(function () {
        alert("Bye! You now leave p2!");
    });
});

//Mouse Down :- 
$(document).ready(function () {
    $("#p3").mousedown(function () {
        alert("Bye! You now leave p3!");
    });
});

//Mouse Up :- 
$(document).ready(function () {
    $("#p4").mouseup(function () {
        alert("Mouse up over p4!");
    });
});

//Hover :- 
$(document).ready(function () {
    $("#p5").hover(function () {
        alert("You entered p1!");
    },
        function () {
            alert("Bye! You now leave p1!");
        });
});

//Form Event :-

//Focus :- 
$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function () {
        $(this).css("background-color", "green");
    });
});

//Blur :-
$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("background-color", "pink");
    });
    $("input").blur(function () {
        $(this).css("background-color", "green");
    });
});

//On method :- 
$(document).ready(function () {
    $("p").on("click", function () {
        $(this).hide();
    });
});