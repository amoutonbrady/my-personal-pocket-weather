module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _inferno = require('inferno');\n\nvar _inferno2 = _interopRequireDefault(_inferno);\n\nvar _infernoComponent = require('inferno-component');\n\nvar _infernoComponent2 = _interopRequireDefault(_infernoComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction handleSearch(instance, e) {\n  var value = e.target.value;\n  instance.setState({ value: value });\n  instance.props.setWeather(value);\n}\n\nvar createVNode = _inferno2.default.createVNode;\n\nvar SearchBox = function (_Component) {\n  _inherits(SearchBox, _Component);\n\n  function SearchBox(props) {\n    _classCallCheck(this, SearchBox);\n\n    var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this, props));\n\n    _this.state = {\n      value: ''\n    };\n    return _this;\n  }\n\n  _createClass(SearchBox, [{\n    key: 'render',\n    value: function render() {\n      return createVNode(512, 'input', null, null, {\n        'value': this.state.value,\n        'onInput': (0, _inferno.linkEvent)(this, handleSearch)\n      });\n    }\n  }]);\n\n  return SearchBox;\n}(_infernoComponent2.default);\n\nexports.default = SearchBox;",
dependencies: ["inferno","inferno-component"],
sourceMap: {},
headerContent: undefined,
mtime: 1500027285926,
devLibsRequired : undefined
};