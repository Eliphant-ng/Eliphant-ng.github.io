//google map: 

var lat = parseFloat(localStorage.getItem("latitude"));
var lng = parseFloat(localStorage.getItem("longitude"));

friendLat = parseFloat(localStorage.getItem("friendLat"));
friendLng = parseFloat(localStorage.getItem("friendLng"));

var directionsDisplay;
var directionsService;
var map;


// Initialize and add the map
function initMap() {
  directionsService = new google.maps.DirectionsService;
  // The location of me and friend
  const me = new google.maps.LatLng(lat, lng);
  const friend = new google.maps.LatLng(friendLat, friendLng);
  // The map, centered at my location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: me,
    zoom: 12,
  })

  // Display directions between friend and i 
  directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });
  calcRoute(); 
}
function calcRoute() {

  var start = {lat: lat, lng:lng};
  var end = {lat: friendLat, lng: friendLng};
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.WALKING
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {

      directionsDisplay.setDirections(result);
    }
  });
};





