import express from 'express';
import { UsersController } from '../../controllers';
import middleware from '../../middlewares';

const { Authenticate, validate } = middleware;

const {
  signUpUser, updatePassword, signInUser, forgotPassword
} = UsersController;

const router = express.Router();

router.post('/signup', validate('signUp'), signUpUser);
router.put('/updatepassword', Authenticate.verifyToken, validate('updatePassword'), updatePassword);
router.post('/signin', validate('signIn'), signInUser);
router.post('/forgotpassword', validate('validateEmail'), forgotPassword);


export default router;
