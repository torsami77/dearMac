"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rules = require("./validators/rules");

const getValidator = validationName => {
  const rules = {
    signUp: _rules.signUp,
    signIn: _rules.signIn,
    validateEmail: _rules.validateEmail,
    updatePassword: _rules.updatePassword
  };
  return rules[validationName];
};

var _default = getValidator;
exports.default = _default;
//# sourceMappingURL=index.js.map