function clicking(e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Building ID: " + e.features[0].properties.OBJECTID + "</br> Building Height: " + (e.features[0].properties.relh2).toFixed(1) + 'm')
        .addTo(map);
}

function clickingOn () {
    map.on('click', SELECTED_LAYER_ID, clicking)
}

function clickingoff () {
    map.off('click', SELECTED_LAYER_ID, clicking)
}