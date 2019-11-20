function showFoundDogs(){
	fetch('/blog-posts')
		.then( response => {

			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {   
			console.log(responseJSON)       
			for ( let i = 0; i < responseJSON.length; i ++ ){
				$('.Found_dogs_section').find('ul')
                    .append(`<b>${responseJSON[i].breed}</b>`)
			}
		})
		.catch( err => {
            console.log("Internal error")
			console.log( err );
		});
}

showFoundDogs()