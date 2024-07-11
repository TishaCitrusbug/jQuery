
$(document).ready(function() {
    // Step 1: Select the element with ID 'main-title'
    let mainTitle = $('#text');

    // Step 2: Change the text content of the selected element
    mainTitle.text('New Title');

    // Step 3: Add a CSS class to the selected element
    mainTitle.addClass('highlight');

    // Step 4: Attach a click event listener to the button
    $('#toggle-button').on('click', function() {
        // Step 5: Inside the event handler, toggle the visibility of the content
        $('.content').toggleClass('hidden');
    });

    // Step 5: Inside the event handler, animate the content
    $("#animate-button").click(function(){
        let div = $(".content-2");
        div.removeClass('hidden');
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});
