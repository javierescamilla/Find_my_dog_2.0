var username = '';
var loggedIn = false;

function fillPage(){
    var queryString = decodeURIComponent(window.location.search);
    var email = queryString.split('=')[1].split('&')[0];
    username = queryString.split('=')[2];
    if(username != ''){
        loggedIn = true;
    }
    else{
        loggedIn = false;
    }
    $('#resolveDiv').append(`<h2>Resolved!</h2>
                             <h4>Contact </h4>
                             <div id='contact'>
                                ${email}
                             </div>`);
}

fillPage();