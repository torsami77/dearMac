"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Sequelize
} = _models.default;
/**
 * @class Authenticate
 * @description authenticate tokens and roles
 * @exports Authenticate
 */

class Authenticate {
  /**
   * Verify if token is valid
   * @param  {object} req - The user request object
   * @param  {object} res - The user res response object
   * @param  {function} next - The next() Function
   * @returns {String} req.userId - The user id
   */
  static async verifyToken(req, res, next) {
    try {
      const {
        headers: {
          authorization
        }
      } = req;
      const token = authorization.split(' ')[1];

      if (!token || token === '') {
        return (0, _utils.errorResponse)(res, 401, 'Access denied.');
      }

      const decoded = await (0, _utils.verifyToken)(token);

      if (!(decoded && decoded.id)) {
        return (0, _utils.errorResponse)(res, 401, 'Access denied. We could not verify user');
      }

      req.user = decoded;
      return next();
    } catch (error) {
      return (0, _utils.errorResponse)(res, 500, 'Server error');
    }
  }
  /**
   * Verify if role is Admin or Super Admin
   * @param  {object} req - The user request object
   * @param  {object} res - The user res response object
   * @param  {function} next - The next() Function
   * @returns {String} req.userId - The user id
   */


  static async verifyAdmin(req, res, next) {
    const {
      userId
    } = req.user;
    const condition = {
      where: {
        userId,
        role: {
          [Sequelize.Op.or]: ['Admin', 'Super Admin']
        }
      }
    };

    try {
      const verify = await Authenticate.findSuperUser(condition);

      if (!verify) {
        return (0, _utils.errorResponse)(res, 401, 'Access denied.');
      }

      return next();
    } catch (error) {
      return (0, _utils.errorResponse)(res, 500, 'Server error');
    }
  }

}

var _default = Authenticate;
exports.default = _default;
//# sourceMappingURL=authenticate.js.map