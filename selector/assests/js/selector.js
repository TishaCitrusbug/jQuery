//Element Selector :- 

$(document).ready(function () {
    $("button").click(function () {
        $("p").hide();
    });
});


// ID Selector :-

$(document).ready(function () {
    $("button").click(function () {
        $("#test").hide();
    });
});


// Class Selector :- 

$(document).ready(function () {
    $("button").click(function () {
        $(".test").hide();
    });
});


//More Examples of jQuery Selectors :- 

/*

$("*")	                        Selects all elements	
$(this)	                        Selects the current HTML element	
$("p.intro")	                Selects all <p> elements with class="intro"	
$("p:first")	                Selects the first <p> element	
$("ul li:first")	            Selects the first <li> element of the first <ul>	
$("ul li:first-child")	        Selects the first <li> element of every <ul>	
$("[href]")	                    Selects all elements with an href attribute	
$("a[target='_blank']")	        Selects all <a> elements with a target attribute value equal to "_blank"	
$("a[target!='_blank']")	    Selects all <a> elements with a target attribute value NOT equal to "_blank"	
$(":button")	                Selects all <button> elements and <input> elements of type="button"	
$("tr:even")	                Selects all even <tr> elements	
$("tr:odd")	                    Selects all odd <tr> elements

*/