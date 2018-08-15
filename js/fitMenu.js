/**
 * Return the geoJSON object for the selected layer.
 * @param layer
 * @returns {Promise<any>}
 */

function getLayerGeoJSON(layer) {
    console.log(" -- getLayerGeoJSON --");
    return new Promise((resolve, reject) => {
        $.getJSON((window[layer]), function (data) {
            resolve(data)
        });
    });
}

function bboxFromJSON(json) {
    return new Promise((resolve, reject) => {
        resolve(turf.bbox(json));
    });
}

function fit(bbox) {
    let bboxToUse = bbox || SELECTED_LAYER_BBOX;
    map.fitBounds(bboxToUse, {padding: 20});
    mapB.fitBounds(bboxToUse, {padding: 20});
}

function switchLayer(layer) {
    console.dir(layer)
    SELECTED_LAYER_ID = layer;
    //layerId = layer.target.id;
    // set layer id to a menu value
    // If id = UCL
    if (layer == 'UCL') {
        map.setLayoutProperty('EatonBray', 'visibility', 'none');
        map.setLayoutProperty('Wavendon', 'visibility', 'none');
        map.setLayoutProperty('UCL', 'visibility', 'visible');
        mapB.setLayoutProperty('EatonBray', 'visibility', 'none');
        mapB.setLayoutProperty('Wavendon', 'visibility', 'none');
        mapB.setLayoutProperty('UCL', 'visibility', 'visible');
    }
    // If id = Wavendon
    if (layer == 'Wavendon') {
        map.setLayoutProperty('EatonBray', 'visibility', 'none');
        map.setLayoutProperty('Wavendon', 'visibility', 'visible');
        map.setLayoutProperty('UCL', 'visibility', 'none');
        mapB.setLayoutProperty('EatonBray', 'visibility', 'none');
        mapB.setLayoutProperty('Wavendon', 'visibility', 'visible');
        mapB.setLayoutProperty('UCL', 'visibility', 'none');
    }
    // Else id = EatonBray
    if (layer == 'EatonBray') {
        map.setLayoutProperty('EatonBray', 'visibility', 'visible');
        map.setLayoutProperty('Wavendon', 'visibility', 'none');
        map.setLayoutProperty('UCL', 'visibility', 'none');
        mapB.setLayoutProperty('EatonBray', 'visibility', 'visible');
        mapB.setLayoutProperty('Wavendon', 'visibility', 'none');
        mapB.setLayoutProperty('UCL', 'visibility', 'none');
    }
    getLayerGeoJSON(layer).then((json) => {
        console.dir(json)
        SELECTED_LAYER_JSON = json;
        console.log("SELECTED LAYER COORDS CHANGED")
        bboxFromJSON(json).then((bbox) => {
            SELECTED_LAYER_BBOX = bbox;
            fit(bbox)
        });
    });
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = (e) => {
        switchLayer(e.target.id)
    };
}