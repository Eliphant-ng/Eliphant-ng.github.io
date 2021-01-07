//google map: 

var lat = parseFloat(localStorage.getItem("latitude"));
var lng = parseFloat(localStorage.getItem("longitude"));

friendLat = parseFloat(localStorage.getItem("friendLat"));
friendLng = parseFloat(localStorage.getItem("friendLng"));
// Initialize and add the map
function initMap() {
    // The location of me and friend
    const me = { lat: lat, lng: lng};
    const friend = { lat: friendLat, lng: friendLng}
    // The map, centered at my location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: me,
      zoom: 12,
    });
    // Markers at my and friend locations 

    const myMarker = new google.maps.Marker({
        position: me,
        map: map,
      });
    
    const friendMarker = new google.maps.Marker({
        position: friend,
        map: map,
      });

    friendMarker.addListener("click", () => {
        
      });
  }

  function initMap() {
    const origin = me;
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: origin,
    });
    new ClickEventHandler(map, origin);
  }

  function isIconMouseEvent(e) {
    return "placeId" in e;
  }

  class ClickEventHandler {
    constructor(map, origin) {
      this.origin = origin;
      this.map = map;
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer();
      this.directionsRenderer.setMap(map);
      this.placesService = new google.maps.places.PlacesService(map);
      this.infowindow = new google.maps.InfoWindow();
      this.infowindowContent = document.getElementById(
        "infowindow-content"
      );
      this.infowindow.setContent(this.infowindowContent);
      // Listen for clicks on the map.
      this.map.addListener("click", this.handleClick.bind(this));
    }
    handleClick(event) {
      console.log("You clicked on: " + event.latLng);

      // If the event has a placeId, use it.
      if (isIconMouseEvent(event)) {
        console.log("You clicked on place:" + event.placeId);
        // Calling e.stop() on the event prevents the default info window from
        // showing.
        // If you call stop here when there is no placeId you will prevent some
        // other map click event handlers from receiving the event.
        event.stop();
        this.calculateAndDisplayRoute(event.placeId);
        this.getPlaceInformation(event.placeId);
      }
    }
    calculateAndDisplayRoute(placeId) {
      const me = this;
      this.directionsService.route(
        {
          origin: this.origin,
          destination: { placeId: placeId },
          travelMode: google.maps.TravelMode.WALKING,
        },
        (response, status) => {
          if (status === "OK") {
            me.directionsRenderer.setDirections(response);
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    }
  }




