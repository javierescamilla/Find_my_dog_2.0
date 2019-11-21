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
            user = JSON.stringify(responseJSON)
            if(user.password == typedPassword){
                console.log('Correct password')
            }
		})
		.catch( err => {
            console.log("Internal error")
			console.log( err );
        });
}

initSesion();