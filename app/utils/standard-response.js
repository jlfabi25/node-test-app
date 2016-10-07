'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _freeze = require('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_CODE = 'statusCode';
var ERRORS = 'errors';
var INFOS = 'infos';
var WARNINGS = 'warnings';
var DATA = 'data';
var OPTIONS = 'options';
var PROP_NAMES = 'propNames';
var PRIVATE = (0, _symbol2.default)('private');

var defaultPropNames = ['name', 'message'];
var freeze = function freeze(obj) {
    if (Object(obj) === obj) {
        (0, _freeze2.default)(obj);
        (0, _values2.default)(obj).forEach(freeze);
    }
    return obj;
};

var StandardResponse = function () {
    function StandardResponse() {
        var _PRIVATE;

        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        (0, _classCallCheck3.default)(this, StandardResponse);

        this[PRIVATE] = (_PRIVATE = {}, (0, _defineProperty3.default)(_PRIVATE, STATUS_CODE, 0), (0, _defineProperty3.default)(_PRIVATE, ERRORS, []), (0, _defineProperty3.default)(_PRIVATE, INFOS, []), (0, _defineProperty3.default)(_PRIVATE, WARNINGS, []), (0, _defineProperty3.default)(_PRIVATE, DATA, {}), (0, _defineProperty3.default)(_PRIVATE, OPTIONS, freeze((0, _extends3.default)({}, options))), _PRIVATE);
    }

    (0, _createClass3.default)(StandardResponse, [{
        key: 'serializeError',
        value: function serializeError(obj) {
            var propNames = this[PRIVATE][OPTIONS][PROP_NAMES] || defaultPropNames;
            var result = obj;
            if (obj instanceof Error) {
                result = propNames.reduce(function (copy, prop) {
                    if (prop in obj) {
                        copy[prop] = obj[prop];
                    }
                    return copy;
                }, {});
            }
            return result;
        }
    }, {
            key: 'toJSON',
            value: function toJSON() {
                var _operationStatus;

                return (0, _defineProperty3.default)({
                    operationStatus: (_operationStatus = {}, (0, _defineProperty3.default)(_operationStatus, STATUS_CODE, this[STATUS_CODE]), (0, _defineProperty3.default)(_operationStatus, ERRORS, this[ERRORS]), (0, _defineProperty3.default)(_operationStatus, INFOS, this[INFOS]), (0, _defineProperty3.default)(_operationStatus, WARNINGS, this[WARNINGS]), _operationStatus)
                }, DATA, this[DATA]);
            }
        }, {
            key: STATUS_CODE,
            set: function set(code) {
                if (typeof code !== 'number') {
                    throw new TypeError('statusCode must be a number.');
                }
                this[PRIVATE][STATUS_CODE] = code;
            },
            get: function get() {
                return this[PRIVATE][STATUS_CODE];
            }
        }, {
            key: 'error',
            set: function set(err) {
                this[PRIVATE][ERRORS][this[PRIVATE][ERRORS].length] = freeze(this.serializeError(err));
            }
        }, {
            key: ERRORS,
            get: function get() {
                return [].concat((0, _toConsumableArray3.default)(this[PRIVATE][ERRORS]));
            }
        }, {
            key: 'info',
            set: function set(info) {
                this[PRIVATE][INFOS][this[PRIVATE][INFOS].length] = freeze(this.serializeError(info));
            }
        }, {
            key: INFOS,
            get: function get() {
                return [].concat((0, _toConsumableArray3.default)(this[PRIVATE][INFOS]));
            }
        }, {
            key: 'warn',
            set: function set(warn) {
                this[PRIVATE][WARNINGS][this[PRIVATE][WARNINGS].length] = freeze(this.serializeError(warn));
            }
        }, {
            key: WARNINGS,
            get: function get() {
                return [].concat((0, _toConsumableArray3.default)(this[PRIVATE][WARNINGS]));
            }
        }, {
            key: DATA,
            set: function set(data) {
                this[PRIVATE][DATA] = data;
            },
            get: function get() {
                return this[PRIVATE][DATA];
            }
        }]);
    return StandardResponse;
} ();

exports.default = StandardResponse;
