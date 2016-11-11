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

	var _InsertNodePackage = __webpack_require__(2);

	var _InsertNodePackage2 = _interopRequireDefault(_InsertNodePackage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    if (_writer.registerPlugin) {
	        (0, _writer.registerPlugin)(_InsertNodePackage2.default);
	    } else {
	        console.error("Register method not yet available");
	    }
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = writer;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _InsertNodeSidebarComponent = __webpack_require__(3);

	var _InsertNodeSidebarComponent2 = _interopRequireDefault(_InsertNodeSidebarComponent);

	var _InsertNodeNode = __webpack_require__(5);

	var _InsertNodeNode2 = _interopRequireDefault(_InsertNodeNode);

	var _InsertNodeConverter = __webpack_require__(6);

	var _InsertNodeConverter2 = _interopRequireDefault(_InsertNodeConverter);

	var _InsertNodeComponent = __webpack_require__(7);

	var _InsertNodeComponent2 = _interopRequireDefault(_InsertNodeComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'insertnode',
	    id: 'se.infomaker.insertnode',
	    configure: function configure(config) {

	        config.addNode(_InsertNodeNode2.default);
	        config.addConverter('newsml', _InsertNodeConverter2.default);
	        config.addComponent('insertnode', _InsertNodeComponent2.default);
	        config.addComponentToSidebarWithTabId(this.id, 'main', _InsertNodeSidebarComponent2.default);
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _substance = __webpack_require__(4);

	var _writer = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InsertNodeSidebarComponent = function (_Component) {
	    _inherits(InsertNodeSidebarComponent, _Component);

	    function InsertNodeSidebarComponent() {
	        _classCallCheck(this, InsertNodeSidebarComponent);

	        return _possibleConstructorReturn(this, (InsertNodeSidebarComponent.__proto__ || Object.getPrototypeOf(InsertNodeSidebarComponent)).apply(this, arguments));
	    }

	    _createClass(InsertNodeSidebarComponent, [{
	        key: 'render',
	        value: function render($$) {

	            // Render a button, clicking results in inserting a new node
	            return $$('button').addClass('sc-np-btn btn-primary').append('InsertNode').on('click', this.insertNode);
	        }
	    }, {
	        key: 'insertNode',
	        value: function insertNode() {

	            // Create the node
	            var node = {
	                id: (0, _writer.idGenerator)(),
	                type: 'insertnode',
	                dataType: 'insertnode',
	                text: "Edit me..."
	            };

	            // Insert as a block node via the API

	            _writer.api.document.insertBlockNode(node.type, node);
	        }
	    }]);

	    return InsertNodeSidebarComponent;
	}(_substance.Component);

	exports.default = InsertNodeSidebarComponent;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = substance;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _substance = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * <object id="" type="insertnode">
	 *      <data>
	 *          <text>this is the text</text>
	 *      </data>
	 * </object>
	 */
	var InsertNodeNode = function (_BlockNode) {
	  _inherits(InsertNodeNode, _BlockNode);

	  function InsertNodeNode() {
	    _classCallCheck(this, InsertNodeNode);

	    return _possibleConstructorReturn(this, (InsertNodeNode.__proto__ || Object.getPrototypeOf(InsertNodeNode)).apply(this, arguments));
	  }

	  return InsertNodeNode;
	}(_substance.BlockNode);

	InsertNodeNode.define({
	  type: 'insertnode',
	  dataType: 'string',
	  text: 'string'
	});

	exports.default = InsertNodeNode;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	/**
	 * <object id="" type="insertnode">
	 *      <data>
	 *          <text>this is the text</text>
	 *      </data>
	 * </object>
	 */

	exports.default = {
	    type: 'insertnode',
	    tagName: 'object',

	    matchElement: function matchElement(el) {
	        return el.is('object[type="insertnode"]');
	    },

	    import: function _import(el, node, converter) {
	        node.id = el.attr('id');

	        node.dataType = el.attr('type'); // type is reserved so we use dataType

	        var text = el.find('data>text');
	        node.text = converter.annotatedText(text, [node.id, 'text']);
	    },

	    export: function _export(node, el, converter) {
	        var $$ = converter.$$;

	        el.attr({
	            id: node.id,
	            type: node.dataType
	        });

	        var data = $$('data').append($$('text').append(converter.annotatedText([node.id, 'text'])));

	        el.append(data);
	    }
	};

/***/ },
/* 7 */
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

	var InsertNodeComponent = function (_Component) {
	    _inherits(InsertNodeComponent, _Component);

	    function InsertNodeComponent() {
	        _classCallCheck(this, InsertNodeComponent);

	        return _possibleConstructorReturn(this, (InsertNodeComponent.__proto__ || Object.getPrototypeOf(InsertNodeComponent)).apply(this, arguments));
	    }

	    _createClass(InsertNodeComponent, [{
	        key: 'render',


	        /**
	         * This component is used to render the "node" inside the editor
	         * @param $$
	         * @returns {*}
	         */
	        value: function render($$) {
	            var node = this.props.node; // You can access the node through the props

	            var el = $$('div');

	            // Use an TextPropertyEditor to allow us to edit the text

	            var textField = $$(_substance.TextPropertyEditor, {
	                tagName: 'div',
	                path: [this.props.node.id, 'text'],
	                doc: this.props.doc
	            }).ref('text');

	            el.append(textField);

	            return el;
	        }
	    }]);

	    return InsertNodeComponent;
	}(_substance.Component);

	exports.default = InsertNodeComponent;

/***/ }
/******/ ]);