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

//Fade Out :- The jQuery fadeOut() method is used to fade out a visible element.
$(document).ready(function () {
    $("button").click(function () {
        $("#div4").fadeOut();
        $("#div5").fadeOut("slow");
        $("#div6").fadeOut(3000);
    });
});

//Fade Toggle :- The jQuery fadeToggle() method toggles between the fadeIn() and fadeOut() methods.
$(document).ready(function () {
    $("button").click(function () {
        $("#div7").fadeToggle();
        $("#div8").fadeToggle("slow");
        $("#div9").fadeToggle(3000);
    });
});

//Fade To :- The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).
$(document).ready(function () {
    $("button").click(function () {
        $("#div10").fadeTo("slow", 0.15);
        $("#div11").fadeTo("slow", 0.4);
        $("#div12").fadeTo("slow", 0.7);
    });
});

// Slide Method :- 

//Slide Down :- The jQuery slideDown() method is used to slide down an element.
$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideDown("slow");
    });
});

