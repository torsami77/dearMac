"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

var _validation = _interopRequireDefault(require("../validation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = validationName => {
  const rules = (0, _validation.default)(validationName);
  return [...rules, (req, res, next) => {
    const errors = (0, _expressValidator.validationResult)(req);
    const resErrorMsg = {};
    errors.array().forEach(error => {
      resErrorMsg[error.param] = error.msg;
    });

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: resErrorMsg
      });
    }

    return next();
  }];
};

exports.default = _default;
//# sourceMappingURL=validate.js.map