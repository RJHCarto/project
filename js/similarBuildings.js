var overlay = document.getElementById('map-overlay');

var relatedFeatures;

function showing(e) {
    // Change the cursor style as a UI indicator.
    map2D.getCanvas().style.cursor = 'pointer';

    // Single out the first found feature.
    var feature = e.features[0];

    // Query the counties layer visible in the map3D. Use the filter
    // param to only collect results that share the same county name.
    relatedFeatures = map2D.querySourceFeatures(SELECTED_LAYER_ID, {
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
    map2D.setFilter('similarBuildings', ['in', 'relh2', feature.properties.relh2]);
    map3D.setFilter('similarBuildings', ['in', 'relh2', feature.properties.relh2]);

}

function hiding() {
    map2D.getCanvas().style.cursor = '';
    map2D.setFilter('similarBuildings', ['in', 'relh2', '']);
    map3D.setFilter('similarBuildings', ['in', 'relh2', '']);
    overlay.style.display = 'none';
}


function similar() {

    for (var i = 0; i < map2D.getStyle().layers.length; i++) {
        if ( map2D.getStyle().layers[i].id == 'similarBuildings' ) {
            map2D.removeLayer('similarBuildings');
            map3D.removeLayer('similarBuildings');
            break
        }
    }

    map2D.addLayer({
        id: 'similarBuildings',
        source: SELECTED_LAYER_ID,
        type: 'fill',
        paint: {
            'fill-color': '#000000',
            'fill-opacity': 0.6
        },
        filter: ['in', 'relh2', '']
    });

    map3D.addLayer({
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

    map2D.on('mousemove', SELECTED_LAYER_ID, showing);

    map2D.on('mouseleave', SELECTED_LAYER_ID, hiding);
}

function similarOff() {

    map2D.off('mousemove', SELECTED_LAYER_ID, showing);

    map2D.off('mouseleave', SELECTED_LAYER_ID, hiding);
}
