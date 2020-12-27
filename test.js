// get user's location: 
const sucessCallBack = (position) => {
    console.log(position);
};

const errorCallBack = (error) => {
    console.error(error);
};

navigator.geolocation.getCurrentPosition(sucessCallBack,errorCallBack);

console.log(sucessCallBack);

let map;

function initMap() {
  const center = { lat: 1.3521, lng: 103.8198 };

  const localContextMapView = new google.maps.localContext.LocalContextMapView(
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


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.add("sign-in-mode");
});


  