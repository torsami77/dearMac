"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _welcome = _interopRequireDefault(require("./welcome"));

var _passwordRecovery = _interopRequireDefault(require("./passwordRecovery"));

var _connectRequest = _interopRequireDefault(require("./connectRequest"));

var _requestFeedback = _interopRequireDefault(require("./requestFeedback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  welcome: _welcome.default,
  passwordRecovery: _passwordRecovery.default,
  connectRequest: _connectRequest.default,
  requestFeedback: _requestFeedback.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map