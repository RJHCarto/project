mapboxgl.accessToken = 'pk.eyJ1IjoicmpoYXJncmVhdmVzIiwiYSI6ImNpa3JmbDJiazAwMDF3Y20xMHoyaXowdDAifQ.78vWSemMDwn42TwMuxfODw';

var map3D = new mapboxgl.Map({
    style: 'mapbox://styles/rjhargreaves/cjiok8itx27nf2so7p2492eba',
    center: [-0.5850058794021606, 51.87403356997926],
    zoom: 16,
    pitch: 70,
    bearing: 0,
    container: 'map3D'
});

var map2D = new mapboxgl.Map({
    style: 'mapbox://styles/rjhargreaves/cjiok8itx27nf2so7p2492eba',
    center: [-0.5850058794021606, 51.87403356997926],
    zoom: 16,
    pitch: 0,
    bearing: 0,
    container: 'map2D'
});

/**
 * Keeping track of the selected layer
 * @type {null}
 */
var SELECTED_LAYER_BBOX;
var SELECTED_LAYER_JSON;
var SELECTED_LAYER_ID;

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
var baseURL = 'http://localhost:' + 8000 + '/';
var data = 'data';
var EatonBray = 'data/EatonBray.json';
var UCL = 'data/UCL.json';
var Wavendon = 'data/Wavendon.json';
var point;
var layerId;
var coordsList = [];
var selectedBuildings;
var holder = document.getElementById("chartHolder");
var hasLoaded = false;

// Draw Tools
var draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
        line_string: true
    }
});


map3D.addControl(new mapboxgl.ScaleControl({
    maxWidth: 100,
    unit: 'metric'
}));

map2D.addControl(draw, 'top-right');

// Tracking
//http://bl.ocks.org/boeric/f6ddea14600dc5093506
var disable = false;
map3D.on("move", function () {
    if (!disable) {
        var center = map3D.getCenter();
        var zoom = map3D.getZoom();
        var bearing = map3D.getBearing();

        disable = true;
        map2D.setCenter(center);
        map2D.setZoom(zoom);
        map2D.setBearing(bearing);
        disable = false;
    }
});

map2D.on("move", function () {
    if (!disable) {
        var center = map2D.getCenter();
        var zoom = map2D.getZoom();
        var bearing = map2D.getBearing();

        disable = true;
        map3D.setCenter(center);
        map3D.setZoom(zoom);
        map3D.setBearing(bearing);
        disable = false;
    }
});

map3D.on('load', function () {
    hasLoaded = true;
    map3D.addSource('EatonBray', {
        type: 'geojson',
        data: EatonBray
    });

    map3D.addSource('Wavendon', {
        type: 'geojson',
        data: Wavendon
    });

    map3D.addSource('UCL', {
        type: 'geojson',
        data: UCL
    });


// 3D rotate extrude for layers
//
//     map3D.on('rotate', function (x) {
//         if (map3D.getPitch() > 25) {
//             map3D.setPaintProperty("EatonBray", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': 'relh2'
//                 });
//         } else {
//             map3D.setPaintProperty("EatonBray", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': ''
//                 });
//         }
//     });
//
//     map3D.on('rotate', function (x) {
//         if (map3D.getPitch() > 25) {
//             map3D.setPaintProperty("Wavendon", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': 'relh2'
//                 });
//         } else {
//             map3D.setPaintProperty("Wavendon", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': ''
//                 });
//         }
//     });
//
//     map3D.on('rotate', function (x) {
//         if (map3D.getPitch() > 25) {
//             map3D.setPaintProperty("UCL", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': 'relh2'
//                 });
//         } else {
//             map3D.setPaintProperty("UCL", 'fill-extrusion-height',
//                 {
//                     'type': 'identity',
//                     'property': ''
//                 });
//         }
//     });

//Adding layers

    map3D.addLayer({
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

    map3D.addLayer({
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

    map3D.addLayer({
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

map2D.on('load', function () {
    map2D.addSource('EatonBray', {
        type: 'geojson',
        data: EatonBray
    });

    map2D.addSource('Wavendon', {
        type: 'geojson',
        data: Wavendon
    });

    map2D.addSource('UCL', {
        type: 'geojson',
        data: UCL
    });

    map2D.addLayer({
        id: 'EatonBray',
        source: 'EatonBray',
        type: 'fill',
        layout: {'visibility': 'none'},
        paint: {
            'fill-color': '#008080',
            'fill-opacity': 0.6
        }
    });


    map2D.addLayer({
        id: 'Wavendon',
        source: 'Wavendon',
        type: 'fill',
        layout: {'visibility': 'none'},
        paint: {
            'fill-color': '#008080',
            'fill-opacity': 0.6
        }
    });

    map2D.addLayer({
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

});





