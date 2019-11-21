function getUser(userId){
	fetch('/users/' + userId)
		.then( response => {

			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {  
            console.log("Ok")
		})
		.catch( err => {
            console.log("Internal error")
			console.log( err );
		});
}

let user = getUser('javierescamilla')
console.log(user)