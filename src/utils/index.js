import {
  status, messages, successResponse, errorResponse, conflictResponse,
} from './responses';
import * as bcrypt from './bcrypt';
import emailTemplatesFunction from './emailTemplatesFunction';
import getCallbackUrls from './getCallbackUrls';
import Jwt from './jwt';

const { generateToken, verifyToken } = Jwt;

const { hashPassword, comparePassword } = bcrypt;
export {
  status,
  messages,
  successResponse,
  errorResponse,
  conflictResponse,
  bcrypt,
  hashPassword,
  comparePassword,
  emailTemplatesFunction,
  getCallbackUrls,
  Jwt,
  generateToken,
  verifyToken
};
