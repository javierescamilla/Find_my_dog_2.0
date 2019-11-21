function changePage(){
    $('#index').on('click', function(event){
        event.preventDefault();
        window.location.href = "../index.html?usr="+username;
    });
    $('#about').on('click', function(event){
        event.preventDefault();
        window.location.href = "../about.html?usr="+username;
    });
    $('#post').on('click', function(event){
        event.preventDefault();
        window.location.href = "../post.html?usr="+username;
    });
    $('#login').on('click', function(event){
        event.preventDefault();
        window.location.href = "../login.html?usr="+username;
    });
    $('#stories').on('click', function(event){
        event.preventDefault();
        window.location.href = "../stories.html?usr="+username;
    });
}

changePage();