import emailTemplates from './emailTemplates/index';

const {
  welcome,
  passwordRecovery,
  connectRequest,
  requestFeedback,
} = emailTemplates;

let html;
const emailTemplatesFunction = (category, data) => {
  switch (category) {
    case 'welcome':
      html = welcome(data);
      return {
        subject: 'You are welcome',
        html,
      };
    case 'passwordRecovery':
      html = passwordRecovery(data);
      return {
        subject: 'Recover your password',
        html,
      };
    case 'connectRequest':
      html = connectRequest(data);
      return {
        subject: 'New Connect Request',
        html,
      };
    case 'requestFeedback':
      html = requestFeedback(data);
      return {
        subject: 'Feedback for connect request',
        html,
      };
    default:
      return false;
  }
};

export default emailTemplatesFunction;
