"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();
const secretKey = process.env.SECRET;
/**
 * @class Jwt
 * @description class for token generation and verification
 * @exports Jwt
 */

class Jwt {
  /**
   * @method generateToken
   * @description Method to generate new token
   * @param {object} payload - The data used to generate the token
   * @param {string} secret - The secret key used to generate the token
   * @returns {string} the generated token
   */
  static async generateToken(payload, secret = secretKey) {
    const token = await _jsonwebtoken.default.sign(payload, secret, {
      expiresIn: '1d'
    });
    return token;
  }
  /**
   * @method verifyToken
   * @description Method to decode the token
   * @param {string} token - The token to be verified
   * @param {string} secret - The secret key used to generate the token
   * @returns {object} the payload decoded from the token
   */


  static async verifyToken(token, secret = secretKey) {
    const decoded = await _jsonwebtoken.default.verify(token, secret);
    return decoded;
  }

}

exports.default = Jwt;
//# sourceMappingURL=jwt.js.map