"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _routesPago = _interopRequireDefault(require("./routes/routes.pago.js"));
var app = (0, _express["default"])();
app.use(_express["default"].json());
var PORT = process.env.PORT || 9101;
app.set('port', PORT);
app.use('/', _routesPago["default"]);
var _default = exports["default"] = app;