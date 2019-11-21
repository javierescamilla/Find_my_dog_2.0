let user;
function validateUser(userId, typedPassword){
    fetch('/users/' + userId)
		.then( response => {
			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {  
            console.log(typeof(JSON.stringify(responseJSON)))
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

validateUser('javierescamilla', 'Arduino.1997')