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

//Slide Up :- The jQuery slideUp() method is used to slide up an element.
$(document).ready(function () {
    $("#flip1").click(function () {
        $("#panel1").slideUp("slow");
    });
});

//Slide Toggle :- The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.
$(document).ready(function () {
    $("#flip2").click(function () {
        $("#panel2").slideToggle("slow");
    });
});


//Animation 

//Animate method :- The jQuery animate() method is used to create custom animations.
//Syntax :-  $(selector).animate({params},speed,callback); (The required params parameter defines the CSS properties to be animated.)
$(document).ready(function () {
    $("button").click(function () {
        $("div").animate({ left: '250px' });
    });
});

//animate() - Manipulate Multiple Properties :- Notice that multiple properties can be animated at the same time:
$(document).ready(function () {
    $("button").click(function () {
        $("div").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});

//animate() - Using Relative Values :- It is also possible to define relative values (the value is then relative to the element's current value). This is done by putting += or -= in front of the value:
$(document).ready(function () {
    $("button").click(function () {
        $("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});

//animate() - Using Pre-defined Values :- You can even specify a property's animation value as "show", "hide", or "toggle":
$(document).ready(function () {
    $("button").click(function () {
        $("div").animate({
            height: 'toggle'
        });
    });
});

//animate() - Uses Queue Functionality :- By default, jQuery comes with queue functionality for animations. This means that if you write multiple animate() calls after each other, jQuery creates an "internal" queue with these method calls. Then it runs the animate calls ONE by ONE.
$(document).ready(function () {
    $("button").click(function () {
        var div = $("div");
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', opacity: '0.8' }, "slow");
    });
});

//Stop Method :- The jQuery stop() method is used to stop an animation or effect before it is finished. The stop() method works for all jQuery effect functions, including sliding, fading and custom animations.
//Syntax :- $(selector).stop(stopAll,goToEnd);

$(document).ready(function () {
    $("#stp").click(function () {
        $("#pl").slideDown(5000);
    });
    $("#stop").click(function () {
        $("#pl").stop();
    });
});

//Callback Functions :- JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors To prevent this, you can create a callback function.
//A callback function is executed after the current effect is finished.
//Syntax :- $(selector).hide(speed,callback);

//The example below has a callback parameter that is a function that will be executed after the hide effect is completed:
$(document).ready(function () {
    $("button").click(function () {
        $("p").hide("slow", function () {
            alert("The paragraph is now hidden");
        });
    });
});

//The example below has no callback parameter, and the alert box will be displayed before the hide effect is completed:
/*
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide(1000);
    alert("The paragraph is now hidden");
  });
});
*/

//Chaining :- With jQuery, you can chain together actions/methods. Chaining allows us to run multiple jQuery methods (on the same element) within a single statement.
$(document).ready(function () {
    $("button").click(function () {
        $("#chain").css("color", "red").slideUp(2000).slideDown(2000);
    });
});

