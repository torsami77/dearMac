import chai from 'chai';
import { Jwt } from '../../src/utils';

const { expect } = chai;

describe('Jwt', () => {
  const payload = { id: 1 };
  const secret = 'xxxxxxxxxxxxxxx';
  let token;

  context('generate token', () => {
    it('return a generated token', async () => {
      token = await Jwt.generateToken(payload, secret);
      expect(token).to.be.a('string');
    });
  });
  context('verify token', () => {
    it('return a decoded payload', async () => {
      const decoded = await Jwt.verifyToken(token, secret);
      expect(decoded.id).to.equal(payload.id);
    });
  });
});
