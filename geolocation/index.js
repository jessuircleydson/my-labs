if ("geolocation" in navigator) {
 var marker;
 var map;
 var infos = document.getElementById('info');

  var navig = navigator.geolocation.getCurrentPosition(function(position) {
    initMap(position.coords.latitude, position.coords.longitude);
  });
  
  var wpid = navigator.geolocation.watchPosition(doMarker, geo_error, {enableHighAccuracy:true, maximumAge:30000, timeout:500});
 
  function geo_error(){}

  function doMarker(position){

       infos.innerHTML = "Lat: "+position.coords.latitude+" Long: "+position.coords.longitude;

    marker.setPosition({lat: position.coords.latitude, lng: position.coords.longitude});
    map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
  }

  function initMap(latitude, longitude) {
           
          var uluru = {lat: latitude, lng: longitude};
                    

           map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 18,
                    center: uluru
                  });
          marker = new google.maps.Marker({
                    position: uluru,
                    map: map
          });
 
  }


  console.log("Yeah!")
} else {
  alert("I'm sorry, but geolocation services are not supported by your browser.");
}


