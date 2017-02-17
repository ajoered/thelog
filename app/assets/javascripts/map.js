
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });

  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: pos
      });
      marker.addListener('click', function() {
		      $('#myModal').modal('open')
    });

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

function displayModal() {
  swal({
    title: '<h2>Venice</h2>',
    html:
      `    <div class="card">
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-tabs">
      <ul class="tabs tabs-fixed-width">
        <li class="tab"><a href="#test4">Test 1</a></li>
        <li class="tab"><a class="active" href="#test5">Test 2</a></li>
        <li class="tab"><a href="#test6">Test 3</a></li>
      </ul>
    </div>
    <div class="card-content grey lighten-4">
      <div id="test4">Test 1</div>
      <div id="test5">Test 2</div>
      <div id="test6">Test 3</div>
    </div>
  </div>`,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>'
  })

}
