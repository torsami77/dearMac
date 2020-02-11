"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../../controllers");

var _middlewares = _interopRequireDefault(require("../../middlewares"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Authenticate,
  validate
} = _middlewares.default;
const {
  signUpUser,
  updatePassword,
  signInUser,
  forgotPassword
} = _controllers.UsersController;

const router = _express.default.Router();

router.post('/signup', validate('signUp'), signUpUser);
router.put('/updatepassword', Authenticate.verifyToken, validate('updatePassword'), updatePassword);
router.post('/signin', validate('signIn'), signInUser);
router.post('/forgotpassword', validate('validateEmail'), forgotPassword);
var _default = router;
exports.default = _default;
//# sourceMappingURL=users.js.map