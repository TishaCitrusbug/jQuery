// Effect :-

// Hide And Show :- 
/*Syntax:-

$(selector).hide(speed,callback);
$(selector).show(speed,callback);

The optional speed parameter specifies the speed of the hiding/showing, and can take the following values: "slow", "fast", or milliseconds.
The optional callback parameter is a function to be executed after the hide() or show() method */

$(document).ready(function () {
    $("button").click(function () {
        $("p").hide(1000);
        $("p").show(1000);
    });
});

//Toggle :- 
$(document).ready(function () {
    $("button").click(function () {
        $("p").toggle();
    });
});


//Fade Method :-

//Fade In :- The jQuery fadeIn() method is used to fade in a hidden element.
$(document).ready(function () {
    $("button").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});