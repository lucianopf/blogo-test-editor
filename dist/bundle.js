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
/***/ function(module, exports) {

	'use strict';

	var shortcutKeycodes = {
	  B: { code: 66, action: 'bold' },
	  I: { code: 73, action: 'italic' },
	  U: { code: 85, action: 'underline' }
	};

	function dispatchTransform(transformName) {
	  document.execCommand(transformName, false, null);
	}

	function preventAndDispatch(transformName, e) {
	  e.preventDefault();
	  e.stopPropagation();
	  dispatchTransform(transformName);
	}

	function setupKeys() {
	  document.onkeydown = function (e) {
	    e = e || window.event;
	    if (e.ctrlKey) {
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

	window.onload = function () {
	  console.log('Setting things up');
	  document.execCommand("styleWithCSS", false, false);
	  if (navigator.vendor !== 'Google Inc.') {
	    setupKeys();
	  }
	};

/***/ }
/******/ ]);