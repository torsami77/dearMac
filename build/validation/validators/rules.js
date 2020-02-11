"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.updatePassword = exports.signUp = exports.validateEmail = void 0;

var _expressValidator = require("express-validator");

var _validatePhoneNumberNodeJs = _interopRequireDefault(require("validate-phone-number-node-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// add validation rules here.

/* regex description
the regex /^[A-Za-z\-']{2,250}$/
is made up of a single character set, between
[], with a quantifier {2,250}
A-Za-z => matches upper and lowercase alphabets
\-' => matches a - and a '
the last {2,250} is a quantifier specifying that the character been matched
should be > 1 and <= 250
the ^ and $ runs the match from the beginning and end of the string
*/
const nameRegex = /^[A-Za-z\-']{2,20}$/;

const checkEmail = (input, message) => (0, _expressValidator.body)(input).not().isEmpty().isEmail().withMessage(message);

const validateEmail = [checkEmail('email', 'Please provide a valid email')];
exports.validateEmail = validateEmail;
const signUp = [(0, _expressValidator.body)('email', 'Please provide a valid email').isEmail().not().isEmpty(), (0, _expressValidator.body)('mobile_number').custom(value => {
  if (_validatePhoneNumberNodeJs.default.validate(value) !== true) {
    throw new Error('Invalid mobile number');
  }

  return true;
}), (0, _expressValidator.body)('first_name', 'First name should be alphabets between 2 and 20 characters').matches(nameRegex).trim(), (0, _expressValidator.body)('last_name', 'Last name should be alphabets between 2 and 20 characters').matches(nameRegex).trim(), (0, _expressValidator.body)('gender', 'Please indicate gender').isIn(['male', 'female']), (0, _expressValidator.body)('marital_status', 'Please indicate marital status').isIn(['single', 'married', 'divorced', 'widowed']), (0, _expressValidator.body)('date_of_birth', 'Date of birth must be in correct format yyyy:mm:dd').exists().not().isEmpty().isISO8601('yyyy-mm-dd'), (0, _expressValidator.body)('career_industry', 'Please idicate career industry').isIn(['aviation', 'arts', 'business', 'law enforcement', 'media', 'medical', 'service', 'teaching', 'technology']), (0, _expressValidator.body)('name_of_employer', 'Name of employer cannot be empty').exists().not().isEmpty(), (0, _expressValidator.body)('job_description', 'Job description cannot be empty').exists().not().isEmpty(), (0, _expressValidator.body)('highest_academic_qualification', 'Name indicate highest academic qualification').isIn(['High School', 'Diploma', 'HND/B.A./B.Sc/B.Ed', 'M.A./P.G.D.', 'P.H.D.', 'Others']), (0, _expressValidator.body)('name_of_institution', 'Name of institution cannot be empty').exists().not().isEmpty()];
exports.signUp = signUp;
const updatePassword = [(0, _expressValidator.body)('password', 'password should be at least 6 characters').isLength({
  min: 6
}), (0, _expressValidator.body)('confirmPassword').custom((value, {
  req
}) => {
  if (value !== req.body.password) {
    throw new Error('Password confirmation does not match');
  }

  return true;
})];
exports.updatePassword = updatePassword;
const signIn = [(0, _expressValidator.body)('email', 'email is invalid, please provide a valid mail').isEmail().not().isEmpty(), (0, _expressValidator.body)('password', 'password should be at least 6 characters').isLength({
  min: 6
}).not().isEmpty()];
exports.signIn = signIn;
//# sourceMappingURL=rules.js.map