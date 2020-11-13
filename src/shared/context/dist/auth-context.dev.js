"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthContext = void 0;

var _react = require("react");

var AuthContext = (0, _react.createContext)({
  isLoggedIn: false,
  login: function login() {},
  logout: function logout() {}
});
exports.AuthContext = AuthContext;