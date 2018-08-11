var overlay = document.getElementById('map-overlay');

var relatedFeatures;

function showing(e) {
    // Change the cursor style as a UI indicator.
    mapB.getCanvas().style.cursor = 'pointer';

    // Single out the first found feature.
    var feature = e.features[0];

    // Query the counties layer visible in the map. Use the filter
    // param to only collect results that share the same county name.
    relatedFeatures = mapB.querySourceFeatures(SELECTED_LAYER_ID, {
        filter: ['in', 'relh2', feature.properties.relh2]
    });

    // Render found features in an overlay.
    overlay.innerHTML = '';


    var title = document.createElement('strong');
    title.textContent = 'Building Height: ' + ((feature.properties.relh2).toFixed(1)) + 'm';

    var height = document.createElement('div');
    height.textContent = relatedFeatures.length + ' found';

    overlay.appendChild(title);
    overlay.appendChild(height);
    overlay.style.display = 'block';

    // Add features that share the same county name to the highlighted layer.
    mapB.setFilter('similarBuildings', ['in', 'relh2', feature.properties.relh2]);
    map.setFilter('similarBuildings', ['in', 'relh2', feature.properties.relh2]);

}

function hiding() {
    mapB.getCanvas().style.cursor = '';
    mapB.setFilter('similarBuildings', ['in', 'relh2', '']);
    map.setFilter('similarBuildings', ['in', 'relh2', '']);
    overlay.style.display = 'none';
}


function similar() {

    for (var i = 0; i < mapB.getStyle().layers.length; i++) {
        if ( mapB.getStyle().layers[i].id == 'similarBuildings' ) {
            mapB.removeLayer('similarBuildings');
            map.removeLayer('similarBuildings');
            break
        }
    }

    mapB.addLayer({
        id: 'similarBuildings',
        source: SELECTED_LAYER_ID,
        type: 'fill',
        paint: {
            'fill-color': '#000000',
            'fill-opacity': 0.6
        },
        filter: ['in', 'relh2', '']
    });

    map.addLayer({
        id: 'similarBuildings',
        source: SELECTED_LAYER_ID,
        type: 'fill-extrusion',
        paint: {
            'fill-extrusion-color': '#000000',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'relh2'
            },
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.6
        },
        filter: ['in', 'relh2', '']
    });

    mapB.on('mousemove', SELECTED_LAYER_ID, showing);

    mapB.on('mouseleave', SELECTED_LAYER_ID, hiding);
}

function similarOff() {

    mapB.off('mousemove', SELECTED_LAYER_ID, showing);

    mapB.off('mouseleave', SELECTED_LAYER_ID, hiding);
}
