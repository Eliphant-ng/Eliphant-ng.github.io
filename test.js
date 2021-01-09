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
center = {lat: latitude,lng:longitude};














  