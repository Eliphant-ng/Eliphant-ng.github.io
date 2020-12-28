// get user's location: 
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

  var lat = localStorage.setItem("lat", position.coords.latitude);
  var log = localStorage.setItem("log", position.coords.longitude);
}


let map;
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

  var lat = localStorage.setItem("lat", position.coords.latitude);
  var log = localStorage.setItem("log", position.coords.longitude);
}

function initMap() {

 var center;
 center = { lat: 1.3521, lng: 103.8198 };

  localContextMapView = new google.maps.localContext.LocalContextMapView(
    {
      element: document.getElementById("map"),
      placeTypePreferences: ["atm"],
      maxPlaceCount: 12,
      directionsOptions: { origin: center },
    }
  );

  map = localContextMapView.map;
  new google.maps.Marker({ position: center, map: map });
  map.setOptions({
    center: center,
    zoom: 16,
  });
}

// pop up button
document.getElementById("open-popup-btn").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.remove("active");
});




  