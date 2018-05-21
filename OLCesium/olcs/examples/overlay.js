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
/******/ 		"overlay": 0
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
/******/ 	deferredModules.push([7,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/overlay.js":
/*!*****************************!*\
  !*** ./examples/overlay.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! olcs/OLCesium.js */ "./src/olcs/OLCesium.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/openlayers/src/ol/Map.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/openlayers/src/ol/source/OSM.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/openlayers/src/ol/layer/Tile.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/openlayers/src/ol/proj.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/View.js */ "./node_modules/openlayers/src/ol/View.js");
/* harmony import */ var ol_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/control.js */ "./node_modules/openlayers/src/ol/control.js");
/* harmony import */ var ol_Overlay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Overlay.js */ "./node_modules/openlayers/src/ol/Overlay.js");
/* harmony import */ var ol_coordinate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/coordinate.js */ "./node_modules/openlayers/src/ol/coordinate.js");
/**
 * @module examples.overlay
 */
const exports = {};









/* global $ */

const source = new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_2__["default"]();


const ol2d = new ol_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  layers: [
    new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      source
    })
  ],
  controls: Object(ol_control_js__WEBPACK_IMPORTED_MODULE_6__["defaults"])({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })
  }),
  target: 'map',
  view: new ol_View_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
    center: ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["transform"]([-112.2, 36.06], 'EPSG:4326', 'EPSG:3857'),
    zoom: 11
  })
});
const ol3d = new olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  map: ol2d,
  target: 'map3d'
});
const scene = ol3d.getCesiumScene();
const terrainProvider = new Cesium.CesiumTerrainProvider({
  url: '//assets.agi.com/stk-terrain/world'
});
scene.terrainProvider = terrainProvider;

class OverlayHandler {
  constructor(ol2d, ol3d, scene) {
    this.ol2d = ol2d;
    this.ol3d = ol3d;
    this.scene = scene;

    this.staticOverlay = new ol_Overlay_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      element: document.getElementById('popup')
    });

    this.staticBootstrapPopup = new ol_Overlay_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      element: document.getElementById('popup-bootstrap')
    });
    this.ol2d.addOverlay(this.staticOverlay);
    this.ol2d.addOverlay(this.staticBootstrapPopup);

    this.options = {
      boostrap: false,
      add: true
    };

    this.ol2d.on('click', this.onClickHandlerOL.bind(this));
    const eventHandler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    eventHandler.setInputAction(this.onClickHandlerCS.bind(this), Cesium.ScreenSpaceEventType['LEFT_CLICK']);

    const clickForm = document.getElementById('click-action-form');
    clickForm.onchange = function(event) {
      const checked = $('input[name="click-action"]:checked').val();
      this.options.add = checked === 'add';
    }.bind(this);

    const typeForm = document.getElementById('overlay-type-form');
    typeForm.onchange = function(event) {
      const checked = $('input[name="overlay-type"]:checked').val();
      this.options.boostrap = checked === 'popover';
    }.bind(this);
  }

  onClickHandlerOL(event) {
    const coordinates = event.coordinate;
    const hdms = ol_coordinate_js__WEBPACK_IMPORTED_MODULE_8__["toStringHDMS"](
        ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["transform"](coordinates, 'EPSG:3857', 'EPSG:4326')
    );
    const overlay = this.getOverlay();
    overlay.setPosition(coordinates);
    this.setOverlayContent(overlay, hdms);
  }

  onClickHandlerCS(event) {
    if (event.position.x === 0 && event.position.y === 0) {
      return;
    }

    const ray = this.scene.camera.getPickRay(event.position);
    const cartesian = this.scene.globe.pick(ray, scene);
    if (!cartesian) {
      return;
    }
    const cartographic = scene.globe.ellipsoid.cartesianToCartographic(cartesian);
    let coords = [Cesium.Math.toDegrees(cartographic.longitude), Cesium.Math.toDegrees(cartographic.latitude)];

    const height = scene.globe.getHeight(cartographic);
    if (height) {
      coords = coords.concat([height]);
    }

    const transformedCoords = ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["transform"](coords, ol_proj_js__WEBPACK_IMPORTED_MODULE_4__["get"]('EPSG:4326'), 'EPSG:3857');
    const hdms = ol_coordinate_js__WEBPACK_IMPORTED_MODULE_8__["toStringHDMS"](coords);
    const overlay = this.getOverlay();
    overlay.setPosition(transformedCoords);
    this.setOverlayContent(overlay, hdms);
  }

  getOverlay() {
    if (this.options.add) {
      return this.addOverlay();
    }

    if (this.options.boostrap) {
      return this.staticBootstrapPopup;
    }
    return this.staticOverlay;
  }

  setOverlayContent(overlay, hdms) {
    const element = overlay.getElement();
    if (this.options.boostrap) {
      const div = document.createElement('div');
      div.onclick = this.onCloseClick.bind(this, overlay, this.options.add);
      div.innerHTML = `<p>The location you clicked was:</p><code>${hdms}</code>`;
      $(element).popover('destroy');
      $(element).popover({
        'placement': 'top',
        'animation': false,
        'html': true,
        'content': div
      });
      $(element).popover('show');
    } else {
      element.childNodes.forEach((child) => {
        if (child.id === 'popup-content') {
          child.innerHTML = `<p>The location you clicked was:</p><code>${hdms}</code>`;
        } else if (child.id === 'popup-closer') {
          child.onclick = this.onCloseClick.bind(this, overlay, this.options.add);
        }
      });
    }
  }

  onCloseClick(overlay, add) {
    if (add) {
      this.ol2d.removeOverlay(overlay);
    } else {
      overlay.setPosition(undefined);
    }
  }

  addOverlay() {
    let element;
    if (this.options.boostrap) {
      element = document.getElementById('popup-bootstrap').cloneNode(true);
    } else {
      element = document.getElementById('popup').cloneNode(true);
    }
    const overlay = new ol_Overlay_js__WEBPACK_IMPORTED_MODULE_7__["default"]({element});
    this.ol2d.addOverlay(overlay);
    return overlay;
  }
}

new OverlayHandler(ol2d, ol3d, scene);

document.getElementById('enable').addEventListener('click', () => ol3d.setEnabled(!ol3d.getEnabled()));

/* harmony default export */ __webpack_exports__["default"] = (exports);


/***/ }),

/***/ 7:
/*!***********************************!*\
  !*** multi ./examples/overlay.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/overlay.js */"./examples/overlay.js");


/***/ })

/******/ });
//# sourceMappingURL=overlay.js.map