function getIntersect() {
    var interArray = [];
    var interDist = [];
    var sumWidths = [];
    var avgArray = [];
    var avgArrayPoints = [];
    var buildingPoints = [];
    var buildingFeatures = [];
    var selectedPoints;
    var uniqueBuildings;
    var buildingHeights = [];
    var selectedBuildings;
    var heightGraph;

    for (var i = 0; i < map2D.getStyle().layers.length; i++) {
        if ( map2D.getStyle().layers[i].id == 'HighlightedBuildings' ) {
            map2D.removeLayer('HighlightedBuildings');
            map2D.removeSource('HighlightedBuildings');
            map3D.removeLayer('HighlightedBuildings');
            map3D.removeSource('HighlightedBuildings');
            break
        }
    }

    console.log(" --Error Check-- ")

    if (draw.getAll().features.length == 0) {
        swal({
            title: '<strong>Building Height Profile</strong>',
            type: 'info',
            html:
            'You must first draw a segment through buildings to get a height profile',
            showCloseButton: true,
        });
        return;
    }

    var drawnLine = draw.getAll();
    var layerFeatures = turf.featureCollection(SELECTED_LAYER_JSON.features);
    intersectingFeatures = turf.lineIntersect(drawnLine, layerFeatures);

    console.log(" --Making Intersect Array-- ")
    for (var i = 0; i < intersectingFeatures.features.length; i++) {
        interArray.push(intersectingFeatures.features[i].geometry.coordinates)
    }
    interArray = interArray.sort();


    console.log("--Making point distance array--");
    for (var i = 0; i < interArray.length-1; i++) {
        pt1 = turf.point(interArray[i]);
        pt2 = turf.point(interArray[i+1]);
        interDist.push((turf.distance(pt1, pt2, {unit: 'kilometers'})));

    }
    console.dir(interDist);

    console.log("--Making cumulative point distance array--");
    sumWidths.push((interDist[0]/2));
    for (var i = 1; i < interDist.length; i++) {
        first = math.sum(interDist.slice(0,i));
        second = (interDist[i]/2);
        sumWidths.push(first+second);
    }
    console.dir(sumWidths);

    console.log("--Making midpoint array--")
    for (var i = 0; i < (interArray.length-1); i++) {
        avgCoords = [];
        avgCoord0 = ((interArray[i][0]+interArray[i+1][0])/2);
        avgCoord1= ((interArray[i][1]+interArray[i+1][1])/2);
        avgCoords.push(avgCoord0, avgCoord1)
        avgArray.push(avgCoords)
    }

    console.log("--Making midpoint points--")
    avgArray.forEach(item => {
        point = turf.point(item);
        avgArrayPoints.push(point);
    });


    for (var i = 0; i < avgArrayPoints.length; i++) {
        height = 0;
        for (var j = 0; j < SELECTED_LAYER_JSON.features.length ; j++) {
            var status = turf.booleanPointInPolygon(
                avgArrayPoints[i],
                SELECTED_LAYER_JSON.features[j]
            );
            if (status == true) {
                buildingFeatures.push(SELECTED_LAYER_JSON.features[j]);
                height = SELECTED_LAYER_JSON.features[j].properties.relh2;
            }
        }
        buildingHeights.push(height);
    }

    console.log(buildingHeights)

    uniqueBuildings = _.uniq(buildingFeatures);

    selectedBuildings = turf.featureCollection(uniqueBuildings);

    heightWord = [];

    for (var i = 0; i < buildingHeights.length ; i++) {
        heightWord.push('Height (m)')
    }

    chart = document.getElementById('chart');


    var heightGraph = {
        type: 'bar',
        x: sumWidths,
        y: buildingHeights,
        width: interDist,
        text: heightWord,
        marker: {
            color: '#5CA8A6',
            opacity: 0.6,
            line: {
                color: '#263746',
                width: 1
            }
        }
    };

    var data = [heightGraph];

    var layout = {
        title: 'Building Heights',
        xaxis: {title: 'Segment Distance'},
        yaxis:{title:'Height (relh2)'},
        bargap:0
    };

    Plotly.plot(chart, data, layout);

    holder.style.display = "none";

    console.log("--Highlighting Buildings--")

    map2D.addSource('HighlightedBuildings', {
        type: 'geojson',
        data: selectedBuildings
    });

    map2D.addLayer({
        id: 'HighlightedBuildings',
        source: 'HighlightedBuildings',
        type: 'fill',
        paint: {
            'fill-color': '#263746',
            'fill-opacity': 0.6
        },
    });

    map3D.addSource('HighlightedBuildings', {
        type: 'geojson',
        data: selectedBuildings
    });

    map3D.addLayer({
        id: 'HighlightedBuildings',
        source: 'HighlightedBuildings',
        type: 'fill-extrusion',
        paint: {
            'fill-extrusion-color': '#263746',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'relh2'
            },
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.6
        }
    });


}

function removeIntersect() {
    draw.deleteAll(draw.getAll());
    for (var i = 0; i < map2D.getStyle().layers.length; i++) {
        if (map2D.getStyle().layers[i].id == 'HighlightedBuildings') {
            map2D.removeLayer('HighlightedBuildings');
            map3D.removeLayer('HighlightedBuildings');
            map2D.removeSource('HighlightedBuildings');
            map3D.removeSource('HighlightedBuildings');
            break
        }
    }
    holder.style.display = "block";
    Plotly.purge(chart);
}
