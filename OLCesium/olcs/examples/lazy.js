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
/******/ 		"lazy": 0
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
/******/ 	deferredModules.push([5,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/lazy.js":
/*!**************************!*\
  !*** ./examples/lazy.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/openlayers/src/ol/proj.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/View.js */ "./node_modules/openlayers/src/ol/View.js");
/* harmony import */ var ol_control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/control.js */ "./node_modules/openlayers/src/ol/control.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/openlayers/src/ol/source/OSM.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/openlayers/src/ol/layer/Tile.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/openlayers/src/ol/Map.js");
/* harmony import */ var olcs_contrib_Manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! olcs/contrib/Manager.js */ "./src/olcs/contrib/Manager.js");
/**
 * @module examples.lazy
 */
const exports = {};









const ol2d = new ol_Map_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  layers: [
    new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
    })
  ],
  controls: Object(ol_control_js__WEBPACK_IMPORTED_MODULE_2__["defaults"])({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })
  }),
  target: 'map',
  view: new ol_View_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    center: ol_proj_js__WEBPACK_IMPORTED_MODULE_0__["transform"]([25, 20], 'EPSG:4326', 'EPSG:3857'),
    zoom: 3
  })
});


window['manager'] = new olcs_contrib_Manager_js__WEBPACK_IMPORTED_MODULE_6__["default"](window.CESIUM_URL, {map: ol2d});


/* harmony default export */ __webpack_exports__["default"] = (exports);


/***/ }),

/***/ "./src/olcs/contrib/LazyLoader.js":
/*!****************************************!*\
  !*** ./src/olcs/contrib/LazyLoader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @module olcs.contrib.LazyLoader
 */
var exports = function () {
  /**
   * @param {string} url
   * @struct
   * @api
   */
  function exports(url) {
    _classCallCheck(this, exports);

    /**
     * @type {Promise<undefined>}
     * @protected
     */
    this.promise;

    /**
     * @private
     * @type {string}
     */
    this.url_ = url;
  }

  /**
   * @return {Promise<undefined>}
   * @api
   */


  exports.prototype.load = function load() {
    var _this = this;

    if (!this.promise) {
      // not yet loading
      this.promise = new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.onload = function () {
          return resolve();
        };
        script.onerror = function () {
          return reject();
        };
        document.head.appendChild(script);
        script.src = _this.url_;
      });
    }
    return this.promise;
  };

  return exports;
}();

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/olcs/contrib/Manager.js":
/*!*************************************!*\
  !*** ./src/olcs/contrib/Manager.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contrib_LazyLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contrib/LazyLoader.js */ "./src/olcs/contrib/LazyLoader.js");
/* harmony import */ var _OLCesium_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OLCesium.js */ "./src/olcs/OLCesium.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core.js */ "./src/olcs/core.js");
/* harmony import */ var ol_math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/math.js */ "./node_modules/openlayers/src/ol/math.js");
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Observable.js */ "./node_modules/openlayers/src/ol/Observable.js");
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog/asserts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @module olcs.contrib.Manager
 */







var exports = function (_olObservable) {
  _inherits(exports, _olObservable);

  /**
   * @param {string} cesiumUrl
   * @param {olcsx.contrib.ManagerOptions} options
   * @api
   */
  function exports(cesiumUrl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        map = _ref.map,
        cameraExtentInRadians = _ref.cameraExtentInRadians;

    _classCallCheck(this, exports);

    /**
     * @type {string}
     * @private
     */
    var _this = _possibleConstructorReturn(this, _olObservable.call(this));

    _this.cesiumUrl_ = cesiumUrl;

    /**
     * @type {ol.Map}
     * @protected
     */
    _this.map = map;

    /**
     * @type {ol.Extent}
     * @protected
     */
    _this.cameraExtentInRadians = cameraExtentInRadians || null;

    /**
     * @private
     * @type {Cesium.BoundingSphere}
     */
    _this.boundingSphere_;

    /**
     * @type {boolean}
     * @private
     */
    _this.blockLimiter_ = false;

    /**
     * @type {Promise.<olcs.OLCesium>}
     * @private
     */
    _this.promise_;

    /**
     * @type {olcs.OLCesium}
     * @protected
     */
    _this.ol3d;

    /**
     * @const {number} Tilt angle in radians
     * @private
     */
    _this.cesiumInitialTilt_ = ol_math_js__WEBPACK_IMPORTED_MODULE_3__["toRadians"](50);

    /**
     * @protected
     * @type {number}
     */
    _this.fogDensity = 0.0001;

    /**
     * @protected
     * @type {number}
     */
    _this.fogSSEFactor = 25;

    /**
     * Limit the minimum distance to the terrain to 2m.
     * @protected
     * @type {number}
     */
    _this.minimumZoomDistance = 2;

    /**
     * Limit the maximum distance to the earth to 10'000km.
     * @protected
     * @type {number}
     */
    _this.maximumZoomDistance = 10000000;

    // when closer to 3000m, restrict the available positions harder
    /**
     * @protected
     * @param {number} height
     */
    _this.limitCameraToBoundingSphereRatio = function (height) {
      return height > 3000 ? 9 : 3;
    };
    return _this;
  }

  /**
   * @return {Promise.<olcs.OLCesium>}
   */


  exports.prototype.load = function load() {
    var _this2 = this;

    if (!this.promise_) {
      var cesiumLazyLoader = new _contrib_LazyLoader_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.cesiumUrl_);
      this.promise_ = cesiumLazyLoader.load().then(function () {
        return _this2.onCesiumLoaded();
      });
    }
    return this.promise_;
  };

  /**
   * @protected
   * @return {olcs.OLCesium}
   */


  exports.prototype.onCesiumLoaded = function onCesiumLoaded() {
    if (this.cameraExtentInRadians) {
      var rect = new (Function.prototype.bind.apply(Cesium.Rectangle, [null].concat(this.cameraExtentInRadians)))();
      // Set the fly home rectangle
      Cesium.Camera.DEFAULT_VIEW_RECTANGLE = rect;
      this.boundingSphere_ = Cesium.BoundingSphere.fromRectangle3D(rect, Cesium.Ellipsoid.WGS84, 300); // lux mean height is 300m
    }

    this.ol3d = this.instantiateOLCesium();
    var scene = this.ol3d.getCesiumScene();
    this.configureForUsability(scene);
    this.configureForPerformance(scene);
    this.dispatchEvent('load');
    return this.ol3d;
  };

  /**
   * Application code should override this method.
   * @return {olcs.OLCesium}
   */


  exports.prototype.instantiateOLCesium = function instantiateOLCesium() {
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_5__["default"].assert(this.map);
    var ol3d = new _OLCesium_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ map: this.map });
    var scene = ol3d.getCesiumScene();
    var terrainProvider = new Cesium.CesiumTerrainProvider({
      url: '//assets.agi.com/stk-terrain/world'
    });
    scene.terrainProvider = terrainProvider;
    return ol3d;
  };

  /**
   * @param {!Cesium.Scene} scene The scene, passed as parameter for convenience.
   * @protected
   */


  exports.prototype.configureForPerformance = function configureForPerformance(scene) {
    var fog = scene.fog;
    fog.enabled = true;
    fog.density = this.fogDensity;
    fog.screenSpaceErrorFactor = this.fogSSEFactor;
  };

  /**
   * @param {!Cesium.Scene} scene The scene, passed as parameter for convenience.
   * @protected
   */


  exports.prototype.configureForUsability = function configureForUsability(scene) {
    var sscController = scene.screenSpaceCameraController;
    sscController.minimumZoomDistance = this.minimumZoomDistance;
    sscController.maximumZoomDistance = this.maximumZoomDistance;

    // Do not see through the terrain. Seeing through the terrain does not make
    // sense anyway, except for debugging
    scene.globe.depthTestAgainstTerrain = true;

    // Use white instead of the black default colour for the globe when tiles are missing
    scene.globe.baseColor = Cesium.Color.WHITE;
    scene.backgroundColor = Cesium.Color.WHITE;

    if (this.boundingSphere_) {
      scene.postRender.addEventListener(this.limitCameraToBoundingSphere.bind(this), scene);
    }
    // Stop rendering Cesium when there is nothing to do. This drastically reduces CPU/GPU consumption.
    this.ol3d.enableAutoRenderLoop();
  };

  /**
   * Constrain the camera so that it stays close to the bounding sphere of the map extent.
   * Near the ground the allowed distance is shorter.
   * @protected
   */


  exports.prototype.limitCameraToBoundingSphere = function limitCameraToBoundingSphere() {
    var _this3 = this;

    if (this.boundingSphere_ && !this.blockLimiter_) {
      var scene = this.ol3d.getCesiumScene();
      var camera = scene.camera;
      var position = camera.position;
      var carto = Cesium.Cartographic.fromCartesian(position);
      var ratio = this.limitCameraToBoundingSphereRatio(carto.height);
      if (Cesium.Cartesian3.distance(this.boundingSphere_.center, position) > this.boundingSphere_.radius * ratio) {
        var currentlyFlying = camera.flying;
        if (currentlyFlying === true) {
          // There is a flying property and its value is true
          return;
        } else {
          this.blockLimiter_ = true;
          var unblockLimiter = function unblockLimiter() {
            return _this3.blockLimiter_ = false;
          };
          camera.flyToBoundingSphere(this.boundingSphere_, {
            complete: unblockLimiter,
            cancel: unblockLimiter
          });
        }
      }
    }
  };

  /**
   * Enable or disable ol3d with a default animation.
   * @export
   * @return {Promise<undefined>}
   */


  exports.prototype.toggle3d = function toggle3d() {
    var _this4 = this;

    return this.load().then(function ( /** @const {!olcs.OLCesium} */ol3d) {
      var is3DCurrentlyEnabled = ol3d.getEnabled();
      var scene = ol3d.getCesiumScene();
      if (is3DCurrentlyEnabled) {
        // Disable 3D
        goog_asserts_js__WEBPACK_IMPORTED_MODULE_5__["default"].assert(_this4.map);
        return _core_js__WEBPACK_IMPORTED_MODULE_2__["default"].resetToNorthZenith(_this4.map, scene).then(function () {
          ol3d.setEnabled(false);
          _this4.dispatchEvent('toggle');
        });
      } else {
        // Enable 3D
        ol3d.setEnabled(true);
        _this4.dispatchEvent('toggle');
        return _core_js__WEBPACK_IMPORTED_MODULE_2__["default"].rotateAroundBottomCenter(scene, _this4.cesiumInitialTilt_);
      }
    });
  };

  /**
   * Enable ol3d with a view built from parameters.
   *
   * @export
   * @param {number} lon
   * @param {number} lat
   * @param {number} elevation
   * @param {number} headingDeg Heading value in degrees.
   * @param {number} pitchDeg Pitch value in degrees.
   * @returns {Promise<undefined>}
   */


  exports.prototype.set3dWithView = function set3dWithView(lon, lat, elevation, headingDeg, pitchDeg) {
    var _this5 = this;

    return this.load().then(function ( /** @const {!olcs.OLCesium} */ol3d) {
      var is3DCurrentlyEnabled = ol3d.getEnabled();
      var scene = ol3d.getCesiumScene();
      var camera = scene.camera;
      var destination = Cesium.Cartesian3.fromDegrees(lon, lat, elevation);
      var heading = Cesium.Math.toRadians(headingDeg);
      var pitch = Cesium.Math.toRadians(pitchDeg);
      var roll = 0;
      var orientation = { heading: heading, pitch: pitch, roll: roll };

      if (!is3DCurrentlyEnabled) {
        ol3d.setEnabled(true);
        _this5.dispatchEvent('toggle');
      }

      camera.setView({
        destination: destination,
        orientation: orientation
      });
    });
  };

  /**
   * @export
   * @return {boolean}
   */


  exports.prototype.is3dEnabled = function is3dEnabled() {
    return !!this.ol3d && this.ol3d.getEnabled();
  };

  /**
   * @return {number}
   */


  exports.prototype.getHeading = function getHeading() {
    return this.map ? this.map.getView().getRotation() || 0 : 0;
  };

  /**
   * @return {number|undefined}
   */


  exports.prototype.getTiltOnGlobe = function getTiltOnGlobe() {
    var scene = this.ol3d.getCesiumScene();
    var tiltOnGlobe = _core_js__WEBPACK_IMPORTED_MODULE_2__["default"].computeSignedTiltAngleOnGlobe(scene);
    return -tiltOnGlobe;
  };

  /**
   * @param {number} angle
   */


  exports.prototype.setHeading = function setHeading(angle) {
    var scene = this.ol3d.getCesiumScene();
    var bottom = _core_js__WEBPACK_IMPORTED_MODULE_2__["default"].pickBottomPoint(scene);
    if (bottom) {
      _core_js__WEBPACK_IMPORTED_MODULE_2__["default"].setHeadingUsingBottomCenter(scene, angle, bottom);
    }
  };

  /**
   * @export
   * @return {olcs.OLCesium}
   */


  exports.prototype.getOl3d = function getOl3d() {
    return this.ol3d;
  };

  /**
   * @export
   * @return {!ol.View}
   */


  exports.prototype.getOlView = function getOlView() {
    var view = this.map.getView();
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_5__["default"].assert(view);
    return view;
  };

  /**
   * @export
   * @return {Cesium.Matrix4}
   */


  exports.prototype.getCesiumViewMatrix = function getCesiumViewMatrix() {
    return this.ol3d.getCesiumScene().camera.viewMatrix;
  };

  /**
   * @export
   * @return {!Cesium.Scene}
   */


  exports.prototype.getCesiumScene = function getCesiumScene() {
    return this.ol3d.getCesiumScene();
  };

  /**
   * @export
   * @param {!Cesium.Rectangle} rectangle
   * @param {number=} offset in meters
   * @return {Promise<undefined>}
   */


  exports.prototype.flyToRectangle = function flyToRectangle(rectangle) {
    var _this6 = this;

    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var camera = this.getCesiumScene().camera;
    var destination = camera.getRectangleCameraCoordinates(rectangle);

    var mag = Cesium.Cartesian3.magnitude(destination) + offset;
    Cesium.Cartesian3.normalize(destination, destination);
    Cesium.Cartesian3.multiplyByScalar(destination, mag, destination);

    return new Promise(function (resolve, reject) {
      if (!_this6.cameraExtentInRadians) {
        reject();
        return;
      }

      camera.flyTo({
        destination: destination,
        complete: function complete() {
          return resolve();
        },
        cancel: function cancel() {
          return reject();
        },
        endTransform: Cesium.Matrix4.IDENTITY
      });
    });
  };

  /**
   * @protected
   * @return {Cesium.Rectangle|undefined}
   */


  exports.prototype.getCameraExtentRectangle = function getCameraExtentRectangle() {
    if (this.cameraExtentInRadians) {
      return new (Function.prototype.bind.apply(Cesium.Rectangle, [null].concat(this.cameraExtentInRadians)))();
    }
  };

  return exports;
}(ol_Observable_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./examples/lazy.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/lazy.js */"./examples/lazy.js");


/***/ })

/******/ });
//# sourceMappingURL=lazy.js.map