mapboxgl.accessToken = 'pk.eyJ1IjoicmpoYXJncmVhdmVzIiwiYSI6ImNpa3JmbDJiazAwMDF3Y20xMHoyaXowdDAifQ.78vWSemMDwn42TwMuxfODw';

var map = new mapboxgl.Map({
    style: 'mapbox://styles/rjhargreaves/cjiok8itx27nf2so7p2492eba',
    center: [-0.5850058794021606, 51.87403356997926],
    zoom: 16,
    pitch: 70,
    bearing: 0,
    container: 'map'
});

var mapB = new mapboxgl.Map({
    style: 'mapbox://styles/rjhargreaves/cjiok8itx27nf2so7p2492eba',
    center: [-0.5850058794021606, 51.87403356997926],
    zoom: 16,
    pitch: 0,
    bearing: 0,
    container: 'mapB'
});

/**
 * Keeping track of the selected layer
 * @type {null}
 */
let SELECTED_LAYER_BBOX = null;
let SELECTED_LAYER_JSON = null;
let SELECTED_LAYER_ID = null;

//var rtoggle = 'EatonBray'
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
var baseURL = 'http://localhost:8000/';
var data = 'data'
var EatonBray = 'data/EatonBray.json';
var UCL = 'data/UCL.json';
var Wavendon = 'data/Wavendon.json';
//var bbox;
var point;
var layerId;
var selectFeatures;

/*getBBOX('EatonBray');
getLayerGeoJSON('EatonBray');*/

// Draw Tools
var draw = new MapboxDraw();
mapB.addControl(draw, 'top-right');
var coordsList = [];
var interArray;


function bboxFromLine() {
    console.log(" -- bboxFromLine -- ");
    let bbox = turf.bbox(draw.getAll());
    console.log(bbox);
    return bbox;
}

function getIntersect() {
    console.log(" -- getIntersect -- ")
    var drawnLine = draw.getAll();
    var layerFeatures = turf.featureCollection(SELECTED_LAYER_JSON.features);
    var intersectingFeatures = turf.lineIntersect(drawnLine, layerFeatures);
    interArray = [];
    for (var i = 0; i < intersectingFeatures.features.length; i++) {
        interArray.push(intersectingFeatures.features[i].geometry.coordinates)
    }
    console.dir(interArray);

    //map.on('render', interHeights);
    //map.resize();
}

function mapLoaded() {
    console.log(map.loaded())
    return map.loaded()
}

function interHeights() {
    if (!map.loaded()) {
        console.log("NOT LOADED")
        return;
    }

    //map.off('render', interHeights)
    console.log(" -- interHeights -- ");
    console.log("There are " + interArray.length + " intersecting points")
    var selectFeatures = [];
    var intersectedFeatures = interArray.forEach(coords => {
        pixelCoords = map.project(coords);
        var bbox = [[pixelCoords.x - 10, pixelCoords.y - 10], [pixelCoords.x + 10, pixelCoords.y + 10]];
        selectFeatures.push(mapB.queryRenderedFeatures(pixelCoords, {layers: [SELECTED_LAYER_ID]}));

    });

    console.log('SELECTED')
    console.dir(selectFeatures)


    // var featureHeights = [];
    // intersectedPoints.forEach(feature => {
    //     featureHeights.push(feature.properties.relh2)
    // });


    // // Run through the selected features and set a filter
    // // to match features with unique FIPS codes to activate
    // // the `counties-highlighted` layer.
    // var filter = selectFeatures.reduce(function(memo, feature) {
    //     memo.push(feature.properties.os_topo_toid);
    //     return memo;
    // }, ['in', 'os_topo_toid']);
    //
    // mapB.setFilter('EB', filter);
    // console.log("featureHeights")
    // console.dir(featureHeights);
}

/**
 * Return the geoJSON object for the selected layer.
 * @param layer
 * @returns {Promise<any>}
 */
function getLayerGeoJSON(layer) {
    console.log(" -- getLayerGeoJSON --")
    return new Promise((resolve, reject) => {
        coordsList = [];
        $.getJSON(baseURL.concat(window[layer]), function (data) {
            resolve(data)
        });
    });
}

function bboxFromJSON(json) {
    return new Promise((resolve, reject) => {
        resolve(turf.bbox(json));
    });
}

function coordsFromJSON(json) {
    return json.features.forEach(feature => {
        return feature;
    })
}

function fit(bbox) {
    let bboxToUse = bbox || SELECTED_LAYER_BBOX;
    map.fitBounds(bboxToUse, {padding: 20});
    mapB.fitBounds(bboxToUse, {padding: 20});
}

// define functions
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

// Tracking testing
//http://bl.ocks.org/boeric/f6ddea14600dc5093506
var disable = false;
map.on("move", function () {
    if (!disable) {
        var center = map.getCenter();
        var zoom = map.getZoom();
        var bearing = map.getBearing();

        disable = true;
        mapB.setCenter(center);
        mapB.setZoom(zoom);
        mapB.setBearing(bearing);
        disable = false;
    }
});

mapB.on("move", function () {
    if (!disable) {
        var center = mapB.getCenter();
        var zoom = mapB.getZoom();
        var bearing = mapB.getBearing();

        disable = true;
        map.setCenter(center);
        map.setZoom(zoom);
        map.setBearing(bearing);
        disable = false;
    }
});

map.on('load', function () {
    map.addSource('EatonBray', {
        type: 'geojson',
        data: EatonBray
    });

    map.addSource('Wavendon', {
        type: 'geojson',
        data: Wavendon
    });

    map.addSource('UCL', {
        type: 'geojson',
        data: UCL
    });


// 3D rotate extrude for layers
//
//     map.on('rotate', function (x) {
//         if (map.getPitch() > 25) {
//             map.setPaintProperty("EatonBray", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': 'relh2'
//                 });
//         } else {
//             map.setPaintProperty("EatonBray", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': ''
//                 });
//         }
//     });
//
//     map.on('rotate', function (x) {
//         if (map.getPitch() > 25) {
//             map.setPaintProperty("Wavendon", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': 'relh2'
//                 });
//         } else {
//             map.setPaintProperty("Wavendon", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': ''
//                 });
//         }
//     });
//
//     map.on('rotate', function (x) {
//         if (map.getPitch() > 25) {
//             map.setPaintProperty("UCL", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': 'relh2'
//                 });
//         } else {
//             map.setPaintProperty("UCL", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': ''
//                 });
//         }
//     });

//Adding layers

    map.addLayer({
        id: 'EatonBray',
        source: 'EatonBray',
        type: 'fill-extrusion',
        layout: {'visibility': 'none'},
        paint: {
            'fill-extrusion-color': '#008080',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'relh2'
            },
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.6
        }
    });

    map.addLayer({
        id: 'Wavendon',
        source: 'Wavendon',
        type: 'fill-extrusion',
        layout: {'visibility': 'none'},
        paint: {
            'fill-extrusion-color': '#008080',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'relh2'
            },
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.6
        }
    });

    map.addLayer({
        id: 'UCL',
        source: 'UCL',
        type: 'fill-extrusion',
        layout: {'visibility': 'none'},
        paint: {
            'fill-extrusion-color': '#008080',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'relh2'
            },
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.6
        }
    });
});

mapB.on('load', function () {
    mapB.addSource('EatonBray', {
        type: 'geojson',
        data: EatonBray
    });

    mapB.addSource('Wavendon', {
        type: 'geojson',
        data: Wavendon
    });

    mapB.addSource('UCL', {
        type: 'geojson',
        data: UCL
    });

    // mapB.addSource('testLine', {
    //     type: 'geojson',
    //     data: testLine1
    // });

    // mapB.addSource('testIntersects', {
    //     type: 'geojson',
    //     data: intersects
    // });

    mapB.addLayer({
        id: 'EatonBray',
        source: 'EatonBray',
        type: 'fill',
        layout: {'visibility': 'none'},
        paint: {
            'fill-color': '#008080',
            'fill-opacity': 0.6
        }
    });


    mapB.addLayer({
        id: 'Wavendon',
        source: 'Wavendon',
        type: 'fill',
        layout: {'visibility': 'none'},
        paint: {
            'fill-color': '#008080',
            'fill-opacity': 0.6
        }
    });

    mapB.addLayer({
        id: 'UCL',
        source: 'UCL',
        type: 'fill',
        layout: {'visibility': 'none'},
        paint: {
            'fill-color': '#008080',
            'fill-opacity': 0.6
        }
    });


    /**
     * Switch the default layer on
     */
    switchLayer('EatonBray');

    // mapB.addLayer({
    //     id: 'testLine',
    //     source: 'testLine',
    //     type: 'line',
    //     layout: {'visibility': 'visible'},
    //     paint: {
    //         'line-color': '#000000'
    //     }
    // });

    // mapB.addLayer({
    //     id: 'testIntersects',
    //     source: 'testIntersects',
    //     type: 'circle',
    //     layout: {'visibility': 'visible'},
    //     paint: {
    //         "circle-radius": 10,
    //         "circle-color": "#3887be"
    //     }
    // });

    //Highlighting Layer
    //
    // mapB.addLayer({
    //     id: 'EB',
    //     source: 'EatonBray',
    //     type: 'fill',
    //     paint: {
    //         'fill-color': '#000000',
    //         'fill-opacity': 0.6
    //     },
    //     filter: ['in', 'os_topo_toid', '']
    // });
});

//Working On Click Selector



