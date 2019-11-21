function changePage(){
    $('#index').on('click', function(event){
        event.preventDefault();
        console.log("home");
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
}

changePage();