function initMap() {

  let latitude = parseFloat(localStorage.getItem("latitude"));
  let longitude = parseFloat(localStorage.getItem("longitude"));
 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: {lat:latitude,lng:longitude},
    });
    new google.maps.Marker({
      position: {lat:latitude,lng:longitude},
      map,
      icon: "png file/person icon.png",
      animation: google.maps.Animation.DROP
      
    });

  }

