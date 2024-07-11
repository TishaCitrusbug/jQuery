
$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts', // fetching data from the API using jQuery AJAX
        method: 'GET',
        success: function(posts){
            // process the retrieved data
            posts.forEach(function(post){ 

                // Create HTML elements dynamically
                let postElement = $('<div class="post"></div>');  
                let title = $('<h2></h2>').text(post.title);
                let body = $('<p></p>').text(post.title);

                // Append elements to the post container
                postElement.append(title, body);
                $('#post-list').append(postElement);
            });
        },
        error: function(){ 
            // handled the errors
            console.error('Error fetching Data: ', error);
            $('#post-list').html('<p>Failed to load posts. Please try again later.</p>');
        }
    }); 
});

