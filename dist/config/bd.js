"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;
var _promise = _interopRequireDefault(require("mysql2/promise"));
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var pool = exports.pool = _promise["default"].createPool({
  host: process.env.SERVIDOR,
  user: process.env.USUARIO,
  password: process.env.PASSWORD,
  port: process.env.BASEPUERTO,
  database: process.env.BASEDEDATOS
});

// SERVIDOR = "localhost"
// BASEDEDATOS = "examenbecerra"
// BASEPUERTO = 3306
// USUARIO = "root"
// PASSWORD = ""