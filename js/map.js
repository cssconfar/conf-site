function initMap() {
  var myLatLng = {lat: -34.59695, lng: -58.39388};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng,
    streetViewControl: false,
    mapTypeControl: false
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Escuela Superior de Comercio Carlos Pellegrini'
  });

  map.set('styles', [
    {
      stylers: [
        { hue: '#3D3B94' },
        { saturation: -20 }
      ]
    }
  ]);
}
