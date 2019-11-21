function showFoundDogs(){
	fetch('/found-dogs')
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
                    .append(`<b>${responseJSON[i].breed}</b>
                             <b>${responseJSON[i].picture}</b>
                             <b>${responseJSON[i].color}</b>
                             <b>${responseJSON[i].foundOn}</b>
                             <b>${responseJSON[i].comments}</b>`)
			}
		})
		.catch( err => {
            console.log("Internal error")
			console.log( err );
		});
}

function showLostDogs(){
	fetch('/lost-dogs')
		.then( response => {

			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {   
			console.log(responseJSON)       
			for ( let i = 0; i < responseJSON.length; i ++ ){
				$('.Lost_dog_section').find('ul')
                    .append(`<b>${responseJSON[i].breed}</b>
                             <b>${responseJSON[i].picture}</b>
                             <b>${responseJSON[i].color}</b>
                             <b>${responseJSON[i].foundOn}</b>
                             <b>${responseJSON[i].comments}</b>`)
			}
		})
		.catch( err => {
            console.log("Internal error")
			console.log( err );
		});
}

showFoundDogs();
showLostDogs();