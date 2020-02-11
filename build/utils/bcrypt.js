"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = exports.hashPassword = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */

/**
   * Hash Password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
const saltRounds = 10;

const salt = _bcryptjs.default.genSaltSync(saltRounds);

const hashPassword = password => _bcryptjs.default.hashSync(password, salt);
/**
   * comparePassword
   * @param {string} hashedPassword
   * @param {string} password
   * @returns {Boolean} return True or False
   */


exports.hashPassword = hashPassword;

const comparePassword = (hashedPassword, password) => _bcryptjs.default.compareSync(password, hashedPassword);

exports.comparePassword = comparePassword;
//# sourceMappingURL=bcrypt.js.map