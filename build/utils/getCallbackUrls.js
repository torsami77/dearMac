"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
const environment = process.env.NODE_ENV;
const testEnvironment = !(environment === 'development' || environment === 'staging' || environment === 'production');
const productionEnvironment = environment === 'production' || environment === 'staging';
let baseUrl;
if (productionEnvironment) baseUrl = 'https://dearmac.herokuapp.com/api/v1';else baseUrl = 'http://localhost:3000/api/v1';
const googleCallbackUrl = `${baseUrl}/auth/google/callback`;
const facebookCallbackUrl = `${baseUrl}/auth/facebook/callback`;
var _default = {
  baseUrl,
  testEnvironment,
  googleCallbackUrl,
  facebookCallbackUrl
};
exports.default = _default;
//# sourceMappingURL=getCallbackUrls.js.map