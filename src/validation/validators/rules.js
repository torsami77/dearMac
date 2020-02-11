import { body, param } from 'express-validator';
import validatePhoneNumber from 'validate-phone-number-node-js';

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

const checkEmail = (input, message) => body(input)
  .not()
  .isEmpty()
  .isEmail()
  .withMessage(message);

export const validateEmail = [
  checkEmail('email', 'Please provide a valid email')
];

export const signUp = [
  body('email', 'Please provide a valid email')
    .isEmail()
    .not()
    .isEmpty(),
  body('mobile_number').custom((value) => {
    if (validatePhoneNumber.validate(value) !== true) {
      throw new Error('Invalid mobile number');
    }
    return true;
  }),
  body('first_name', 'First name should be alphabets between 2 and 20 characters')
    .matches(nameRegex)
    .trim(),
  body('last_name', 'Last name should be alphabets between 2 and 20 characters')
    .matches(nameRegex)
    .trim(),
  body('gender', 'Please indicate gender').isIn(['male', 'female']),
  body('marital_status', 'Please indicate marital status').isIn(['single', 'married', 'divorced', 'widowed']),
  body('date_of_birth', 'Date of birth must be in correct format yyyy:mm:dd')
    .exists()
    .not()
    .isEmpty()
    .isISO8601('yyyy-mm-dd'),
  body('career_industry', 'Please idicate career industry').isIn(['aviation', 'arts', 'business', 'law enforcement', 'media', 'medical', 'service', 'teaching', 'technology']),
  body('name_of_employer', 'Name of employer cannot be empty')
    .exists()
    .not()
    .isEmpty(),
  body('job_description', 'Job description cannot be empty')
    .exists()
    .not()
    .isEmpty(),
  body('highest_academic_qualification', 'Name indicate highest academic qualification').isIn(['High School', 'Diploma', 'HND/B.A./B.Sc/B.Ed', 'M.A./P.G.D.', 'P.H.D.', 'Others']),
  body('name_of_institution', 'Name of institution cannot be empty')
    .exists()
    .not()
    .isEmpty(),
];

export const updatePassword = [
  body('password', 'password should be at least 6 characters').isLength({ min: 6 }),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match');
    }
    return true;
  })
];

export const signIn = [
  body('email', 'email is invalid, please provide a valid mail')
    .isEmail()
    .not()
    .isEmpty(),
  body('password', 'password should be at least 6 characters')
    .isLength({ min: 6 })
    .not()
    .isEmpty(),
];
