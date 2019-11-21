function changePage(){
    $('#index').on('click', function(event){
        event.preventDefault();
        window.location.href = "index.html";
    });
    $('#about').on('click', function(event){
        event.preventDefault();
        window.location.href = "about.html";
    });
    $('#post').on('click', function(event){
        event.preventDefault();
        window.location.href = "post.html";
    });
    $('#login').on('click', function(event){
        event.preventDefault();
        window.location.href = "login.html";
    });
    $('#stories').on('click', function(event){
        event.preventDefault();
        window.location.href = "stories.html";
    });
    $('#how').on('click', function(event){
        event.preventDefault();
        window.location.href = "how.html";
    });
}

changePage();