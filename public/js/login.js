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

function initSesion(){
    $('#loginForm').on('submit', function(event){
        console.log("Click button")
        event.preventDefault();
        validateUser($('#userNameLogin').val(),$('#passwordLogin').val());
    });
}
function validateUser(userId, typedPassword){
    console.log("Validate user")
    fetch('/users/' + userId)
		.then( response => {
			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {  
            //console.log(typeof(JSON.stringify(responseJSON)))
            console.log("Response Ok")
            user = responseJSON
            console.log(user.password)
            if(user.password == typedPassword){
                console.log(username);
                qString = "../index.html?usr="+user.username;
                window.location.href = qString;
            }
            else{
                $('#errorMessageLogin').html('');
                $('#errorMessageLogin').html('Wrong password or username. Try again.');
                $('#errorMessageLogin').css('color','red');
            }
		})
		.catch( err => {
            $('#errorMessageLogin').html('');
            $('#errorMessageLogin').html('Wrong password or username. Try again.');
            $('#errorMessageLogin').css('color','red');
            console.log("Internal error")
			console.log( err );
        });
}

initSesion();