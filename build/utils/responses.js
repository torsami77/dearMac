"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conflictResponse = exports.messages = exports.errorResponse = exports.successResponse = exports.status = void 0;

/* eslint-disable camelcase */
const messages = {
  signUp: {
    success: 'User Created Successfully',
    error: 'Could not sign up user try again',
    conflict: 'User with that email already exist'
  },
  signIn: {
    success: 'Successfully Signed In',
    notfound: 'User Cannot be found',
    error: 'Could not sign in user try again',
    invalid: 'Invalid Credentials',
    unverified: 'Email not verified, check your mail to verify'
  }
};
exports.messages = messages;
const status = {
  success: 200,
  error: 500,
  notfound: 404,
  unauthorized: 401,
  conflict: 409,
  created: 201,
  bad: 400,
  nocontent: 204,
  unprocessable: 422
};
exports.status = status;

const forgeResponse = (res, statusCode, message, data = null, token = null) => {
  const response = {
    status: statusCode,
    message
  };
  if (data) response.data = data;
  if (data && token) response.data.token = token;
  return res.status(statusCode).json(response);
};

const successResponse = (res, statusCode, message, userData, token) => forgeResponse(res, statusCode, message, userData, token);

exports.successResponse = successResponse;

const errorResponse = (res, statusCode, message) => forgeResponse(res, statusCode, message);

exports.errorResponse = errorResponse;

const conflictResponse = (res, statusCode, message) => forgeResponse(res, statusCode, message);

exports.conflictResponse = conflictResponse;
//# sourceMappingURL=responses.js.map