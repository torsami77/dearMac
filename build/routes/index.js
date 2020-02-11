"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("./api/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express.Router();
router.use('/users', _users.default);
/*
router.use('/', resetPasswordRoute);
router.use('/', accommodationRoute);
router.use('/', roomRoute);
router.use('/auth', authRoutes);
router.use('/users', userRoute);
router.use('/profiles', profileRoutes);
*/

var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map