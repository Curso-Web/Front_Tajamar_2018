function app () {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            var domMapa = document.getElementById("miMapa");
            var latitude = pos.coords.latitude;
            var longitude = pos.coords.longitude;
            var options = {
                position: new google.maps.LatLng(latitude, longitude),
                title: "Tu localización",
                zoom: 19,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            }; // fin de options
            var map = new google.maps.Map(domMapa, options);
            var marker = new google.maps.Marker(options);
            var circle = new google.maps.Circle({
                map: map, radius: pos.coords.accuracy
            }); // fin de circle
            circle.bindTo('center', marker, 'position');
            marker.setMap(map);
            map.setCenter(new google.maps.LatLng(latitude, longitude));
        },
        function (error) {
            console.log(error.message);
        },
        {enableHighAccuracy : true}); // fin de getCurrentPosition
    }
}

window.addEventListener('load', app)