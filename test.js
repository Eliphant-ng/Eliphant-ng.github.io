
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


// pop up button
document.getElementById("open-popup-btn").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.remove("active");
});

var starCounter = 0
function addStar(){
  starCounter += 10;
}
document.getElementById("open-popup-btn").addEventListener("click",function(){
  addStar();
});

document.getElementById("dismiss-popup-btn").addEventListener("click",function(){

window.location.href="profile.html"
});










  