// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 18.628810, lng: 73.800710 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
  }