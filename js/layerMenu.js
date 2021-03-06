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
    map3D.fitBounds(bboxToUse, {padding: 20});
    map2D.fitBounds(bboxToUse, {padding: 20});
}

function switchLayer(layer) {
    console.log("--Map Loading--");
    console.log(hasLoaded);
    console.dir(layer);
    SELECTED_LAYER_ID = layer;
    //layerId = layer.target.id;
    // set layer id to a menu value
    // If id = UCL
    if (layer == 'UCL' && hasLoaded) {
        swal({
            title: '<strong>Large layer Loading</strong>',
            type: 'info',
            showCloseButton: true,
        });
        // alert("This is a large layer and may take a while to load, please wait.");
        map3D.setLayoutProperty('EatonBray', 'visibility', 'none');
        map3D.setLayoutProperty('Wavendon', 'visibility', 'none');
        map3D.setLayoutProperty('UCL', 'visibility', 'visible');
        map2D.setLayoutProperty('EatonBray', 'visibility', 'none');
        map2D.setLayoutProperty('Wavendon', 'visibility', 'none');
        map2D.setLayoutProperty('UCL', 'visibility', 'visible');
    }
    // If id = Wavendon
    if (layer == 'Wavendon' && hasLoaded) {
        map3D.setLayoutProperty('EatonBray', 'visibility', 'none');
        map3D.setLayoutProperty('Wavendon', 'visibility', 'visible');
        map3D.setLayoutProperty('UCL', 'visibility', 'none');
        map2D.setLayoutProperty('EatonBray', 'visibility', 'none');
        map2D.setLayoutProperty('Wavendon', 'visibility', 'visible');
        map2D.setLayoutProperty('UCL', 'visibility', 'none');
    }
    // Else id = EatonBray
    if (layer == 'EatonBray' && hasLoaded) {
        map3D.setLayoutProperty('EatonBray', 'visibility', 'visible');
        map3D.setLayoutProperty('Wavendon', 'visibility', 'none');
        map3D.setLayoutProperty('UCL', 'visibility', 'none');
        map2D.setLayoutProperty('EatonBray', 'visibility', 'visible');
        map2D.setLayoutProperty('Wavendon', 'visibility', 'none');
        map2D.setLayoutProperty('UCL', 'visibility', 'none');
    }
    getLayerGeoJSON(layer).then((json) => {
        console.dir(json);
        SELECTED_LAYER_JSON = json;
        console.log("SELECTED LAYER COORDS CHANGED");
        bboxFromJSON(json).then((bbox) => {
            SELECTED_LAYER_BBOX = bbox;
            fit(bbox)
        });
    });
    loading_screen.finish();
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = (e) => {
        switchLayer(e.target.id)
    };
}