/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"vectors": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([14,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/vectors.js":
/*!*****************************!*\
  !*** ./examples/vectors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! olcs/OLCesium.js */ "./src/olcs/OLCesium.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/View.js */ "./node_modules/openlayers/src/ol/View.js");
/* harmony import */ var ol_control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/control.js */ "./node_modules/openlayers/src/ol/control.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/openlayers/src/ol/source/OSM.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/openlayers/src/ol/layer/Tile.js");
/* harmony import */ var ol_style_Text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/style/Text.js */ "./node_modules/openlayers/src/ol/style/Text.js");
/* harmony import */ var ol_style_Icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style/Icon.js */ "./node_modules/openlayers/src/ol/style/Icon.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/openlayers/src/ol/style/Style.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/openlayers/src/ol/geom/Point.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/openlayers/src/ol/Feature.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/openlayers/src/ol/style/Stroke.js");
/* harmony import */ var ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/interaction.js */ "./node_modules/openlayers/src/ol/interaction.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/openlayers/src/ol/style/Fill.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/openlayers/src/ol/Map.js");
/* harmony import */ var ol_geom_Circle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/geom/Circle.js */ "./node_modules/openlayers/src/ol/geom/Circle.js");
/* harmony import */ var ol_format_TopoJSON_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/format/TopoJSON.js */ "./node_modules/openlayers/src/ol/format/TopoJSON.js");
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/openlayers/src/ol/style/Circle.js");
/* harmony import */ var ol_format_KML_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/format/KML.js */ "./node_modules/openlayers/src/ol/format/KML.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/openlayers/src/ol/source/Vector.js");
/* harmony import */ var ol_format_IGC_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ol/format/IGC.js */ "./node_modules/openlayers/src/ol/format/IGC.js");
/* harmony import */ var ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ol/format/GeoJSON.js */ "./node_modules/openlayers/src/ol/format/GeoJSON.js");
/* harmony import */ var ol_format_GPX_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ol/format/GPX.js */ "./node_modules/openlayers/src/ol/format/GPX.js");
/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ol/geom/Polygon.js */ "./node_modules/openlayers/src/ol/geom/Polygon.js");
/* harmony import */ var ol_interaction_DragAndDrop_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ol/interaction/DragAndDrop.js */ "./node_modules/openlayers/src/ol/interaction/DragAndDrop.js");
/* harmony import */ var ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ol/geom/MultiPolygon.js */ "./node_modules/openlayers/src/ol/geom/MultiPolygon.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/openlayers/src/ol/layer/Vector.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/openlayers/src/ol/proj.js");
/* harmony import */ var olcs_core_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! olcs/core.js */ "./src/olcs/core.js");
/**
 * @module examples.vectors
 */
const exports = {};






























const iconFeature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  geometry: new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"]([700000, 200000, 100000])
});

const textFeature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  geometry: new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"]([1000000, 3000000, 500000])
});

const cervinFeature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  geometry: new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"]([852541, 5776649])
});
cervinFeature.getGeometry().set('altitudeMode', 'clampToGround');


const modelFeatures = [-1, -1 / 2, 0, 1 / 2, 1, 3 / 2].map(
    factor => new ol_Feature_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
      geometry: new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"]([852641, 5776749, 4500]),
      'rotation': factor * Math.PI
    })
);


const iconStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  image: new ol_style_Icon_js__WEBPACK_IMPORTED_MODULE_6__["default"](/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    opacity: 0.75,
    src: 'data/icon.png'
  })),
  text: new ol_style_Text_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
    text: 'Some text',
    textAlign: 'center',
    textBaseline: 'middle',
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      color: 'magenta',
      width: 3
    }),
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
      color: 'rgba(0, 0, 155, 0.3)'
    })
  })
});

const textStyle = [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  text: new ol_style_Text_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
    text: 'Only text',
    textAlign: 'center',
    textBaseline: 'middle',
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      color: 'red',
      width: 3
    }),
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
      color: 'rgba(0, 0, 155, 0.3)'
    })
  })
}), new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  geometry: new ol_geom_Circle_js__WEBPACK_IMPORTED_MODULE_14__["default"]([1000000, 3000000, 10000], 2e6),
  stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
    color: 'blue',
    width: 2
  }),
  fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
    color: 'rgba(0, 0, 255, 0.2)'
  })
})];

iconFeature.setStyle(iconStyle);

textFeature.setStyle(textStyle);

cervinFeature.setStyle(iconStyle);
let iCase = 0;
modelFeatures.forEach((feature) => {
  ++iCase;
  const modelStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    image: new ol_style_Icon_js__WEBPACK_IMPORTED_MODULE_6__["default"](/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src: 'data/icon.png'
    }))
  });
  const olcsModelFunction = () => {
    const coordinates = feature.getGeometry().getCoordinates();
    const center = ol_proj_js__WEBPACK_IMPORTED_MODULE_26__["transform"](coordinates, 'EPSG:3857', 'EPSG:4326');
    const rotation = /** @type {number} */ (feature.get('rotation'));
    return {
      cesiumOptions: {
        url: 'data/arrow5.glb',
        modelMatrix: olcs_core_js__WEBPACK_IMPORTED_MODULE_27__["default"].createMatrixAtCoordinates(center, rotation),
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
        minimumPixelSize: 64
      }
    };
  };
  let host = feature;
  switch (iCase % 3) {
    case 0:
      host = feature.getGeometry();
      break;
    case 1:
      modelStyle.setGeometry(feature.getGeometry().clone());
      host = modelStyle.getGeometry();
      break;
    default:
      host = feature;
  }
  host.set('olcs_model', olcsModelFunction);
  feature.setStyle(modelStyle);
});


const image = new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
  radius: 5,
  fill: null,
  stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({color: 'red', width: 1})
});

const styles = {
  'Point': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    image
  })],
  'LineString': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      color: 'green',
      lineDash: [12],
      width: 10
    })
  })],
  'MultiLineString': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      color: 'green',
      width: 10
    })
  })],
  'MultiPoint': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    image,
    text: new ol_style_Text_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      text: 'MP',
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
        color: 'purple'
      })
    })
  })],
  'MultiPolygon': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      color: 'yellow',
      width: 1
    }),
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
      color: 'rgba(255, 255, 0, 0.1)'
    })
  })],
  'Polygon': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      color: 'blue',
      lineDash: [4],
      width: 3
    }),
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
      color: 'rgba(0, 0, 255, 0.1)'
    })
  })],
  'GeometryCollection': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      color: 'magenta',
      width: 2
    }),
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
      color: 'magenta'
    }),
    image: new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
      radius: 10, // pixels
      fill: null,
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
        color: 'magenta'
      })
    })
  })],
  'Circle': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      color: 'red',
      width: 2
    }),
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
      color: 'rgba(255,0,0,0.2)'
    })
  })]
};

const styleFunction = function(feature, resolution) {
  const geo = feature.getGeometry();
  // always assign a style to prevent feature skipping
  return geo ? styles[geo.getType()] : styles['Point'];
};

const vectorSource = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
  format: new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_20__["default"](),
  url: 'data/geojson/vector_data.geojson'
});

const theCircle = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_9__["default"](new ol_geom_Circle_js__WEBPACK_IMPORTED_MODULE_14__["default"]([5e6, 7e6, 5e5], 1e6));

// Add a Cesium rectangle, via setting the property olcs.polygon_kind
const cartographicRectangleStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
    color: 'rgba(255, 69, 0, 0.7)'
  }),
  stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
    color: 'rgba(255, 69, 0, 0.9)',
    width: 1
  })
});
const cartographicRectangleGeometry = new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_22__["default"]([[[-5e6, 11e6],
  [4e6, 11e6], [4e6, 10.5e6], [-5e6, 10.5e6], [-5e6, 11e6]]]);
cartographicRectangleGeometry.set('olcs.polygon_kind', 'rectangle');
const cartographicRectangle = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  geometry: cartographicRectangleGeometry
});
cartographicRectangle.setStyle(cartographicRectangleStyle);

// Add two Cesium rectangles with height and the property olcs.polygon_kind
const cartographicRectangleGeometry2 = new ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_24__["default"]([
  [[
    [-5e6, 12e6, 0], [4e6, 12e6, 0], [4e6, 11.5e6, 0], [-5e6, 11.5e6, 0],
    [-5e6, 12e6, 0]
  ]],
  [[
    [-5e6, 11.5e6, 1e6], [4e6, 11.5e6, 1e6], [4e6, 11e6, 1e6],
    [-5e6, 11e6, 1e6], [-5e6, 11.5e6, 1e6]
  ]]
]);
cartographicRectangleGeometry2.set('olcs.polygon_kind', 'rectangle');
const cartographicRectangle2 = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  geometry: cartographicRectangleGeometry2
});
cartographicRectangle2.setStyle(cartographicRectangleStyle);

const vectorLayer = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_25__["default"]({
  source: vectorSource,
  style: styleFunction
});

const vectorSource2 = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
  features: [iconFeature, textFeature, cervinFeature, ...modelFeatures, cartographicRectangle,
    cartographicRectangle2]
});
const vectorLayer2 = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_25__["default"]({
  source: vectorSource2
});

const dragAndDropInteraction = new ol_interaction_DragAndDrop_js__WEBPACK_IMPORTED_MODULE_23__["default"]({
  formatConstructors: [
    ol_format_GPX_js__WEBPACK_IMPORTED_MODULE_21__["default"],
    ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_20__["default"],
    ol_format_IGC_js__WEBPACK_IMPORTED_MODULE_19__["default"],
    ol_format_KML_js__WEBPACK_IMPORTED_MODULE_17__["default"],
    ol_format_TopoJSON_js__WEBPACK_IMPORTED_MODULE_15__["default"]
  ]
});

const map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
  interactions: ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__["defaults"]().extend([dragAndDropInteraction]),
  layers: [
    new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
    }),
    vectorLayer,
    vectorLayer2
  ],
  target: 'map2d',
  controls: Object(ol_control_js__WEBPACK_IMPORTED_MODULE_2__["defaults"])({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })
  }),
  view: new ol_View_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    center: [0, 0],
    zoom: 2
  })
});

dragAndDropInteraction.on('addfeatures', (event) => {
  const vectorSource = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
    features: event.features,
    projection: event.projection
  });
  map.getLayers().push(new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_25__["default"]({
    source: vectorSource,
    style: styleFunction
  }));
  const view = map.getView();
  view.fitExtent(
      vectorSource.getExtent(), /** @type {ol.Size} */ (map.getSize()));
});


const ol3d = new olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_0__["default"]({map, target: 'map3d'});
const scene = ol3d.getCesiumScene();
const terrainProvider = new Cesium.CesiumTerrainProvider({
  url: '//assets.agi.com/stk-terrain/world'
});
scene.terrainProvider = terrainProvider;
ol3d.setEnabled(true);

const csLabels = new Cesium.LabelCollection();
csLabels.add({
  position: Cesium.Cartesian3.fromRadians(20, 20, 0),
  text: 'Pre-existing primitive'
});
scene.primitives.add(csLabels);

// Adding a feature after the layer has been synchronized.
vectorSource.addFeature(theCircle);

let hasTheVectorLayer = true;
window['addOrRemoveOneVectorLayer'] = function() {
  if (hasTheVectorLayer) {
    map.getLayers().remove(vectorLayer);
  } else {
    map.getLayers().insertAt(1, vectorLayer);
  }
  hasTheVectorLayer = !hasTheVectorLayer;
};

window['addOrRemoveOneFeature'] = function() {
  const found = vectorSource2.getFeatures().indexOf(iconFeature);
  if (found === -1) {
    vectorSource2.addFeature(iconFeature);
  } else {
    vectorSource2.removeFeature(iconFeature);
  }
};

let oldStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
    color: 'blue',
    width: 2
  }),
  fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
    color: 'green'
  })
});

window['toggleStyle'] = function() {
  const swap = theCircle.getStyle();
  theCircle.setStyle(oldStyle);
  oldStyle = swap;
};

window['toggleClampToGround'] = function() {
  let altitudeMode;
  if (!vectorLayer.get('altitudeMode')) {
    altitudeMode = 'clampToGround';
  }
  vectorLayer.set('altitudeMode', altitudeMode);
  vectorLayer2.set('altitudeMode', altitudeMode);
  map.removeLayer(vectorLayer);
  map.removeLayer(vectorLayer2);
  map.addLayer(vectorLayer);
  map.addLayer(vectorLayer2);
};

window['setTargetFrameRate'] = function() {
  let fps;
  const fpsEl = document.querySelector('#framerate');
  if (fpsEl) {
    fps = Number(fpsEl.value);
    ol3d.setTargetFrameRate(fps);
  }
};

window['ol3d'] = ol3d;
window['scene'] = scene;
document.getElementById('enable').addEventListener('click', () => ol3d.setEnabled(!ol3d.getEnabled()));

ol3d.enableAutoRenderLoop();


/* harmony default export */ __webpack_exports__["default"] = (exports);


/***/ }),

/***/ 14:
/*!***********************************!*\
  !*** multi ./examples/vectors.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/vectors.js */"./examples/vectors.js");


/***/ })

/******/ });
//# sourceMappingURL=vectors.js.map