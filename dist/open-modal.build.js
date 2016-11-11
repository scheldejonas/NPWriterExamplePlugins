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

	var _writer = __webpack_require__(1);

	var _PluginPackage = __webpack_require__(8);

	var _PluginPackage2 = _interopRequireDefault(_PluginPackage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    if (_writer.registerPlugin) {
	        (0, _writer.registerPlugin)(_PluginPackage2.default);
	    } else {
	        console.error("Register method not yet available");
	    }
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = writer;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = substance;

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _PluginComponent = __webpack_require__(9);

	var _PluginComponent2 = _interopRequireDefault(_PluginComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'open-modal',
	    id: 'se.infomaker.open-modal',
	    configure: function configure(config) {
	        config.addComponentToSidebarWithTabId(this.id, 'main', _PluginComponent2.default);
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _substance = __webpack_require__(4);

	var _writer = __webpack_require__(1);

	var _DialogComponent = __webpack_require__(10);

	var _DialogComponent2 = _interopRequireDefault(_DialogComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PluginComponent = function (_Component) {
	    _inherits(PluginComponent, _Component);

	    function PluginComponent() {
	        _classCallCheck(this, PluginComponent);

	        return _possibleConstructorReturn(this, (PluginComponent.__proto__ || Object.getPrototypeOf(PluginComponent)).apply(this, arguments));
	    }

	    _createClass(PluginComponent, [{
	        key: 'render',
	        value: function render($$) {
	            var el = $$('div');

	            var openDialogButton = $$('button').append("Click me to open dialog").on('click', function () {
	                _writer.api.ui.showDialog(_DialogComponent2.default, {}, {});
	            });

	            el.append(openDialogButton);

	            return el;
	        }
	    }]);

	    return PluginComponent;
	}(_substance.Component);

	exports.default = PluginComponent;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _substance = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DialogComponent = function (_Component) {
	    _inherits(DialogComponent, _Component);

	    function DialogComponent() {
	        _classCallCheck(this, DialogComponent);

	        return _possibleConstructorReturn(this, (DialogComponent.__proto__ || Object.getPrototypeOf(DialogComponent)).apply(this, arguments));
	    }

	    _createClass(DialogComponent, [{
	        key: 'render',
	        value: function render($$) {
	            return $$('div').append('Hello world from DialogComponent');
	        }
	    }, {
	        key: 'onClose',
	        value: function onClose(action) {// action is save or cancel

	        }
	    }]);

	    return DialogComponent;
	}(_substance.Component);

	exports.default = DialogComponent;

/***/ }
/******/ ]);