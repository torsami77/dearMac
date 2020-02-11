import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import { emailTemplatesFunction } from '../utils';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
    const retrievedData = emailTemplatesFunction(category, data);
    const {
      html,
      subject
    } = retrievedData;
    const msg = {
      to: receiver,
      from: 'hello@dearmac.herokuapp.com',
      subject,
      html,
    };
    const result = await sgMail.send(msg);
    if (result[0] && result[0].request) {
      return { success: true, message: 'Email sent successfully' };
    }
  } catch (error) {
    return { success: false, error };
  }
};

export default sendEmail;
