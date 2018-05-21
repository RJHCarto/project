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
/******/ 		"main": 0
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
/******/ 	deferredModules.push([6,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/main.js":
/*!**************************!*\
  !*** ./examples/main.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! olcs/OLCesium.js */ "./src/olcs/OLCesium.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/openlayers/src/ol/proj.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/View.js */ "./node_modules/openlayers/src/ol/View.js");
/* harmony import */ var ol_control_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/control.js */ "./node_modules/openlayers/src/ol/control.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/openlayers/src/ol/source/OSM.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/openlayers/src/ol/layer/Tile.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/openlayers/src/ol/Map.js");
/**
 * @module examples.main
 */
const exports = {};









const ol2d = new ol_Map_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  layers: [
    new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_4__["default"]()
    })
  ],
  controls: Object(ol_control_js__WEBPACK_IMPORTED_MODULE_3__["defaults"])({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })
  }),
  target: 'map',
  view: new ol_View_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    center: ol_proj_js__WEBPACK_IMPORTED_MODULE_1__["transform"]([25, 20], 'EPSG:4326', 'EPSG:3857'),
    zoom: 3
  })
});

const timeElt = document.getElementById('time');
const ol3d = new olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  map: ol2d,
  time() {
    const val = timeElt.value;
    if (ol3d.getCesiumScene().globe.enableLighting && val) {
      const d = new Date();
      d.setUTCHours(val);
      return Cesium.JulianDate.fromDate(d);
    }
    return Cesium.JulianDate.now();
  }
});
const scene = ol3d.getCesiumScene();
const terrainProvider = new Cesium.CesiumTerrainProvider({
  url: '//assets.agi.com/stk-terrain/world',
  requestVertexNormals: true
});
scene.terrainProvider = terrainProvider;
ol3d.setEnabled(true);


timeElt.style.display = 'none';

document.getElementById('enable').addEventListener('click', () => ol3d.setEnabled(!ol3d.getEnabled()));
window['toggleTime'] = function() {
  scene.globe.enableLighting = !scene.globe.enableLighting;
  if (timeElt.style.display == 'none') {
    timeElt.style.display = 'inline-block';
  } else {
    timeElt.style.display = 'none';
  }
};


/* harmony default export */ __webpack_exports__["default"] = (exports);


/***/ }),

/***/ 6:
/*!********************************!*\
  !*** multi ./examples/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/main.js */"./examples/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map