var locations = [
	{
		"name": "Olympic NP",
		"lat": 47.8021,
		"lng": -123.6044,
		"zoom": 18
	},
	{
		"name": "Rainier NP",
		"lat": 46.8800, 
		"lng": -121.7269,
		"zoom": 18
	}, 
	{
		"name": "Baker NF",
		"lat": 48.2342, 
		"lng": -121.1735,
		"zoom": 18
	},
	{
		"name": "Wenatchee NF",
		"lat": 47.8477, 
		"lng": -120.7076,
		"zoom": 18
	},
  
    {
        "name": "North Cascades NP",
        "lat": 48.7718,
        "lng": -121.2985,
        "zoom": 18
    }];

var map;

function initMap() {
	map = new google.maps.Map($('#map')[0], {
		center: {lat: 47.6205, lng: -122.3493},
		zoom: 8
	});

	createMarkers();
}

function createMarkers() {
	$.each(locations, function (index, value) {
		var marker = new google.maps.Marker({
        	position: { lat: value.lat, lng: value.lng }});
		
		marker.setMap(map);

		var infoWindow = new google.maps.InfoWindow({
        	content: value.name });
	
		marker.addListener( 'click', function( ) {
        	infoWindow.open( map, marker );
        });
	});
}

$('#parks').on('change', changeCenter);

function changeCenter() {
	var place = $(this).val();
	var location = $.grep(locations, function (n, i) {
		return n.name == place;
	})[0];

	if(location) {
		map.setCenter({lat: location.lat, lng: location.lng});
		map.setZoom(location.zoom);	
	}
	
}