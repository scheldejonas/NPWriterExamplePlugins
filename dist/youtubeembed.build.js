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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _writer = __webpack_require__(1);

	var _YoutubeEmbedPackage = __webpack_require__(11);

	var _YoutubeEmbedPackage2 = _interopRequireDefault(_YoutubeEmbedPackage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	    if (_writer.registerPlugin) {
	        (0, _writer.registerPlugin)(_YoutubeEmbedPackage2.default);
	    }
	};

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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _YoutubeEmbedTool = __webpack_require__(12);

	var _YoutubeEmbedTool2 = _interopRequireDefault(_YoutubeEmbedTool);

	var _YoutubeEmbedEditTool = __webpack_require__(13);

	var _YoutubeEmbedEditTool2 = _interopRequireDefault(_YoutubeEmbedEditTool);

	var _YoutubeEmbedCommand = __webpack_require__(14);

	var _YoutubeEmbedCommand2 = _interopRequireDefault(_YoutubeEmbedCommand);

	var _YoutubeEmbedEditCommand = __webpack_require__(15);

	var _YoutubeEmbedEditCommand2 = _interopRequireDefault(_YoutubeEmbedEditCommand);

	var _YoutubeEmbedNode = __webpack_require__(16);

	var _YoutubeEmbedNode2 = _interopRequireDefault(_YoutubeEmbedNode);

	var _YoutubeEmbedComponent = __webpack_require__(17);

	var _YoutubeEmbedComponent2 = _interopRequireDefault(_YoutubeEmbedComponent);

	var _YoutubeEmbedConverter = __webpack_require__(18);

	var _YoutubeEmbedConverter2 = _interopRequireDefault(_YoutubeEmbedConverter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    id: 'se.infomaker.youtubeembed',
	    name: 'youtubeembed',
	    configure: function configure(config) {

	        // Add tool
	        config.addContentMenuTopTool('youtubeembed', _YoutubeEmbedTool2.default);
	        // config.addTool('youtubeembededit', YoutubeEmbedEditTool)

	        config.addConverter('newsml', _YoutubeEmbedConverter2.default);

	        // Add component
	        config.addComponent('youtubeembed', _YoutubeEmbedComponent2.default);
	        // Add Command
	        config.addCommand('youtubeembed', _YoutubeEmbedCommand2.default);
	        config.addCommand('youtubeembededit', _YoutubeEmbedEditCommand2.default);
	        // Add node
	        config.addNode(_YoutubeEmbedNode2.default);

	        config.addLabel('insert-youtube-id', {
	            en: 'Insert Youtube Id',
	            sv: 'Infoga Youtube Id'
	        });
	    }
	};

/***/ },
/* 12 */
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

	var YoutubeEmbedTool = function (_Tool) {
	    _inherits(YoutubeEmbedTool, _Tool);

	    function YoutubeEmbedTool() {
	        _classCallCheck(this, YoutubeEmbedTool);

	        return _possibleConstructorReturn(this, (YoutubeEmbedTool.__proto__ || Object.getPrototypeOf(YoutubeEmbedTool)).apply(this, arguments));
	    }

	    _createClass(YoutubeEmbedTool, [{
	        key: 'render',
	        value: function render($$) {
	            var _this2 = this;

	            var el = $$('span');
	            var youtubeIcon = $$(_substance.FontAwesomeIcon, { icon: 'fa-youtube' });
	            youtubeIcon.on('click', function () {
	                _this2.getCommandName();
	                _this2.executeCommand();
	            });

	            el.append(youtubeIcon);

	            return el;
	        }
	    }]);

	    return YoutubeEmbedTool;
	}(_substance.Tool);

	exports.default = YoutubeEmbedTool;

/***/ },
/* 13 */
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

	var YoutubeEmbedEditTool = function (_Tool) {
	    _inherits(YoutubeEmbedEditTool, _Tool);

	    function YoutubeEmbedEditTool() {
	        var _ref;

	        _classCallCheck(this, YoutubeEmbedEditTool);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _possibleConstructorReturn(this, (_ref = YoutubeEmbedEditTool.__proto__ || Object.getPrototypeOf(YoutubeEmbedEditTool)).call.apply(_ref, [this].concat(args)));
	    }

	    _createClass(YoutubeEmbedEditTool, [{
	        key: 'render',
	        value: function render($$) {
	            var el = $$('div');

	            var youtubeURLInput = $$('input').attr('type', 'text').addClass('form-control').ref('youtubeURL');
	            el.append(youtubeURLInput);

	            return el;
	        }
	    }, {
	        key: 'onClose',
	        value: function onClose(action) {

	            if (action === 'save') {
	                _writer.api.editorSession.executeCommand('youtubeembededit', {
	                    url: this.refs.youtubeURL.val()
	                });
	            }
	            return true;
	        }
	    }]);

	    return YoutubeEmbedEditTool;
	}(_substance.Tool);

	exports.default = YoutubeEmbedEditTool;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _substance = __webpack_require__(4);

	var _YoutubeEmbedEditTool = __webpack_require__(13);

	var _YoutubeEmbedEditTool2 = _interopRequireDefault(_YoutubeEmbedEditTool);

	var _writer = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YoutubeEmbedCommand = function (_Command) {
	    _inherits(YoutubeEmbedCommand, _Command);

	    function YoutubeEmbedCommand() {
	        _classCallCheck(this, YoutubeEmbedCommand);

	        return _possibleConstructorReturn(this, (YoutubeEmbedCommand.__proto__ || Object.getPrototypeOf(YoutubeEmbedCommand)).apply(this, arguments));
	    }

	    _createClass(YoutubeEmbedCommand, [{
	        key: 'getCommandState',
	        value: function getCommandState() {
	            return {
	                disabled: false
	            };
	        }
	    }, {
	        key: 'execute',
	        value: function execute() {
	            _writer.api.ui.showDialog(_YoutubeEmbedEditTool2.default, {}, { title: 'insert-youtube-id' });
	            console.log("Execute youtube command");
	        }
	    }]);

	    return YoutubeEmbedCommand;
	}(_substance.Command);

	exports.default = YoutubeEmbedCommand;

/***/ },
/* 15 */
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

	var YoutubeEmbedEditCommand = function (_Command) {
	    _inherits(YoutubeEmbedEditCommand, _Command);

	    function YoutubeEmbedEditCommand() {
	        _classCallCheck(this, YoutubeEmbedEditCommand);

	        return _possibleConstructorReturn(this, (YoutubeEmbedEditCommand.__proto__ || Object.getPrototypeOf(YoutubeEmbedEditCommand)).apply(this, arguments));
	    }

	    _createClass(YoutubeEmbedEditCommand, [{
	        key: 'getCommandState',
	        value: function getCommandState() {
	            return {
	                disabled: false
	            };
	        }
	    }, {
	        key: 'execute',
	        value: function execute(params, context) {
	            var data = {
	                dataType: 'x-im/youtube',
	                url: params.url,
	                uri: "",
	                type: 'youtubeembed',
	                linkType: 'x-im/youtube',
	                html: ""
	            };

	            _writer.api.document.insertBlockNode(data.type, data);

	            console.log("Execute youtube command", data);
	        }
	    }]);

	    return YoutubeEmbedEditCommand;
	}(_substance.Command);

	exports.default = YoutubeEmbedEditCommand;

/***/ },
/* 16 */
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

	var YoutubeEmbedNode = function (_BlockNode) {
	    _inherits(YoutubeEmbedNode, _BlockNode);

	    function YoutubeEmbedNode() {
	        _classCallCheck(this, YoutubeEmbedNode);

	        return _possibleConstructorReturn(this, (YoutubeEmbedNode.__proto__ || Object.getPrototypeOf(YoutubeEmbedNode)).apply(this, arguments));
	    }

	    _createClass(YoutubeEmbedNode, [{
	        key: 'fetchPayload',


	        /**
	         * Method called from a resourcemanager to fetch asynchronos payload
	         *
	         * @param context
	         * @param {function} cb Callback that's invoked from ResourceManager, updates the node with correct values if success
	         *
	         */
	        value: function fetchPayload(context, cb) {
	            var url = this.url;

	            var baseUrl = "http://youtube.com/oembed?url=";
	            var apiUrl = baseUrl + this.url;
	            _writer.api.router.get('/api/proxy/', { url: apiUrl }).then(function (response) {
	                return response.json();
	            }).then(function (json) {
	                cb(null, {
	                    html: json.html,
	                    uri: url,
	                    thumbnail_url: json.thumbnail_url,
	                    title: json.title
	                });
	            }).catch(function (e) {
	                cb(e);
	            });
	        }

	        /*
	         Determines the payload that must be present
	         in order to consider the resource resolved
	         */

	    }, {
	        key: 'hasPayload',
	        value: function hasPayload() {
	            return Boolean(this.html);
	        }
	    }]);

	    return YoutubeEmbedNode;
	}(_substance.BlockNode);

	YoutubeEmbedNode.isResource = true;

	YoutubeEmbedNode.define({
	    type: 'youtubeembed',
	    dataType: 'string',
	    url: 'string',
	    errorMessage: { type: 'string', optional: true },
	    // Payload (after embed has been resolved)
	    html: { type: 'string', optional: true },
	    thumbnail_url: { type: 'string', default: "" },
	    uri: { type: 'string', optional: true },
	    linkType: { type: 'string', optional: true },
	    title: { type: 'string', default: "" }
	});

	exports.default = YoutubeEmbedNode;

/***/ },
/* 17 */
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

	var YoutubeEmbedComponent = function (_Component) {
	    _inherits(YoutubeEmbedComponent, _Component);

	    function YoutubeEmbedComponent() {
	        _classCallCheck(this, YoutubeEmbedComponent);

	        return _possibleConstructorReturn(this, (YoutubeEmbedComponent.__proto__ || Object.getPrototypeOf(YoutubeEmbedComponent)).apply(this, arguments));
	    }

	    _createClass(YoutubeEmbedComponent, [{
	        key: 'didMount',
	        value: function didMount() {
	            this.context.editorSession.onRender('document', this.rerender, this, { path: [this.props.node.id] });

	            this.context.api.refs.writer.ResourceManageranager.triggerFetch(this.props.node);
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            this.context.editorSession.off(this);
	        }
	    }, {
	        key: 'render',
	        value: function render($$) {
	            console.log("This", this.props.node);
	            var node = this.props.node;
	            var el = $$('div');

	            el.append($$('h2').append(node.title));
	            el.append($$('div').append($$('img').attr('src', node.thumbnail_url)));
	            return el;
	        }
	    }]);

	    return YoutubeEmbedComponent;
	}(_substance.Component);

	exports.default = YoutubeEmbedComponent;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	 <object id="MjA5LDIxMiwxMTcsMTQ2"
	 type="x-im/youtube"
	 url="https://www.youtube.com/watch?v=7BXCMyPh_nI&amp;t=631s"
	 uri="https://www.youtube.com/watch?v=7BXCMyPh_nI&amp;t=631s">
	 <data>
	 <start>0</start>
	 </data>
	 </object>

	 type: 'youtubeembed',
	 dataType: 'string',
	 url: 'string',
	 errorMessage: { type: 'string', optional: true },
	 // Payload (after embed has been resolved)
	 html: { type: 'string', optional: true },
	 thumbnail_url: { type: 'string', default: ""},
	 uri: { type: 'string', optional: true },
	 linkType: { type: 'string', optional: true },
	 title: { type: 'string', default: "" },
	 */

	exports.default = {
	    type: 'youtubeembed',
	    tagName: 'object',

	    matchElement: function matchElement(el) {
	        return el.is('object[type="x-im/youtube"]');
	    },

	    import: function _import(el, node) {
	        node.dataType = el.attr('type');
	        node.url = el.attr('url');
	        node.uri = el.attr('uri');
	    },

	    export: function _export(node, el, converter) {
	        var $$ = converter.$$;
	        el.attr({
	            id: node.id,
	            type: node.dataType,
	            url: node.url,
	            uri: node.uri
	        });

	        el.removeAttr('data-id');
	    }
	};

/***/ }
/******/ ]);