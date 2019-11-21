var username = '';
var loggedIn = false;

function getUsername(){
    var queryString = decodeURIComponent(window.location.search);
    if(queryString != ""){
        username = queryString.split('=')[1];
        if(username != ''){
            loggedIn = true;
        }
        else{
            loggedIn = false;
        }
    }
    else{
        loggedIn = false;
    }
}

getUsername();