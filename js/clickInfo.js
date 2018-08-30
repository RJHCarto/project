function clicking(e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Building ID: " + e.features[0].properties.os_topo_toid + "</br> Building Height: " + (e.features[0].properties.relh2).toFixed(1) + 'm')
        .addTo(map3D);
}

function clickingOn () {
    map3D.on('click', SELECTED_LAYER_ID, clicking)
}

function clickingoff () {
    map3D.off('click', SELECTED_LAYER_ID, clicking)
}