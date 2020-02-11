import chai from 'chai';
import { sendEmail } from '../../src/services/index';
import fakeData from '../fakeData/fakeData';

chai.should();

const {
  token, data
} = fakeData;
const { email } = fakeData;

let category;
describe('Send Email Test', () => {
  it('Should send Account verification mail successfuly', async function callBack() {
    this.timeout(20000);
    const link = `https://dearmac.herokuapp.com/createPassword/test/${token}`;
    data.link = link;
    category = 'welcome';
    const result = await sendEmail(email, category, data);
    result.success.should.equal(true);
    result.message.should.equal('Email sent successfully');
  });

  it('Should send Password Recovery mail successfuly', async function callBack() {
    this.timeout(20000);
    const link = `https://dearmac.herokuapp.com/resetPassword/test/${token}`;
    data.link = link;
    category = 'passwordRecovery';
    const result = await sendEmail(email, category, data);
    result.success.should.equal(true);
    result.message.should.equal('Email sent successfully');
  });

  it('Should send connect Request mail successfuly', async function callBack() {
    this.timeout(20000);
    const link = `https://dearmac.herokuapp.com/connectRequest/test/${token}`;
    data.link = link;
    category = 'connectRequest';
    const result = await sendEmail(email, category, data);
    result.success.should.equal(true);
    result.message.should.equal('Email sent successfully');
  });

  it('Should send connect Feedback mail successfuly', async function callBack() {
    this.timeout(20000);
    const link = `https://dearmac.herokuapp.com/connectFeedback/test/${token}`;
    data.link = link;
    category = 'requestFeedback';
    const result = await sendEmail(email, category, data);
    result.success.should.equal(true);
    result.message.should.equal('Email sent successfully');
  });

  it('Should handle email verification mail error', async function callBack() {
    this.timeout(20000);
    const link = `https://dearmac.herokuapp.com/errorHandling/test/${token}`;
    data.link = link;
    category = 'invalid';
    const result = await sendEmail('invalid', category, data);
    result.success.should.equal(false);
    result.should.have.property('error');
  });
});
