"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultRouter = (0, _express["default"])();
defaultRouter.get('/api/v1', function (req, res) {
  return res.status(200).json({
    message: 'Welcome Opeke Backend App'
  });
});
defaultRouter.get('*', function (req, res) {
  return res.status(404).json({
    message: 'Cannot find Opeke Backend App'
  });
});
var _default = defaultRouter;
exports["default"] = _default;