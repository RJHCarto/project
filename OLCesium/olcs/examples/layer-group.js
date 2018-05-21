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
/******/ 		"layer-group": 0
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
/******/ 	deferredModules.push([4,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/layer-group.js":
/*!*********************************!*\
  !*** ./examples/layer-group.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/openlayers/src/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/View.js */ "./node_modules/openlayers/src/ol/View.js");
/* harmony import */ var ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/Group.js */ "./node_modules/openlayers/src/ol/layer/Group.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/openlayers/src/ol/layer/Tile.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/openlayers/src/ol/proj.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/openlayers/src/ol/source/OSM.js");
/* harmony import */ var ol_source_TileJSON_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/TileJSON.js */ "./node_modules/openlayers/src/ol/source/TileJSON.js");
/* harmony import */ var olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! olcs/OLCesium.js */ "./src/olcs/OLCesium.js");
/**
 * @module examples.layer-group
 */
const exports = {};









const layer0 = new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__["default"]()
});

const layer10 = new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  source: new ol_source_TileJSON_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    url: 'https://api.tiles.mapbox.com/v3/mapbox.20110804-hoa-foodinsecurity-3month.json?secure',
    crossOrigin: 'anonymous'
  })
});

const layer11 = new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  source: new ol_source_TileJSON_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    url: 'https://api.tiles.mapbox.com/v3/mapbox.world-borders-light.json?secure',
    crossOrigin: 'anonymous'
  })
});

const layer1 = new ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  layers: [
    layer10,
    layer11
  ]
});

const ol2d = new ol_Map_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  layers: [layer0, layer1],
  target: 'map2d',
  view: new ol_View_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    center: ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["fromLonLat"]([37.40570, 8.81566]),
    zoom: 4
  })
});

const ol3d = new olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_7__["default"]({map: ol2d, target: 'map3d'});
ol3d.setEnabled(true);

function getLayer(layername) {
  switch (layername) {
    case 'layer0':
      return layer0;
    case 'layer1':
      return layer1;
    case 'layer10':
      return layer10;
    case 'layer11':
      return layer11;
    default:
      throw new Error('Unknown layer');
  }
}

window['toggleLayer'] = function(element, name) {
  getLayer(name).setVisible(element.checked);
};
window['setLayerOpacity'] = function(element, name) {
  getLayer(name).setOpacity(parseFloat(element.value));
};

/* harmony default export */ __webpack_exports__["default"] = (exports);


/***/ }),

/***/ 4:
/*!***************************************!*\
  !*** multi ./examples/layer-group.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/layer-group.js */"./examples/layer-group.js");


/***/ })

/******/ });
//# sourceMappingURL=layer-group.js.map