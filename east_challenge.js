function initMap() {
    const jewel = { lat: 1.3602, lng: 103.9898 };
    const tamp  = { lat: 1.3531, lng: 103.9404 };
    const sutd = { lat: 1.3, lng: 103.7827 };
 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 1.3521 , lng: 103.8198},
    });
    new google.maps.Marker({
      position: jewel,
      map,
      
    });
    new google.maps.Marker({
        position: tamp,
        map,
        
      });
      new google.maps.Marker({
        position: sutd,
        map,
        
      });

  }

