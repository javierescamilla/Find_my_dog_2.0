function getUser(userId){
	fetch('/users/' + userId)
		.then( response => {

			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {   
            return String(responseJSON.password);
		})
		.catch( err => {
            console.log("Internal error")
			console.log( err );
		});
}

console.log(getUser('javierescamilla'))