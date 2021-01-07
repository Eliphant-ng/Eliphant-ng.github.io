function initMap() {
    const jem = { lat: 1.3328, lng: 103.7433 };
    const clem  = { lat: 1.3149, lng: 103.7643 };
    const ite = { lat: 1.3760, lng: 103.7433 };
 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 1.3521 , lng: 103.8198},
    });
    new google.maps.Marker({
      position: jem,
      map,
      
    });
    new google.maps.Marker({
        position: clem,
        map,
        
      });
      new google.maps.Marker({
        position: ite,
        map,
        
      });

  }

