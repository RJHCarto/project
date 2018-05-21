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
/******/ 		"rotate": 0
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
/******/ 	deferredModules.push([9,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/rotate.js":
/*!****************************!*\
  !*** ./examples/rotate.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var olcs_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! olcs/core.js */ "./src/olcs/core.js");
/* harmony import */ var olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! olcs/OLCesium.js */ "./src/olcs/OLCesium.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/View.js */ "./node_modules/openlayers/src/ol/View.js");
/* harmony import */ var ol_control_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/control.js */ "./node_modules/openlayers/src/ol/control.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/openlayers/src/ol/source/OSM.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/openlayers/src/ol/layer/Tile.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/openlayers/src/ol/Map.js");
/**
 * @module examples.rotate
 */
const exports = {};









const map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  layers: [
    new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_4__["default"]()
    })
  ],
  target: 'map2d',
  controls: Object(ol_control_js__WEBPACK_IMPORTED_MODULE_3__["defaults"])({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })
  }),
  view: new ol_View_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    center: [333333, 1500000],
    zoom: 6
  })
});


const ol3d = new olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_1__["default"]({map/*, target: 'map3d'*/});
const scene = ol3d.getCesiumScene();
const terrainProvider = new Cesium.CesiumTerrainProvider({
  url: '//assets.agi.com/stk-terrain/world',
  requestVertexNormals: false
});
scene.terrainProvider = terrainProvider;
ol3d.setEnabled(true);



/**
 * @param {!olcs.OLCesium} ol3d
 * @constructor
 */
const OlcsControl = function(ol3d) {

  /**
   * @type {!olcs.OLCesium}
   * @private
   */
  this.ol3d_ = ol3d;
};


/**
 * Almost PI / 2.
 * @const
 * @type {number}
 */
OlcsControl.MAX_TILT = 7 * Math.PI / 16;


/**
 * @const
 * @type {number}
 */
OlcsControl.MIN_TILT = 0;


/**
 * @return {ol.View}
 */
OlcsControl.prototype.getOlView = function() {
  return this.ol3d_.getOlView();
};


/**
 * @return {Array.<number>}
 */
OlcsControl.prototype.getTiltRange = function() {
  return [OlcsControl.MIN_TILT, OlcsControl.MAX_TILT];
};


/**
 * @return {number}
 */
OlcsControl.prototype.getHeading = function() {
  return this.getOlView().getRotation() || 0;
};


/**
 * @return {number|undefined}
 */
OlcsControl.prototype.getTiltOnGlobe = function() {
  const scene = this.ol3d_.getCesiumScene();
  const tiltOnGlobe = olcs_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].computeSignedTiltAngleOnGlobe(scene);
  return -tiltOnGlobe;
};


/**
 * @param {function()} callback
 */
OlcsControl.prototype.resetToNorthZenith = function(callback) {
  const scene = this.ol3d_.getCesiumScene();
  const camera = scene.camera;
  const pivot = olcs_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].pickBottomPoint(scene);

  if (!pivot) {
    callback();
    return;
  }

  const currentHeading = this.getHeading();
  const angle = olcs_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].computeAngleToZenith(scene, pivot);

  // Point to North
  olcs_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].setHeadingUsingBottomCenter(scene, currentHeading, pivot);

  // Go to zenith
  const transform = Cesium.Matrix4.fromTranslation(pivot);
  const axis = camera.right;
  const options = {callback};
  olcs_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotateAroundAxis(camera, -angle, axis, transform, options);
};


OlcsControl.prototype.rotate = function(angle) {
  const current = this.ol3d_.getOlView().getRotation();
  this.ol3d_.getOlView().setRotation(current + angle);
};


/**
 * @param {number} angle
 */
OlcsControl.prototype.setHeading = function(angle) {
  const scene = this.ol3d_.getCesiumScene();
  const bottom = olcs_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].pickBottomPoint(scene);
  if (bottom) {
    olcs_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].setHeadingUsingBottomCenter(scene, angle, bottom);
  }
};


/**
 * @param {number} angle
 */
OlcsControl.prototype.tiltOnGlobe = function(angle) {
  const scene = this.ol3d_.getCesiumScene();
  const camera = scene.camera;
  const pivot = olcs_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].pickBottomPoint(scene);
  if (!pivot) {
    // Could not find the bottom point
    return;
  }

  const options = {};
  const transform = Cesium.Matrix4.fromTranslation(pivot);
  const axis = camera.right;
  const rotateAroundAxis = olcs_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotateAroundAxis;
  rotateAroundAxis(camera, -angle, axis, transform, options);
};



window['control'] = new OlcsControl(ol3d); // eslint-disable-line no-unused-vars

/* harmony default export */ __webpack_exports__["default"] = (exports);


/***/ }),

/***/ 9:
/*!**********************************!*\
  !*** multi ./examples/rotate.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/rotate.js */"./examples/rotate.js");


/***/ })

/******/ });
//# sourceMappingURL=rotate.js.map