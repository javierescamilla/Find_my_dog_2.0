let user;
function getUser(userId){
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
            console.log(user)
		})
		.catch( err => {
            console.log("Internal error")
			console.log( err );
		});
}

getUser('javierescamilla')