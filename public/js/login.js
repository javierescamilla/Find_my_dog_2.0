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
            user = responseJSON.json()
		})
		.catch( err => {
            console.log("Internal error")
			console.log( err );
		});
}

getUser('javierescamilla')
console.log(user)