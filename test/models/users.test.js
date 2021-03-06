import chai from 'chai';
import {
  sequelize, dataTypes, checkModelName, checkPropertyExists,
} from 'sequelize-test-helpers';

import UserModel from '../../src/models/users';

const { expect } = chai;
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('Test for user Model', () => {
  const User = UserModel(sequelize, dataTypes);
  const users = new User();

  checkModelName(User)('users');

  context('properties', () => {
    ['email', 'mobile_number', 'first_name', 'last_name', 'gender', 'marital_status', 'date_of_birth', 'career_industry',
      'name_of_employer', 'job_description', 'highest_academic_qualification', 'name_of_institution', 'friends',
      'pictures', 'password', 'is_verified', 'notifications', 'social_media_auth'].forEach(checkPropertyExists(users));
  });
  context('associations', () => {
    const requests = 'the user that makes a request';

    before(() => {
      User.associate({ requests });
    });

    it('defined a hasMany association with Requests', () => {
      expect(User.hasMany).to.have.been.calledWith(requests, { as: 'userRequests', foreignKey: 'requester_id' });
    });
  });
});
