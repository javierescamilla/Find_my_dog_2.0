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
            console.log(typeof(JSON.parse(responseJSON)))
		})
		.catch( err => {
            console.log("Internal error")
			console.log( err );
		});
}

getUser('javierescamilla')