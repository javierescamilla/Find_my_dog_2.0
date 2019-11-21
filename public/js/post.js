var placeSearch, autocomplete, option;

var lostHtml = `<p>Please fill the following form correctly. Spaces marked with * are obligatory</p>
                <input type='file' name='inputPicture' id='inputPicture'>
                <div class='imagePreview' id='imagePreview'>
                    <span class='imagePreviewText'>Image Preview</span>
                    <img src='' alt='Image preview' class='imagePreviewPhoto'>
                </div>
                <table id="infoTableForm">
                    <tbody id='credentialsTableBody'> 
                        <tr>       
                            <td><label for='nameDogForm'><h4>Name*</h4></label></td>
                        </tr>
                        <tr>
                            <td><input type='text' id='nameDogForm' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td><label for='breedDogForm'><h4>Breed*</h4></label></td>
                        </tr>
                        <tr>
                            <td><input type='text' id='breedDogForm' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td><label for='colorDogForm'><h4>Color*</h4></label></td>
                        </tr>
                        <tr>
                            <td><input type='text' id='colorDogForm' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td><label for='timeOfInteraction'><h4>Date lost*</h4></label></td>
                        </tr>
                        <tr>
                            <td><input type='text' id='timeOfInteraction' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td><label for='reward'><h4>Reward</h4></label></td>
                        </tr>
                        <tr>
                            <td><input type='text' id='reward' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td><label for='commentsDogForm'><h4>Comments</h4></label></td>
                        </tr>
                        <tr>
                            <td><textarea type='text' id = 'commentsDogForm' class='regInput' required></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody id='#addressTableBody'>
                        <tr>
                            <td class='labelColumn'><label for='searchInputDog'><h4>Location*</h4></label></td>
                            <td colspan='3'><input type='search' id='searchInputDog' placeholder="Search address" class='regInput'></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='street_number'><h4>No.</h4></label></td>
                            <td class='numberColumn'><input type='text' id='street_number' class='regInput'></td> 
                            <td class='labelColumn'><label for='route'><h4>Address</h4></label></td>
                            <td class='stringColum'><input type='text' id='route' class='regInput'></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='postal_code'><h4>Zip Code</h4></label></td>
                            <td class='numberColumn'><input type='text' id='postal_code' class='regInput'></td>
                            <td class='labelColumn'><label for='locality'><h4>City*</h4></label></td>
                            <td class='stringColum'><input type='text' id='locality' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='administrative_area_level_1'><h4>State*</h4></label>
                            <td colspan='3'><input type='text' id='administrative_area_level_1' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='country'><h4>Country*</h4></label></td>
                            <td colspan='3'><input type='text' id='country' class='regInput' required></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button type='submit' class='submitButton'>Post</button>
                </div>`;

var foundHtml = `<p>Please fill the following form correctly. Spaces marked with * are obligatory</p>
                <input type='file' name='inputPicture' id='inputPicture'>
                <div class='imagePreview' id='imagePreview'>
                    <span class='imagePreviewText'>Image Preview</span>
                    <img src='' alt='Image preview' class='imagePreviewPhoto'>
                </div>
                <table id="infoTableForm">
                    <tbody id='credentialsTableBody'> 
                        <tr>
                            <td><label for='breedDogForm'><h4>Breed*</h4></label></td>
                        </tr>
                        <tr>
                            <td><input type='text' id='breedDogForm' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td><label for='colorDogForm'><h4>Color*</h4></label></td>
                        </tr>
                        <tr>
                            <td><input type='text' id='colorDogForm' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td><label for='timeOfInteraction'><h4>Date found*</h4></label></td>
                        </tr>
                        <tr>
                            <td><input type='text' id='timeOfInteraction' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td><label for='commentsDogForm'><h4>Comments</h4></label></td>
                        </tr>
                        <tr>
                            <td><textarea type='text' id = 'commentsDogForm' class='regInput' required></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody id='#addressTableBody'>
                        <tr>
                            <td class='labelColumn'><label for='searchInputDog'><h4>Location*</h4></label></td>
                            <td colspan='3'><input type='search' id='searchInputDog' placeholder="Search address" class='regInput'></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='street_number'><h4>No.</h4></label></td>
                            <td class='numberColumn'><input type='text' id='street_number' class='regInput'></td> 
                            <td class='labelColumn'><label for='route'><h4>Address</h4></label></td>
                            <td class='stringColum'><input type='text' id='route' class='regInput'></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='postal_code'><h4>Zip Code</h4></label></td>
                            <td class='numberColumn'><input type='text' id='postal_code' class='regInput'></td>
                            <td class='labelColumn'><label for='locality'><h4>City*</h4></label></td>
                            <td class='stringColum'><input type='text' id='locality' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='administrative_area_level_1'><h4>State*</h4></label>
                            <td colspan='3'><input type='text' id='administrative_area_level_1' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='country'><h4>Country*</h4></label></td>
                            <td colspan='3'><input type='text' id='country' class='regInput' required></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button type='submit' class='submitButton'>Post</button>
                </div>`;

var seenHtml = `<p>Please fill the following form correctly. Spaces marked with * are obligatory</p>
                <input type='file' name='inputPicture' id='inputPicture'>
                <div class='imagePreview' id='imagePreview'>
                    <span class='imagePreviewText'>Image Preview</span>
                    <img src='' alt='Image preview' class='imagePreviewPhoto'>
                </div>
                <table id="infoTableForm">
                    <tbody id='credentialsTableBody'> 
                        <tr>
                            <td><label for='breedDogForm'><h4>Breed*</h4></label></td>
                        </tr>
                        <tr>
                            <td><input type='text' id='breedDogForm' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td><label for='colorDogForm'><h4>Color*</h4></label></td>
                        </tr>
                        <tr>
                            <td><input type='text' id='colorDogForm' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td><label for='timeOfInteraction'><h4>Date seen*</h4></label></td>
                        </tr>
                        <tr>
                            <td><input type='text' id='timeOfInteraction' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td><label for='commentsDogForm'><h4>Comments</h4></label></td>
                        </tr>
                        <tr>
                            <td><textarea type='text' id = 'commentsDogForm' class='regInput' required></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody id='#addressTableBody'>
                        <tr>
                            <td class='labelColumn'><label for='searchInputDog'><h4>Location*</h4></label></td>
                            <td colspan='3'><input type='search' id='searchInputDog' placeholder="Search address" class='regInput'></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='street_number'><h4>No.</h4></label></td>
                            <td class='numberColumn'><input type='text' id='street_number' class='regInput'></td> 
                            <td class='labelColumn'><label for='route'><h4>Address</h4></label></td>
                            <td class='stringColum'><input type='text' id='route' class='regInput'></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='postal_code'><h4>Zip Code</h4></label></td>
                            <td class='numberColumn'><input type='text' id='postal_code' class='regInput'></td>
                            <td class='labelColumn'><label for='locality'><h4>City*</h4></label></td>
                            <td class='stringColum'><input type='text' id='locality' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='administrative_area_level_1'><h4>State*</h4></label>
                            <td colspan='3'><input type='text' id='administrative_area_level_1' class='regInput' required></td>
                        </tr>
                        <tr>
                            <td class='labelColumn'><label for='country'><h4>Country*</h4></label></td>
                            <td colspan='3'><input type='text' id='country' class='regInput' required></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button type='submit' class='submitButton'>Post</button>
                </div>`;

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function uploadPost(){
    
}

function showFields(){
    $('input[type=radio]').change(function(){
        $('.hiddenForm').html('');
        option = this.value;
        if(option == 'lost'){
            $('.hiddenForm').html(lostHtml);
            geolocate();
            initAutocomplete();
            uploadPicture();
        }
        else if(option == 'found'){
            $('.hiddenForm').html(foundHtml);
            geolocate();
            initAutocomplete();
            uploadPicture();
        }
        else if(option == 'seen'){
            $('.hiddenForm').html(seenHtml);
            geolocate();
            initAutocomplete();
            uploadPicture();
        }
    });
}

function uploadPicture(){
    $('#inputPicture').on('change', function(event){
        var file = this.files[0];
        if(file){
            var reader = new FileReader();
            $('.imagePreviewText').css('display','none');
            $('.imagePreviewPhoto').css('display','block');

            reader.addEventListener('load', function(){
                $('.imagePreviewPhoto').attr('src', this.result);
            });

            reader.readAsDataURL(file);
        }
    });
}

function initAutocomplete() {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('searchInputDog'), {types: ['geocode']});

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    autocomplete.setFields(['address_component']);

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
        }
    }
}
  
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        var circle = new google.maps.Circle(
            {center: geolocation, radius: position.coords.accuracy});
        autocomplete.setBounds(circle.getBounds());
        });
    }
}

showFields();