/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _action = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buyticket = function (_React$Component) {
    _inherits(Buyticket, _React$Component);

    function Buyticket(props) {
        _classCallCheck(this, Buyticket);

        return _possibleConstructorReturn(this, (Buyticket.__proto__ || Object.getPrototypeOf(Buyticket)).call(this, props));
    }

    _createClass(Buyticket, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch((0, _action.getShowtimesFetch)());
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    { className: 'main-header' },
                    'Buyticket page'
                ),
                _react2.default.createElement(
                    'style',
                    { jsx: true },
                    '\n                    .main-header {\n                        text-align:center;\n                    }\n                '
                )
            );
        }
    }]);

    return Buyticket;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        getShowtimesFetch: state
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Buyticket);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNowShowing = getNowShowing;
exports.getShowTimes = getShowTimes;
exports.nowShowingFetch = nowShowingFetch;
exports.getShowtimesFetch = getShowtimesFetch;

var _constants = __webpack_require__(5);

function getNowShowing(data) {
    return {
        type: "NOW_SHOWING_API_DATA",
        payload: data
    };
}

function getShowTimes(data) {
    return {
        type: "SHOW_TIMES_API_DATA",
        payload: data
    };
}

function nowShowingFetch() {
    return function (dispatch) {
        console.log('now showing');
        // DE_Trending_Movie_NS.getNowShowingData().then(data => {
        //     return dispatch(getNowShowing(data));
        // }).catch((err) => console.log('Error while fetching nowshowing data: ', err));
    };
}

function getShowtimesFetch() {
    return function (dispatch) {
        console.log('showtimes');
        // DE_GET_Showtimes_By_Event.getShowTimesData().then(data => {
        //     return dispatch(getShowTimes(data));
        // }).catch((err) => console.log('Error while fetching nowshowing data: ', err));
    };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var NOW_SHOWING_API_DATA = exports.NOW_SHOWING_API_DATA = 'NOW_SHOWING_API_DATA';
var SHOW_TIMES_API_DATA = exports.SHOW_TIMES_API_DATA = 'SHOW_TIMES_API_DATA';

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(9);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(14);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var axios = __webpack_require__(18);

function getNowShowingData() {
    return axios.get('<API_URL>' + username);
}

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {

    var store = (0, _createStore2.default)();

    res.send((0, _renderer2.default)(req, store));
});

var port = 3333;
app.listen(port, function () {
    console.log('running on port : ', port);
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {

    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: {} },
            _react2.default.createElement(_routes2.default, null)
        )
    ));

    return '\n        <!doctype html>\n        <html>\n            <head>\n                <title>Bookmyshow app</title>\n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n                <script src="bundle.js"></script>\n            </body>\n        </html>\n    ';
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Buyticket = __webpack_require__(3);

var _Buyticket2 = _interopRequireDefault(_Buyticket);

var _HomePage = __webpack_require__(12);

var _HomePage2 = _interopRequireDefault(_HomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomePage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/buyticket', component: _Buyticket2.default })
    );
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _action = __webpack_require__(4);

var _Listing = __webpack_require__(13);

var _Listing2 = _interopRequireDefault(_Listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
    }

    _createClass(HomePage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch((0, _action.nowShowingFetch)());
        }
    }, {
        key: 'render',
        value: function render() {

            var carDom = [];
            var eventCardsData = this.props.nowShowingData.globalReducer.nowShowing.BookMyShow;
            var cardsData = this.props.nowShowingData.globalReducer.nowShowing.BookMyShow ? this.props.nowShowingData.globalReducer.nowShowing.BookMyShow.arrEvents : [];
            console.log('cardsData: ', this.props);
            cardsData.forEach(function (value, key) {
                carDom.push(_react2.default.createElement(_Listing2.default, { key: key, events: value }));
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Now Showing'
                ),
                _react2.default.createElement('div', { className: 'border-space' }),
                _react2.default.createElement(
                    'div',
                    { className: 'cards' },
                    carDom
                ),
                _react2.default.createElement(
                    'style',
                    { jsx: true, global: true },
                    '\n                    h1{\n                        text-align: center;\n                        border-bottom: 1px solid #d1d1d1;\n                        padding-bottom: 10px;\n                    }\n                    .cards {\n                        width: 100%;\n                        display: inline-block;\n                    }\n                    .border-space{\n                        padding-bottom:10px;\n                    }\n                '
                )
            );
        }
    }]);

    return HomePage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        nowShowingData: state
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(HomePage);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Buyticket = __webpack_require__(3);

var _Buyticket2 = _interopRequireDefault(_Buyticket);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listing = function (_React$Component) {
    _inherits(Listing, _React$Component);

    function Listing() {
        _classCallCheck(this, Listing);

        return _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).apply(this, arguments));
    }

    _createClass(Listing, [{
        key: 'render',
        value: function render() {

            var currentDate = function currentDate() {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!

                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }
                var today = yyyy + '' + mm + '' + dd;
                return today;
            };

            var movieName = this.props.events.EventTitle;
            var imageUrl = this.props.events.ChildEvents[0].EventImageCode;
            var buyticketEventTitle = this.props.events.EventURLTitle + '';
            var buyticketEventCode = this.props.events.EventCode;
            var imagePathURL = imageUrl != '' ? 'IMAGE_URL' + imageUrl + '.jpg' : 'IMAGE_URL';
            var buyticketURL = '/buyticket/' + buyticketEventTitle + '/movie-mumbai-' + buyticketEventCode + '/' + currentDate();

            return _react2.default.createElement(
                'div',
                { className: 'card' },
                _react2.default.createElement(
                    'div',
                    { className: 'img' },
                    _react2.default.createElement('img', { src: imagePathURL, alt: 'now showing' }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'div',
                        { className: 'movie-name' },
                        _react2.default.createElement(
                            'p',
                            null,
                            movieName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: '_btn' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: 'book-now', to: buyticketURL, alt: 'book now' },
                            'Book now'
                        )
                    )
                ),
                _react2.default.createElement(
                    'style',
                    { jsx: true, global: true },
                    '   \n                    .card {\n                        text-align: center;\n                        display: inline-block;\n                        padding: 40px;\n                    }\n                    .book-now {\n                        padding: 10px;\n                        width: 94%;\n                        background: #c02c39;\n                        color: #fff;\n                        text-decoration: none;\n                        display: inline-block;\n                    }                 \n                '
                )
            );
        }
    }]);

    return Listing;
}(_react2.default.Component);

exports.default = Listing;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(15);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(16);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)(_reducer2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    return store;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(5);

var _redux = __webpack_require__(6);

var globalReducer = function globalReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { nowShowing: [], showtimes: [] };
    var action = arguments[1];

    console.log('action.type: ', action);
    switch (action.type) {

        case "NOW_SHOWING_API_DATA":
            return Object.assign({}, state, { nowShowing: action.payload });

        case "SHOW_TIMES_API_DATA":
            return Object.assign({}, state, { showtimes: action.payload });

        default:
            console.log('default reducer');
            return state;
    }
};

var global_data = (0, _redux.combineReducers)({
    globalReducer: globalReducer
});

exports.default = global_data;

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);