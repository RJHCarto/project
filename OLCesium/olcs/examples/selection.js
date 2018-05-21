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
/******/ 		"selection": 0
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
/******/ 	deferredModules.push([10,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/selection.js":
/*!*******************************!*\
  !*** ./examples/selection.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/openlayers/src/ol/style/Stroke.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/openlayers/src/ol/style/Fill.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/openlayers/src/ol/style/Style.js");
/* harmony import */ var olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! olcs/OLCesium.js */ "./src/olcs/OLCesium.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/View.js */ "./node_modules/openlayers/src/ol/View.js");
/* harmony import */ var ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/format/GeoJSON.js */ "./node_modules/openlayers/src/ol/format/GeoJSON.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/openlayers/src/ol/source/Vector.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/openlayers/src/ol/layer/Vector.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/openlayers/src/ol/source/OSM.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/openlayers/src/ol/layer/Tile.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/openlayers/src/ol/Map.js");
/**
 * @module examples.selection
 */
const exports = {};













const raster = new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_8__["default"]()
});

const vector = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  source: new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    format: new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_5__["default"](),
    url: 'data/geojson/countries.geojson'
  })
});

const map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
  layers: [raster, vector],
  target: 'map2d',
  view: new ol_View_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
    center: [0, 0],
    zoom: 2
  })
});


const ol3d = new olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_3__["default"]({map, target: 'map3d'});
ol3d.setEnabled(true);



const selectionStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    color: [255, 255, 255, 0.6]
  }),
  stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    color: [0, 153, 255, 1],
    width: 3
  })
});

let selectedFeature;
map.on('click', (e) => {
  if (selectedFeature) {
    selectedFeature.setStyle(null);
  }
  selectedFeature = map.forEachFeatureAtPixel(
      e.pixel,
      (feature, layer) => feature);
  if (selectedFeature) {
    selectedFeature.setStyle(selectionStyle);
  }
});


/* harmony default export */ __webpack_exports__["default"] = (exports);


/***/ }),

/***/ 10:
/*!*************************************!*\
  !*** multi ./examples/selection.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/selection.js */"./examples/selection.js");


/***/ })

/******/ });
//# sourceMappingURL=selection.js.map