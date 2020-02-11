"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./emailTemplates/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  welcome,
  passwordRecovery,
  connectRequest,
  requestFeedback
} = _index.default;
let html;

const emailTemplatesFunction = (category, data) => {
  switch (category) {
    case 'welcome':
      html = welcome(data);
      return {
        subject: 'You are welcome',
        html
      };

    case 'passwordRecovery':
      html = passwordRecovery(data);
      return {
        subject: 'Recover your password',
        html
      };

    case 'connectRequest':
      html = connectRequest(data);
      return {
        subject: 'New Connect Request',
        html
      };

    case 'requestFeedback':
      html = requestFeedback(data);
      return {
        subject: 'Feedback for connect request',
        html
      };

    default:
      return false;
  }
};

var _default = emailTemplatesFunction;
exports.default = _default;
//# sourceMappingURL=emailTemplatesFunction.js.map