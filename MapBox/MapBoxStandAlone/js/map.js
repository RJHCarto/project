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

var rtoggle = 'EatonBray'
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
var baseURL = 'http://localhost:8000/';
var data = 'data'
var EatonBray = 'data/EatonBray.json';
var UCL = 'data/UCL.json';
var Wavendon = 'data/Wavendon.json';
var bbox;
var point;
getBBOX('EatonBray');
getJustJSON('EatonBray');
var layerId;
var selectFeatures;

// Draw Tools
var draw = new MapboxDraw();
mapB.addControl(draw, 'top-right');
var coordsList = [];
var interArray;

function getIntersect() {
    var drawnLine = draw.getAll();
    var layerpoly = turf.featureCollection(coordsList);
    var intersects = turf.lineIntersect(drawnLine, layerpoly);
    interArray = [];
    for (var i = 0; i < intersects.features.length; i++){
        interArray.push(intersects.features[i].geometry.coordinates)
    }
    console.dir(interArray);
}

function getJustJSON(layer) {
    return new Promise ((resolve, reject) => {
    coordsList = [];
        $.getJSON(baseURL.concat(window[layer]), function (data) {
            data.features.forEach(feature => {
                coordsList.push(feature)
            });
            resolve(coordsList)
        });
    });
}

function getBBOX(layer) {
    return new Promise ((resolve, reject) => {
        $.getJSON(baseURL.concat(window[layer]), function(data){
            bbox = turf.bbox(data);
            resolve()
        });

    });

}

function fit() {
    map.fitBounds(bbox, {padding: 20});
    mapB.fitBounds(bbox, {padding: 20});
}

// define functions
function switchLayer(layer) {
    layerId = layer.target.id;
    // set layer id to a menu value
    // If id = UCL
    if (layerId == 'UCL') {
        map.setLayoutProperty('EatonBray', 'visibility', 'none');
        map.setLayoutProperty('Wavendon', 'visibility', 'none');
        map.setLayoutProperty('UCL', 'visibility', 'visible');
        mapB.setLayoutProperty('EatonBray', 'visibility', 'none');
        mapB.setLayoutProperty('Wavendon', 'visibility', 'none');
        mapB.setLayoutProperty('UCL', 'visibility', 'visible');
    }
    // If id = Wavendon
    if (layerId == 'Wavendon') {
        map.setLayoutProperty('EatonBray', 'visibility', 'none');
        map.setLayoutProperty('Wavendon', 'visibility', 'visible');
        map.setLayoutProperty('UCL', 'visibility', 'none');
        mapB.setLayoutProperty('EatonBray', 'visibility', 'none');
        mapB.setLayoutProperty('Wavendon', 'visibility', 'visible');
        mapB.setLayoutProperty('UCL', 'visibility', 'none');
    }
    // Else id = EatonBray
    if (layerId == 'EatonBray'){
        map.setLayoutProperty('EatonBray', 'visibility', 'visible');
        map.setLayoutProperty('Wavendon', 'visibility', 'none');
        map.setLayoutProperty('UCL', 'visibility', 'none');
        mapB.setLayoutProperty('EatonBray', 'visibility', 'visible');
        mapB.setLayoutProperty('Wavendon', 'visibility', 'none');
        mapB.setLayoutProperty('UCL', 'visibility', 'none');
    }
    getJustJSON(layerId).then((coordsList)=> {getIntersect()});
    getBBOX(layerId).then(()=> {fit()});

}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}

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
    })

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
    })


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
        layout: {'visibility': 'visible'},
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
        layout: {'visibility': 'visible'},
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

function interHeights(e) {
    var intersectedPoints = []
    interArray.forEach(coords => {
        console.log("coords")
        console.dir(coords)
        selectFeatures = mapB.queryRenderedFeatures(coords);
        intersectedPoints.push(selectFeatures)
        console.log("SelectFeature")
        console.dir(selectFeatures)
    });
    console.log("intersectedPoints")
    console.dir(intersectedPoints);
    var featureHeights = [];
    intersectedPoints.forEach(feature => {
        featureHeights.push(feature.properties.relh2)
    });


    // // Run through the selected features and set a filter
    // // to match features with unique FIPS codes to activate
    // // the `counties-highlighted` layer.
    // var filter = selectFeatures.reduce(function(memo, feature) {
    //     memo.push(feature.properties.os_topo_toid);
    //     return memo;
    // }, ['in', 'os_topo_toid']);
    //
    // mapB.setFilter('EB', filter);
    console.log("featureHeights")
    console.dir(featureHeights);
};

