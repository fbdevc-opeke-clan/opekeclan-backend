"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _default2 = _interopRequireDefault(require("./routes/default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */
var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use('/', _default2["default"]);

var _default = app.listen(port, function () {
  return console.log("Server running on port ".concat(port, " \uD83D\uDD25"));
});

exports["default"] = _default;