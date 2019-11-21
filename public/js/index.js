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
            $('#imagePreviewLost>.imagePreviewPhoto').attr('src','data:image/png;base64,'+ responseJSON[indexFoundDog].image);
            $('#imagePreviewLost>.imagePreviewText').css('display','none');
            $('#imagePreviewLost>.imagePreviewPhoto').css('display','block');  
            $('#nameDogPostFeed').append(`${responseJSON[indexFoundDog].name}`);
            $('#breedDogPostFeed').append(`${responseJSON[indexFoundDog].breed}`);
            $('#colorDogPostFeed').append(`${responseJSON[indexFoundDog].color}`);
            $('#dateDogPostFeed').append(`${responseJSON[indexFoundDog].date}`);
            $('#rewardDogPostFeed').append(`${responseJSON[indexFoundDog].reward}`);
            $('#commentsDogPostFeed').append(`${responseJSON[indexFoundDog].comments}`);
            $('#addrDogPostFeed').append(`${responseJSON[indexFoundDog].address}`);
            $('#postalCodeDogPostFeed').append(`${responseJSON[indexFoundDog].zipCode}`);
            $('#cityDogPostFeed').append(`${responseJSON[indexFoundDog].city}`);
            $('#stateDogPostFeed').append(`${responseJSON[indexFoundDog].state}`);
            $('#countryDogPostFeed').append(`${responseJSON[indexFoundDog].country}`);
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
            $('#breedDogPostFeed').append(`${responseJSON[indexFoundDog].breed}`);
            $('#colorDogPostFeed').append(`${responseJSON[indexFoundDog].color}`);
            $('#dateDogPostFeed').append(`${responseJSON[indexFoundDog].date}`);
            $('#commentsDogPostFeed').append(`${responseJSON[indexFoundDog].comments}`);
            $('#addrDogPostFeed').append(`${responseJSON[indexFoundDog].address}`);
            $('#postalCodeDogPostFeed').append(`${responseJSON[indexFoundDog].zipCode}`);
            $('#cityDogPostFeed').append(`${responseJSON[indexFoundDog].city}`);
            $('#stateDogPostFeed').append(`${responseJSON[indexFoundDog].state}`);
            $('#countryDogPostFeed').append(`${responseJSON[indexFoundDog].country}`);
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
            $('#imagePreviewSeen>.imagePreviewPhoto').attr('src','data:image/png;base64,'+ responseJSON[indexFoundDog].image);
            $('#imagePreviewSeen>.imagePreviewText').css('display','none');
            $('#imagePreviewSeen>.imagePreviewPhoto').css('display','block');
            $('#breedDogPostFeed').append(`${responseJSON[indexFoundDog].breed}`);
            $('#colorDogPostFeed').append(`${responseJSON[indexFoundDog].color}`);
            $('#dateDogPostFeed').append(`${responseJSON[indexFoundDog].date}`);
            $('#commentsDogPostFeed').append(`${responseJSON[indexFoundDog].comments}`);
            $('#addrDogPostFeed').append(`${responseJSON[indexFoundDog].address}`);
            $('#postalCodeDogPostFeed').append(`${responseJSON[indexFoundDog].zipCode}`);
            $('#cityDogPostFeed').append(`${responseJSON[indexFoundDog].city}`);
            $('#stateDogPostFeed').append(`${responseJSON[indexFoundDog].state}`);
            $('#countryDogPostFeed').append(`${responseJSON[indexFoundDog].country}`);
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