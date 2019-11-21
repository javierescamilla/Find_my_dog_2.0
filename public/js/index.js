var indexLostDog = 0;
var indexFoundDog = 0;
var indexSeenDog = 0;
var lengthLostDog;
var lengthFoundDog;
var lengthSeenDog;

function showLostDogs(){
	fetch('/lost-dogs')
		.then( response => {

			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {
            //lengthLostDog = responseJSON.length;
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
            console.log("Internal error")
			console.log( err );
		});
}

function showFoundDogs(){
	fetch('/found-dogs')
		.then( response => {

			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {   
            //lengthFoundDog = responseJSON.length;
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
            console.log("Internal error")
			console.log( err );
		});
}

function showSeenDogs(){
	fetch('/seen-dogs')
		.then( response => {

			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {   
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
            console.log("Internal error")
			console.log( err );
		});
}

/*function getNewPosts(){
    $('#lostDogBack').on('reset', function(event){
        event.preventDefault();
        if(indexLostDog > 0){
            indexLostDog--;
            showLostDogs();
        }
    });
    $('#lostDogNext').on('submit', function(event){
        event.preventDefault();
        if(indexLostDog < ){
            indexLostDog--;
            showLostDogs();
        }
    });*/


showLostDogs();
showFoundDogs();
showSeenDogs();