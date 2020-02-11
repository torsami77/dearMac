import {
  signUp, signIn, validateEmail, updatePassword
} from './validators/rules';
  
const getValidator = (validationName) => {
  const rules = {
    signUp,
    signIn,
    validateEmail,
    updatePassword,
  };
  
  return rules[validationName];
};
  
export default getValidator;
