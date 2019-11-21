function changePage(){
    $('#index').on('click', function(event){
        event.preventDefault();
        console.log("home");
        window.location.href = "index.html";
    });
    $('#about').on('click', function(event){
        event.preventDefault();
        window.location.href = "about.html";
    });
    $('#post').on('click', function(event){
        event.preventDefault();
        window.location.href = "post.html";
    });
    $('#login').on('click', function(event){
        event.preventDefault();
        window.location.href = "login.html";
    });
}

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

changePage();
showFoundDogs();