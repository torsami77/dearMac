"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

var services = _interopRequireWildcard(require("../services"));

var _index = require("../utils/index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
const {
  baseUrl
} = _index.getCallbackUrls;
/**
 * @class UserController
 * @description Controllers for Users
 * @exports UsersController
 */

class UsersController {
  /**
   * @method signUpUser
   * @description Method for user registration
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async signUpUser(req, res) {
    try {
      const {
        email
      } = req.body;
      const userExits = await _models.default.users.findOne({
        where: {
          email
        }
      });

      if (userExits) {
        return (0, _index.conflictResponse)(res, _index.status.conflict, _index.messages.signUp.conflict);
      }

      req.body.notifications = 0;
      const user = await _models.default.users.create(req.body);
      const response = user.toJSON(); // eslint-disable-next-line camelcase

      const {
        id,
        first_name
      } = user;
      const token = await _index.Jwt.generateToken({
        id,
        first_name
      });
      const link = `${baseUrl}/users/createpassword?token=${token}`;
      await services.sendEmail(email, 'welcome', {
        first_name,
        link
      });
      return (0, _index.successResponse)(res, _index.status.created, _index.messages.signUp.success, response, token);
    } catch (error) {
      return (0, _index.errorResponse)(res, _index.status.error, _index.messages.signUp.error);
    }
  }
  /**
   * @method updatePassword
   * @description Method for updating password
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */


  static async updatePassword(req, res) {
    const {
      id
    } = req.user;
    req.body.password = await (0, _index.hashPassword)(req.body.password);

    try {
      // eslint-disable-next-line max-len
      const userData = await _models.default.users.update({
        is_verified: true,
        password: req.body.password
      }, {
        where: {
          id
        }
      });

      if (userData) {
        return (0, _index.successResponse)(res, 200, 'Password Updated successful. login to update your profile');
      }
    } catch (error) {
      (0, _index.errorResponse)(res, 403, 'Account confirmation link Invalid');
    }
  }
  /**
   * @method signInUser
   * @description Method for user sign in
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */


  static async signInUser(req, res) {
    try {
      const {
        email,
        password
      } = req.body;
      const user = await _models.default.users.findOne({
        where: {
          email
        }
      });

      if (!user) {
        return (0, _index.errorResponse)(res, _index.status.unauthorized, _index.messages.signIn.invalid);
      }

      const {
        id,
        first_name,
        last_name,
        is_verified,
        pictures,
        notifications
      } = user;

      if (!is_verified) {
        return (0, _index.errorResponse)(res, _index.status.unauthorized, _index.messages.signIn.unverified);
      }

      const isPasswordValid = await _index.bcrypt.comparePassword(user.password, password);

      if (!isPasswordValid) {
        return (0, _index.errorResponse)(res, _index.status.unauthorized, _index.messages.signIn.invalid);
      }

      const response = {
        id,
        first_name,
        last_name,
        is_verified,
        pictures,
        notifications
      };
      const token = await _index.Jwt.generateToken({
        id
      });
      return (0, _index.successResponse)(res, _index.status.success, _index.messages.signIn.success, response, token);
    } catch (error) {
      return (0, _index.errorResponse)(res, _index.status.error, _index.messages.signIn.error);
    }
  }
  /**
   * @method forgotPassword
   * @description Method for user registration
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */


  static async forgotPassword(req, res) {
    try {
      const {
        email
      } = req.body;
      const userExits = await _models.default.users.findOne({
        where: {
          email
        }
      });

      if (!userExits) {
        return (0, _index.errorResponse)(res, 404, 'No user with email');
      }

      const {
        id,
        first_name
      } = userExits;
      const token = await _index.Jwt.generateToken({
        id,
        first_name
      });
      const link = `${baseUrl}/users/createPassword?token=${token}`;
      await services.sendEmail(email, 'welcome', {
        first_name,
        link
      });
      return (0, _index.successResponse)(res, _index.status.success, 'Password Reset Link sent Successfuly', {
        id,
        first_name,
        email
      }, token);
    } catch (error) {
      return (0, _index.errorResponse)(res, 500, error.message);
    }
  }

}

exports.default = UsersController;
//# sourceMappingURL=users.js.map