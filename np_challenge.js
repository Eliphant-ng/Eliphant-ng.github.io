function initMap() {
  swal("NP Game Challenge!",
 "Find the three hidden locations around campus! BE the FASTEST and OUTBEAT your friends! Remeber to press play to begin your challenge. Good Luck!!");
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

