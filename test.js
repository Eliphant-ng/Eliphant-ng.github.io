
      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      let map, infoWindow;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 6,
        });
        infoWindow = new google.maps.InfoWindow();
        const locationButton = document.createElement("button");
        locationButton.textContent = "Pan to Current Location";
        locationButton.classList.add("custom-map-control-button");
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(
          locationButton
        );
        locationButton.addEventListener("click", () => {
          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent("Location found.");
                infoWindow.open(map);
                map.setCenter(pos);
              },
              () => {
                handleLocationError(true, infoWindow, map.getCenter());
              }
            );
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        });
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
      }
      const styles = [
        { elementType: "geometry", stylers: [{ color: "#efe6be" }] },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#f5f5f5" }, { weight: 1.5 }],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [{ color: "#9e9e9e" }, { weight: 1.5 }],
        },
        {
          featureType: "administrative.land_parcel",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [{ color: "#bdbdbd" }],
        },
        {
          featureType: "administrative.neighborhood",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#c44135" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#328829" }],
        },
        {
          featureType: "poi.sports_complex",
          elementType: "geometry",
          stylers: [{ color: "#2ca37b" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#e4b083" }],
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#32cbb1" }],
        },
        {
          featureType: "water",
          elementType: "labels.text",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9e9e9e" }],
        },
      ];
      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script
      // src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
    
    new AutocompleteDirectionsHandler(map);
    class AutocompleteDirectionsHandler {
      constructor(map) {
        this.map = map;
        this.originPlaceId = "";
        this.destinationPlaceId = "";
        this.travelMode = google.maps.TravelMode.WALKING;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer();
        this.directionsRenderer.setMap(map);
        const originInput = document.getElementById("origin-input");
        const destinationInput = document.getElementById("destination-input");
        const modeSelector = document.getElementById("mode-selector");
        const originAutocomplete = new google.maps.places.Autocomplete(
          originInput
        );
        // Specify just the place data fields that you need.
        originAutocomplete.setFields(["place_id"]);
        const destinationAutocomplete = new google.maps.places.Autocomplete(
          destinationInput
        );
        // Specify just the place data fields that you need.
        destinationAutocomplete.setFields(["place_id"]);
        this.setupClickListener(
          "changemode-walking",
          google.maps.TravelMode.WALKING
        );
        this.setupClickListener(
          "changemode-transit",
          google.maps.TravelMode.TRANSIT
        );
        this.setupClickListener(
          "changemode-driving",
          google.maps.TravelMode.DRIVING
        );
        this.setupPlaceChangedListener(originAutocomplete, "ORIG");
        this.setupPlaceChangedListener(destinationAutocomplete, "DEST");
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
          originInput
        );
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
          destinationInput
        );
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
          modeSelector
        );
      }
      // Sets a listener on a radio button to change the filter type on Places
      // Autocomplete.
      setupClickListener(id, mode) {
        const radioButton = document.getElementById(id);
        radioButton.addEventListener("click", () => {
          this.travelMode = mode;
          this.route();
        });
      }
      setupPlaceChangedListener(autocomplete, mode) {
        autocomplete.bindTo("bounds", this.map);
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();

          if (!place.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
          }

          if (mode === "ORIG") {
            this.originPlaceId = place.place_id;
          } else {
            this.destinationPlaceId = place.place_id;
          }
          this.route();
        });
      }
      route() {
        if (!this.originPlaceId || !this.destinationPlaceId) {
          return;
        }
        const me = this;
        this.directionsService.route(
          {
            origin: { placeId: this.originPlaceId },
            destination: { placeId: this.destinationPlaceId },
            travelMode: this.travelMode,
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

      function initMap() {
        const localContextMapView = new google.maps.localContext.LocalContextMapView(
          {
            element: document.querySelector("#map"),
            placeTypePreferences: [
              { type: "cafe", weight: 1 },

            ],
            maxPlaceCount: 18,
            directionsOptions: { origin: center },
          }
        );
        map = localContextMapView.map;
        // Trigger hidePlaceDetailsView() with a click event handler on the inner map.
        map.addListener("click", () => {
          localContextMapView.hidePlaceDetailsView();
        });
        // Merge map styles.
        const mergedStyles = map.get("styles").concat(styles);
        map.setOptions({
          center: center,
          zoom: 14,
          styles: mergedStyles,
        });
        // Add a marker at the center point
        new google.maps.Marker({
          position: center,
          map: map,
          icon:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAdUlEQVR4AWMYOWAU/AfhYWMBCxA3A/FlIN4MxN7I6gjg80DcD8QC+CzIxqIxH6aOSHwfYQmmBZexuQymjgTcj8uCz1gUHybDgvO4LFiMRXE4GRb8x2UBDxCXQ8PxPdSrLNSxAD+g3ALCeNQCKoHhZcHAg1EAAM3cyWj3TGxhAAAAAElFTkSuQmCC",
          zIndex: 30,
        });
      }