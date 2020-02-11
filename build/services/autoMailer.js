"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

_mail.default.setApiKey(process.env.SENDGRID_API_KEY);
/**
 * Creates an instance of sendMail.
 *
 * @constructor
 * @param {string} receiver The desired email addres of the recipient.
 * @param {string} category Either of 'welcome' or 'passwordRecovery'.
 * @param {object} data Information about the user.
 * @param {string} data.firstName The first name of the requester.
 * @param {string} data.url The URL to be passed as string.
 */


const sendEmail = async (receiver, category, data) => {
  try {
    const retrievedData = (0, _utils.emailTemplatesFunction)(category, data);
    const {
      html,
      subject
    } = retrievedData;
    const msg = {
      to: receiver,
      from: 'hello@dearmac.herokuapp.com',
      subject,
      html
    };
    const result = await _mail.default.send(msg);

    if (result[0] && result[0].request) {
      return {
        success: true,
        message: 'Email sent successfully'
      };
    }
  } catch (error) {
    return {
      success: false,
      error
    };
  }
};

var _default = sendEmail;
exports.default = _default;
//# sourceMappingURL=autoMailer.js.map