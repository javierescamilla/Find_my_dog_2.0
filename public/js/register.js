var placeSearch, autocomplete;

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function createNewUser(){
  let obligatory = $('.regInput');
  $('#registerForm').on('submit', function(event){
    event.preventDefault();
    var usernameVal = /^[a-zA-Z0-9_-]{3,30}/g;
    var passwordStrengthVal = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    var username = $('#userNameReg').val();
    var password = $('#passwordReg').val();
    if( username != username.match(usernameVal)){
      $('#userNameReg').val('');
      $('#userNameReg').attr('placeholder', 'Username does not comply with restrictions');
    }
    else{
      if(password != $('#passwordConfReg').val()){
        $('#passwordConfReg').val('');
        $('#passwordReg').val('');
        $('#passwordConfReg').attr('placeholder', 'Passwords do not match.');
        $('#passwordReg').attr('placeholder', 'Passwords do not match.');
      }
      else{ 
        if(!passwordStrengthVal.test(password)){
          console.log(password);
          console.log(password.match(passwordStrengthVal));
          $('#passwordConfReg').val('');
          $('#passwordReg').attr('placeholder', 'Password does not comply with restrictions');
          $('#passwordConfReg').val('');
          $('#passwordReg').attr('placeholder', 'Passwords does not comply with restrictions');
        }
        else{
          let addr;
          if($('#street_number').val() != ''){
            addr = $('#route').val() + ' ' + $('#street_number').val();  
          }
          else{
            addr = $('#route').val();
          }
          /*$.ajax({
            url: "https://www.googleapis.com/youtube/v3/search",
            data:{
                userName: username,
                firstName: $('#firstNameReg').val(),
                lastName: $('#lastNameReg').val(),
                email: $('#emailReg').val(),
                password: password,
                address: addr,
                zipCode: $('#postal_code').val(),
                city: $('#locality').val(),
                state: $('#administrative_area_level_1').val(),
                country: $('#country').val()
            },
            method: "POST",
            dataType: "json",
            success: function (responseJSON){
              window.location.replace("home.html");  
            }
          });*/
          let data={
            userName: username,
            firstName: $('#firstNameReg').val(),
            lastName: $('#lastNameReg').val(),
            email: $('#emailReg').val(),
            password: password,
            address: addr,
            zipCode: $('#postal_code').val(),
            city: $('#locality').val(),
            state: $('#administrative_area_level_1').val(),
            country: $('#country').val()
          };
          console.log(data);
          window.location.replace("index.html");
        }
      }
    }

  });

}

function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('searchInputReg'), {types: ['geocode']});

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

createNewUser();

geolocate();

initAutocomplete();

//<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBuvQ0iqFr72LJQ2elGfmevRucSsKukCSU&libraries=places"></script>
//<script src = "./js/register.js" type = "text/javascript"></script>