var indexLostDog = 0;
var indexFoundDog = 0;
var indexSeenDog = 0;
var lengthLostDog;
var lengthFoundDog;
var lengthSeenDog;

function showLostDogs(){
	fetch('/lost-dogs/')
		.then( response => {

			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {
            lengthLostDog = responseJSON.length;
            $('#nameDogLostFeed').html('<h4>Name </h4>');
            $('#breedDogLostFeed').html('<h4>Breed </h4>');
            $('#colorDogLostFeed').html('<h4>Color </h4>');
            $('#dateDogLostFeed').html('<h4>Date </h4>');
            $('#rewardDogLostFeed').html('<h4>Reward </h4>');
            $('#commentsDogLostFeed').html('<h4>Comments </h4>');
            $('#addrDogLostFeed').html('');
            $('#postalCodeDogLostFeed').html('');
            $('#cityDogLostFeed').html('');
            $('#stateDogLostFeed').html('');
            $('#countryDogLostFeed').html('');

            $('#imagePreviewLost>.imagePreviewPhoto').attr('src','data:image/png;base64,'+ responseJSON[indexLostDog].image);
            $('#imagePreviewLost>.imagePreviewText').css('display','none');
            $('#imagePreviewLost>.imagePreviewPhoto').css('display','block');  
            $('#nameDogLostFeed').append(`${responseJSON[indexLostDog].name}`);
            $('#breedDogLostFeed').append(`${responseJSON[indexLostDog].breed}`);
            $('#colorDogLostFeed').append(`${responseJSON[indexLostDog].color}`);
            $('#dateDogLostFeed').append(`${responseJSON[indexLostDog].date}`);
            $('#rewardDogLostFeed').append(`${responseJSON[indexLostDog].reward}`);
            $('#commentsDogLostFeed').append(`${responseJSON[indexLostDog].comments}`);
            $('#addrDogLostFeed').append(`${responseJSON[indexLostDog].address}`);
            $('#postalCodeDogLostFeed').append(`${responseJSON[indexLostDog].zipCode}`);
            $('#cityDogLostFeed').append(`${responseJSON[indexLostDog].city}`);
            $('#stateDogLostFeed').append(`${responseJSON[indexLostDog].state}`);
            $('#countryDogLostFeed').append(`${responseJSON[indexLostDog].country}`);
		})
		.catch( err => {
            $('#imagePreviewFound>.imagePreviewText').css('display','flex');
            $('#imagePreviewFound>.imagePreviewPhoto').css('display','none');
            console.log("Internal error")
			console.log( err );
		});
}

function showFoundDogs(){
	fetch('/found-dogs/')
		.then( response => {

			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {   
            lengthFoundDog = responseJSON.length;
            
            $('#breedDogFoundFeed').html('<h4>Breed </h4>');
            $('#colorDogFoundFeed').html('<h4>Color </h4>');
            $('#dateDogFoundFeed').html('<h4>Date </h4>');
            $('#commentsDogFoundFeed').html('<h4>Comments </h4>');
            $('#addrDogFoundFeed').html('');
            $('#postalCodeDogFoundFeed').html('');
            $('#cityDogFoundFeed').html('');
            $('#stateDogFoundFeed').html('');
            $('#countryDogFoundFeed').html('');

            $('#imagePreviewFound>.imagePreviewPhoto').attr('src','data:image/png;base64,'+ responseJSON[indexFoundDog].image);
            $('#imagePreviewFound>.imagePreviewText').css('display','none');
            $('#imagePreviewFound>.imagePreviewPhoto').css('display','block');
            $('#breedDogFoundFeed').append(`${responseJSON[indexFoundDog].breed}`);
            $('#colorDogFoundFeed').append(`${responseJSON[indexFoundDog].color}`);
            $('#dateDogFoundFeed').append(`${responseJSON[indexFoundDog].date}`);
            $('#commentsDogFoundFeed').append(`${responseJSON[indexFoundDog].comments}`);
            $('#addrDogFoundFeed').append(`${responseJSON[indexFoundDog].address}`);
            $('#postalCodeDogFoundFeed').append(`${responseJSON[indexFoundDog].zipCode}`);
            $('#cityDogFoundFeed').append(`${responseJSON[indexFoundDog].city}`);
            $('#stateDogFoundFeed').append(`${responseJSON[indexFoundDog].state}`);
            $('#countryDogFoundFeed').append(`${responseJSON[indexFoundDog].country}`);
            
		})
		.catch( err => {
            $('#imagePreviewFound>.imagePreviewText').css('display','flex');
            $('#imagePreviewFound>.imagePreviewPhoto').css('display','none');
            console.log("Internal error")
			console.log( err );
		});
}

function showSeenDogs(){
	fetch('/seen-dogs/')
		.then( response => {

			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {
            lengthSeenDog = responseJSON.length;
            
            $('#breedDogSeenFeed').html('<h4>Breed </h4>');
            $('#colorDogSeenFeed').html('<h4>Color </h4>');
            $('#dateDogSeenFeed').html('<h4>Date </h4>');
            $('#commentsDogSeenFeed').html('<h4>Comments </h4>');
            $('#addrDogSeenFeed').html('');
            $('#postalCodeDogSeenFeed').html('');
            $('#cityDogSeenFeed').html('');
            $('#stateDogSeenFeed').html('');
            $('#countryDogSeenFeed').html('');
            
            $('#imagePreviewSeen>.imagePreviewPhoto').attr('src','data:image/png;base64,'+ responseJSON[indexSeenDog].image);
            $('#imagePreviewSeen>.imagePreviewText').css('display','none');
            $('#imagePreviewSeen>.imagePreviewPhoto').css('display','block');
            $('#breedDogSeenFeed').append(`${responseJSON[indexSeenDog].breed}`);
            $('#colorDogSeenFeed').append(`${responseJSON[indexSeenDog].color}`);
            $('#dateDogSeenFeed').append(`${responseJSON[indexSeenDog].date}`);
            $('#commentsDogSeenFeed').append(`${responseJSON[indexSeenDog].comments}`);
            $('#addrDogSeenFeed').append(`${responseJSON[indexSeenDog].address}`);
            $('#postalCodeDogSeenFeed').append(`${responseJSON[indexSeenDog].zipCode}`);
            $('#cityDogSeenFeed').append(`${responseJSON[indexSeenDog].city}`);
            $('#stateDogSeenFeed').append(`${responseJSON[indexSeenDog].state}`);
            $('#countryDogSeenFeed').append(`${responseJSON[indexSeenDog].country}`);
		})
		.catch( err => {
            $('#imagePreviewFound>.imagePreviewText').css('display','flex');
            $('#imagePreviewFound>.imagePreviewPhoto').css('display','none');
            console.log("Internal error")
			console.log( err );
		});
}

function getNewPosts(){
    $('#lostDogBack').on('reset', function(event){
        event.preventDefault();
        if(indexLostDog > 0){
            indexLostDog--;
            showLostDogs();
        }
    });
    $('#lostDogNext').on('submit', function(event){
        event.preventDefault();
        if(indexLostDog < lengthLostDog){
            indexLostDog++;
            showLostDogs();
        }
    });
    $('#foundDogBack').on('reset', function(event){
        event.preventDefault();
        if(indexFoundDog > 0){
            indexFoundDog--;
            showFoundDogs();
        }
    });
    $('#foundDogNext').on('submit', function(event){
        event.preventDefault();
        if(indexFoundDog < lengthFoundDog){
            indexFoundDog++;
            showFoundDogs();
        }
    });
    $('#seenDogBack').on('reset', function(event){
        event.preventDefault();
        if(indexSeenDog > 0){
            indexSeenDog--;
            showSeenDogs();
        }
    });
    $('#seenDogNext').on('submit', function(event){
        event.preventDefault();
        if(indexSeenDog < lengthSeenDog){
            indexSeenDog++;
            showSeenDogs();
        }
    });
}
showLostDogs();
showFoundDogs();
showSeenDogs();
getNewPosts();