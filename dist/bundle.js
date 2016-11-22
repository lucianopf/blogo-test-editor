/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _utils3 = __webpack_require__(2);

	var _utils4 = _interopRequireDefault(_utils3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var shortcutKeycodes = {
	  B: { code: 66, action: 'bold' },
	  I: { code: 73, action: 'italic' },
	  U: { code: 85, action: 'underline' }
	};

	window.onload = function () {
	  console.log('Setting things up');
	  document.execCommand("styleWithCSS", false, false);
	  if (navigator.vendor !== 'Google Inc.') {
	    (0, _utils2.default)(shortcutKeycodes);
	  }
	  (0, _utils4.default)();
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function dispatchTransform(transformName) {
	  document.execCommand(transformName, false, null);
	}

	function preventAndDispatch(transformName, e) {
	  e.preventDefault();
	  e.stopPropagation();
	  dispatchTransform(transformName);
	}

	function setupKeys(shortcutKeycodes) {
	  document.onkeydown = function (e) {
	    e = e || window.event;
	    if (e.ctrlKey || e.metaKey) {
	      (function () {
	        var c = e.which || e.keyCode;
	        Object.keys(shortcutKeycodes).forEach(function (key) {
	          if (c === shortcutKeycodes[key].code) {
	            preventAndDispatch(shortcutKeycodes[key].action, e);
	          }
	        });
	      })();
	    }
	  };
	}

	exports.default = setupKeys;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var supportedFormats = ['image/png', 'image/jpeg', 'image/bpm'];

	function setupImages() {
	  var contentBox = document.getElementsByClassName('content')[0];
	  document.ondragover = function () {
	    return false;
	  };
	  document.ondragend = function () {
	    return false;
	  };
	  document.ondrop = function (e) {
	    e.preventDefault();
	    console.log(e.dataTransfer.files);
	    if (e.dataTransfer.files.length) {
	      var file = e.dataTransfer.files[0];
	      if (supportedFormats.indexOf(file.type) !== -1) {
	        var reader = new FileReader();
	        reader.onload = function (event) {
	          var newImage = document.createElement('img');
	          newImage.src = event.target.result;
	          contentBox.appendChild(newImage);
	        };
	        reader.readAsDataURL(file);
	        return false;
	      }
	    }
	  };
	}

	exports.default = setupImages;

/***/ }
/******/ ]);