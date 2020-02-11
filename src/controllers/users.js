/* eslint-disable camelcase */
import models from '../models';
import * as services from '../services';
import {
  status, messages, hashPassword, generateToken,
  successResponse, errorResponse, conflictResponse, Jwt, bcrypt, getCallbackUrls
} from '../utils/index';

const { baseUrl } = getCallbackUrls;

/**
 * @class UserController
 * @description Controllers for Users
 * @exports UsersController
 */
export default class UsersController {
  /**
   * @method signUpUser
   * @description Method for user registration
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async signUpUser(req, res) {
    try {
      const { email } = req.body;
      const userExits = await models.users.findOne({ where: { email } });
      if (userExits) {
        return conflictResponse(res, status.conflict, messages.signUp.conflict);
      }
      req.body.notifications = 0;
      const user = await models.users.create(req.body);
      const response = user.toJSON();
      // eslint-disable-next-line camelcase
      const { id, first_name } = user;
      const token = await Jwt.generateToken({ id, first_name });
      const link = `${baseUrl}/users/createpassword?token=${token}`;
      await services.sendEmail(email, 'welcome', { first_name, link });
      return successResponse(res, status.created, messages.signUp.success, response, token);
    } catch (error) {
      return errorResponse(res, status.error, messages.signUp.error);
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
    const { id } = req.user;
    req.body.password = await hashPassword(req.body.password);

    try {
      // eslint-disable-next-line max-len
      const userData = await models.users.update({ is_verified: true, password: req.body.password }, {
        where: { id }
      });
      if (userData) {
        return successResponse(res, 200, 'Password Updated successful. login to update your profile');
      }
    } catch (error) {
      errorResponse(res, 403, 'Account confirmation link Invalid');
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
      const { email, password } = req.body;
      const user = await models.users.findOne({ where: { email } });
      if (!user) {
        return errorResponse(res, status.unauthorized, messages.signIn.invalid);
      }
      const {
        id, first_name, last_name, is_verified, pictures, notifications
      } = user;

      if (!is_verified) {
        return errorResponse(res, status.unauthorized, messages.signIn.unverified);
      }
      const isPasswordValid = await bcrypt.comparePassword(user.password, password);

      if (!isPasswordValid) {
        return errorResponse(res, status.unauthorized, messages.signIn.invalid);
      }

      const response = {
        id, first_name, last_name, is_verified, pictures, notifications
      };
      const token = await Jwt.generateToken({ id });
      return successResponse(res, status.success, messages.signIn.success, response, token);
    } catch (error) {
      return errorResponse(res, status.error, messages.signIn.error);
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
      const { email } = req.body;
      const userExits = await models.users.findOne({ where: { email } });
      if (!userExits) {
        return errorResponse(res, 404, 'No user with email');
      }
      const { id, first_name } = userExits;
      const token = await Jwt.generateToken({ id, first_name });
      const link = `${baseUrl}/users/createPassword?token=${token}`;
      await services.sendEmail(email, 'welcome', { first_name, link });
      return successResponse(res, status.success, 'Password Reset Link sent Successfuly', { id, first_name, email }, token);
    } catch (error) {
      return errorResponse(res, 500, error.message);
    }
  }
}
