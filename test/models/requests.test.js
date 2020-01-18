import { expect } from 'chai';
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} from 'sequelize-test-helpers';

import RequestModel from '../../src/models/requests';

describe('Test for Request Model', () => {
  const Request = RequestModel(sequelize, dataTypes);
  const requests = new Request();

  checkModelName(Request)('requests');

  context('properties', () => {
    ['requester_id', 'requester_fullnames', 'requestee_id', 'requestee_fullnames', 'request_status'].forEach(checkPropertyExists(requests));
  });
});
