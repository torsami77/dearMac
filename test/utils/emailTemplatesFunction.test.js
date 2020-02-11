import chai from 'chai';
import { emailTemplatesFunction } from '../../src/utils/index';
import fakeData from '../fakeData/fakeData';

chai.should();

const { data } = fakeData;


describe('Email Templates Test', () => {
  it('Should retrieve Confirm Email template successfully', (done) => {
    const category = 'welcome';
    const result = emailTemplatesFunction(category, data);
    result.should.have.property('subject').equal('You are welcome');
    result.should.have.property('html').to.be.a('string');
    done();
  });

  it('Should retrieve Password Recovery template successfully', (done) => {
    const category = 'passwordRecovery';
    const result = emailTemplatesFunction(category, data);
    result.should.have.property('subject').equal('Recover your password');
    result.should.have.property('html').to.be.a('string');
    done();
  });

  it('Should retrieve Connection Request template successfully', (done) => {
    const category = 'connectRequest';
    const result = emailTemplatesFunction(category, data);
    result.should.have.property('subject').equal('New Connect Request');
    result.should.have.property('html').to.be.a('string');
    done();
  });

  it('Should retrieve Request Feedback template successfully', (done) => {
    const category = 'requestFeedback';
    const result = emailTemplatesFunction(category, data);
    result.should.have.property('subject').equal('Feedback for connect request');
    result.should.have.property('html').to.be.a('string');
    done();
  });
});
