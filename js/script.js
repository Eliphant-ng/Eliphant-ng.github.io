// get user's location: 
sucessCallback = (position) => {
  var latitude = localStorage.setItem("latitude", position.coords.latitude);
  var longitude = localStorage.setItem("longitude", position.coords.longitude);
}

errorCallback = (error) => {
  console.log(error);
}

navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);

let latitude = parseFloat(localStorage.getItem("latitude"));
let longitude = parseFloat(localStorage.getItem("longitude"));

// get map: 
let map;

function initMap() {
  const center = { lat: latitude, lng: longitude };
  const localContextMapView = new google.maps.localContext.LocalContextMapView(
    {
      element: document.getElementById("map"),
      placeTypePreferences: ["restaurant"],
      maxPlaceCount: 12,
      directionsOptions: { origin: center },
    }
  );
  map = localContextMapView.map;
  new google.maps.Marker({ position: center, map: map });
  map.setOptions({
    center: center,
    zoom: 16,
    icon:"/png file/star.png"
  });
}














  