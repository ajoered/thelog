var pos;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.052, lng: -118.243},
    zoom: 6
  });


  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: pos
      });

      marker.addListener('click', getInfo)

      map.setCenter(pos);
    }, function() {
      handleLocationError(true, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, marker, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, marker, pos) {
  marker.setPosition(pos);
  marker.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

function getInfo() {
  var latlng = pos.lat + "," + pos.lng
  $('#myModal').modal('open')
  document.getElementById('title').innerHTML = "Venice";
  var latlng = pos.lat + "," + pos.lng
  $.ajax({
    type: "GET",
    url: "http://api.worldweatheronline.com/premium/v1/marine.ashx?key=5153167ce5c24b0284e215756171402&format=xml&q=" + latlng,
    success: consoleLog
  });

}

function consoleLog(response) {
  var $response=$(response);
  console.log($response);

 //Query the jQuery object for the values
 var oneval = $response.filter('date').text();

  console.log(oneval);
}
